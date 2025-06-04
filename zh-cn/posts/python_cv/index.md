#  代码储存：python 年份、 stata 稳健性平行趋势检验




> 储存下 python、stata 的一个代码。
## 使用 python cv 包的一次体验


最近在研究法院随机分案。老师看到了一篇论文讨论随机分案的利弊——《[Algorithm as Manager: How Algorithmic Judge-Case Assignment Influences Court Performance](https://sites.google.com/utexas.edu/ruizuo11/research)》[^1]。

如何判断当地法院是否执行了随机分案？这位作者一个很聪明的做法是通过政府采购信息进行辨别，如果当地法院公共采购购买了随机分案系统，那么就执行了随机分案。按照作者的资料，目前法院有纯随机分案和机器学习两种方式。

目前作者只定位到了省级，假设省里面存在一个法院进行了随机分案，全省统一（图片注释说未来会更新到地区层面）。

![如图](/img/pythonGIS.zh-cn-20250524102004632.webp)

虽然肉眼也能看出来省级年份，但是为了方便以后我通过图像定位更细的颜色（理论上这篇论文的色彩分布应该具体到了季度层面？），同时早就想试试看 cv 包，所以通过 ai 尝试了下。

使用步骤如下：

- 定位图片地址（不能包含中文）。
- 框选两个色条（左侧和右侧），定位初始时间和最终时间。
- 双击自己想要判断的像素点——直接得到对应的年份。

![如图](/img/pythonGIS.zh-cn-20250524102618436.webp)

完整代码如下（GPT 和 Gmini）联合生成：

```python
!pip install opencv-python
import cv2
import numpy as np
from scipy.interpolate import interp1d

# 全域變數
random_colors = None
random_interp = None
ml_colors = None
ml_interp = None
img_rgb = None          # 原始圖片的 RGB 格式
img_raw = None          # 原始圖片的 BGR 格式 (用於顯示和臨時繪圖)
img_with_rois = None    # 帶有永久繪製的 ROI 框的圖片

# 全域變數用於 ROI 選擇
roi_points = [] # 儲存點擊的 (x, y) 座標
# ROI 選擇階段的狀態機:
# 0: 準備選擇 '隨機分案' 色標的起點 (等待第一次點擊)
# 1: 選擇 '隨機分案' 色標的終點 (第一次點擊已發生，等待第二次點擊)
# 2: '隨機分案' 色標已選定，準備選擇 '機器學習' 色標的起點 (等待第三次點擊)
# 3: 選擇 '機器學習' 色標的終點 (第三次點擊已發生，等待第四次點擊)
# 4: 兩個色標均已選定，進入年份識別階段
selecting_roi_state = 0

# 建立色標 → 年份的插值函數
# 參數:
#   roi: 圖片中色標的區域 (numpy 陣列，包含色標的像素數據)
#   year_min: 色標代表的最小年份 (例如: 2014)
#   year_max: 色標代表的最大年份 (例如: 2020)
#   debug_name: 用於調試輸出的色標名稱
# 返回值:
#   center_col: 色標中心列的 RGB 顏色序列 (N x 3 numpy 陣列)
#   interp_func: 從像素在色標中的垂直位置 (索引) 到年份的插值函數
def build_color_axis(roi, year_min=2014, year_max=2020, debug_name="色標"):
    h = roi.shape[0] # 色標區域的高度
    # 從 ROI 中選取中心列的像素顏色。我們假設色標是垂直的。
    center_col = roi[:, roi.shape[1] // 2, :]

    # 確保年份從上到下（從 year_max 到 year_min）對應像素索引 (0 到 h-1)
    # 這樣色條頂部 (索引 0) 對應 year_max (2020)，底部 (索引 h-1) 對應 year_min (2014)
    years = np.linspace(year_max, year_min, h)

    print(f"\n--- 調試信息: {debug_name} ---")
    print(f"ROI 高度: {h} 像素")
    print(f"色標頂部顏色 (索引 0): {center_col[0]}, 預期年份: {years[0]:.2f}")
    print(f"色標底部顏色 (索引 {h-1}): {center_col[h-1]}, 預期年份: {years[h-1]:.2f}")
    print(f"插值映射: 索引 0 -> {year_max}, 索引 {h-1} -> {year_min}")
    print(f"示例年份 (頂部, 中間, 底部): {years[0]:.2f}, {years[h//2]:.2f}, {years[h-1]:.2f}")

    return center_col, interp1d(np.arange(h), years, bounds_error=False, fill_value="extrapolate")

# 匹配單個顏色到最近的色標顏色，並返回對應年份
# 參數:
#   sample_color: 要匹配的單個像素顏色 (1x3 numpy 陣列，RGB 值)
#   color_axis: 預先建立的色標顏色序列 (N x 3 numpy 陣列)
#   interp_func: 對應色標的插值函數
# 返回值:
#   年份 (浮點數)
def match_color_to_year(sample_color, color_axis, interp_func):
    # 計算樣本顏色與色標顏色序列中所有顏色的歐幾里得距離
    dists = np.linalg.norm(color_axis - sample_color, axis=1)
    idx = np.argmin(dists) # 找到距離最近的顏色在色標顏色序列中的索引
    # 使用插值函數將找到的索引轉換為對應的年份
    return float(interp_func(idx))

# 鼠標點擊事件處理函數 (年份識別階段)
# 當用戶點擊圖片時，此函數會被呼叫
def click_event(event, x, y, flags, param):
    if event == cv2.EVENT_LBUTTONDOWN: # 檢查是否為鼠標左鍵點擊事件
        global img_rgb, random_colors, random_interp, ml_colors, ml_interp

        # 確保必要的全局變數已經被初始化
        if img_rgb is None or random_colors is None or ml_colors is None:
            print("錯誤：圖片或色標數據未載入。請確保已成功框選色標。")
            return

        print(f"\n點擊位置: ({x}, {y})")
        # 獲取點擊位置的像素顏色 (RGB 值)
        clicked_color = img_rgb[y, x, :]
        print(f"點擊像素顏色 (RGB): {clicked_color}")

        # 計算點擊顏色與兩個色標的最小距離
        random_dists = np.linalg.norm(random_colors - clicked_color, axis=1)
        ml_dists = np.linalg.norm(ml_colors - clicked_color, axis=1)

        random_dist = np.min(random_dists)
        ml_dist = np.min(ml_dists)

        print(f"與 '隨機分案' 色標的最小距離: {random_dist:.2f}")
        print(f"與 '機器學習' 色標的最小距離: {ml_dist:.2f}")

        # 根據哪個色標的距離更小，決定點擊的顏色屬於哪種改革類型
        if random_dist < ml_dist:
            reform_type = "隨機分案"
            # 使用 '隨機分案' 的插值函數來獲取年份
            reform_time = match_color_to_year(clicked_color, random_colors, random_interp)
        else:
            reform_type = "機器學習"
            # 使用 '機器學習' 的插值函數來獲取年份
            reform_time = match_color_to_year(clicked_color, ml_colors, ml_interp)

        print(f"結果: {reform_type}, 年份: {reform_time:.2f}")

# 鼠標事件處理函數 (ROI 選擇階段)
# 此函數只負責記錄點擊點和繪製臨時框，狀態轉換由主循環控制
def select_roi_event(event, x, y, flags, param):
    global roi_points, selecting_roi_state, img_raw, img_with_rois

    if event == cv2.EVENT_LBUTTONDOWN:
        roi_points.append((x, y))
        # 狀態轉換邏輯在 main 函數中根據 roi_points 的長度進行

    elif event == cv2.EVENT_MOUSEMOVE:
        # 在選擇第一個 ROI 的第二個點時繪製臨時框 (綠色)
        if selecting_roi_state == 0 and len(roi_points) == 1:
            temp_img = img_raw.copy() # 從原始圖片複製，避免覆蓋永久框
            cv2.rectangle(temp_img, roi_points[0], (x, y), (0, 255, 0), 1) # 綠色臨時框
            cv2.imshow('點擊獲取年份 (請框選色標)', temp_img)
        # 在選擇第二個 ROI 的第二個點時繪製臨時框 (綠色)
        elif selecting_roi_state == 2 and len(roi_points) == 3:
            temp_img = img_with_rois.copy() # 從已繪製第一個 ROI 的圖片複製
            cv2.rectangle(temp_img, roi_points[2], (x, y), (0, 255, 0), 1) # 綠色臨時框
            cv2.imshow('點擊獲取年份 (請框選色標)', temp_img)

# 主函數
def main():
    global img_rgb, random_colors, random_interp, ml_colors, ml_interp, img_raw, img_with_rois, selecting_roi_state, roi_points

    # 圖片路徑
    img_path = 'D:/PyTorch_practice/map/x.png'
    img_raw = cv2.imread(img_path) # 載入圖片 (以 BGR 格式)

    if img_raw is None:
        print(f"錯誤：圖片載入失敗，請檢查路徑: {img_path}")
        return

    img_rgb = cv2.cvtColor(img_raw, cv2.COLOR_BGR2RGB) # 將圖片轉換為 RGB 格式
    img_with_rois = img_raw.copy() # 創建一個副本用於顯示和繪製永久 ROI 框

    cv2.namedWindow('點擊獲取年份 (請框選色標)')
    # 初始階段設定鼠標回調函數為 ROI 選擇模式
    cv2.setMouseCallback('點擊獲取年份 (請框選色標)', select_roi_event)

    print("--- 互動式色標框選 ---")
    print("步驟 1/2: 請框選 '隨機分案' 色標 (左側藍色條)。")
    print("   點擊色標的左上角，然後拖曳鼠標到右下角並釋放。")

    # ROI 選擇循環
    while selecting_roi_state < 4: # 當 selecting_roi_state 達到 4 時表示兩個 ROI 都已選定
        cv2.imshow('點擊獲取年份 (請框選色標)', img_with_rois) # 持續顯示帶有永久 ROI 框的圖片
        key = cv2.waitKey(1) & 0xFF
        if key == ord('q'): # 按 'q' 鍵退出
            cv2.destroyAllWindows()
            return

        # 根據 roi_points 的長度來管理狀態轉換
        if selecting_roi_state == 0 and len(roi_points) == 1: # 隨機色標起點已點擊
            selecting_roi_state = 1 # 進入等待隨機色標終點的狀態
            print("請框選 '隨機分案' 色標的終點 (右下角)。")
        elif selecting_roi_state == 1 and len(roi_points) == 2: # 隨機色標終點已點擊
            # 繪製 '隨機分案' 色標的永久矩形框 (藍色)
            cv2.rectangle(img_with_rois, roi_points[0], roi_points[1], (255, 0, 0), 2)
            cv2.imshow('點擊獲取年份 (請框選色標)', img_with_rois) # 更新顯示
            selecting_roi_state = 2 # 進入準備選擇 '機器學習' 色標起點的狀態
            print("\n步驟 2/2: 請框選 '機器學習' 色標 (右側紅色條)。")
            print("   點擊色標的左上角，然後拖曳鼠標到右下角並釋放。")
        elif selecting_roi_state == 2 and len(roi_points) == 3: # 機器學習色標起點已點擊
            selecting_roi_state = 3 # 進入等待機器學習色標終點的狀態
            print("請框選 '機器學習' 色標的終點 (右下角)。")
        elif selecting_roi_state == 3 and len(roi_points) == 4: # 機器學習色標終點已點擊
            # 繪製 '機器學習' 色標的永久矩形框 (紅色)
            cv2.rectangle(img_with_rois, roi_points[2], roi_points[3], (0, 0, 255), 2)
            cv2.imshow('點擊獲取年份 (請框選色標)', img_with_rois) # 更新顯示
            selecting_roi_state = 4 # 兩個 ROI 都已選定，退出循環

    # 色標選擇完成後，提取座標並建立顏色軸
    # 確保座標是正確的 (x_start, y_start, x_end, y_end) 格式，並且 start <= end
    random_roi_coords = (min(roi_points[0][0], roi_points[1][0]), min(roi_points[0][1], roi_points[1][1]),
                         max(roi_points[0][0], roi_points[1][0]), max(roi_points[0][1], roi_points[1][1]))
    ml_roi_coords = (min(roi_points[2][0], roi_points[3][0]), min(roi_points[2][1], roi_points[3][1]),
                     max(roi_points[2][0], roi_points[3][0]), max(roi_points[2][1], roi_points[3][1]))

    # 從原始 RGB 圖片中提取 ROI 圖片數據
    random_roi = img_rgb[random_roi_coords[1]:random_roi_coords[3], random_roi_coords[0]:random_roi_coords[2]]
    ml_roi = img_rgb[ml_roi_coords[1]:ml_roi_coords[3], ml_roi_coords[0]:ml_roi_coords[2]]

    # 建立兩個色標的顏色軸和插值函數
    random_colors, random_interp = build_color_axis(random_roi, debug_name="隨機分案色標")
    ml_colors, ml_interp = build_color_axis(ml_roi, debug_name="機器學習色標")

    # 轉換到年份識別階段
    cv2.setMouseCallback('點擊獲取年份 (請框選色標)', click_event) # 將鼠標回調函數改為年份識別模式
    cv2.setWindowTitle('點擊獲取年份 (請框選色標)', '點擊獲取年份') # 更新視窗標題
    print("\n色標框選完成。現在請點擊地圖上的省份以獲取年份。按 'q' 鍵退出。")

    # 年份識別循環
    while True:
        cv2.imshow('點擊獲取年份', img_with_rois) # 繼續顯示帶有永久 ROI 框的圖片
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    cv2.destroyAllWindows()

if __name__ == '__main__':
    main()
```

## 代码异质性

Stata 关于 DID 的平行趋势稳健性检验方法。

来源：计量经济学圈公众号。[一张图里画出5种异质性稳健DID的平行趋势与动态效应的完整code和示例](https://mp.weixin.qq.com/s/QHU8abvuigOy1LqRYzFNdg)

直接复制的话，排版不行；并且有些命令在 stata18 中更新，个人修改了一点细节。

![如图,绘图风格使用的schemepack包的Rainbow风格（个人最爱的风格）](/img/pythonGIS.zh-cn-20250524103449818.webp)

关于 did 异质性的理论讨论，推荐：

{{< bilibili BV1vH4y1B7kk>}}


代码如下

```stata
*ssc install drdid , replace
*ssc install schemepack, replace  
*ssc  install did_imputation  , replace
*ssc  install did_multiplegt  , replace
*ssc  install eventstudyinteract  , replace
*ssc  install csdid  , replace
* 生成模拟数据，创建一个包含300个单位、15个周期的完整面板数据
clear all
timer clear
set seed 10
global T = 15  // 全局变量T，表示观测周期数
global I = 300  // 全局变量I，表示单位数

set obs `=$I*$T'  // 设置观测总数为单位数乘以周期数
gen i = int((_n-1)/$T )+1  // 生成单位ID
gen t = mod((_n-1),$T )+1  // 生成日历周期
tsset i t  // 设置面板数据的时间序列格式

* 随机生成治疗滚动年份，在Ei=10到16之间均匀分布（注意：t>=16的周期无用，因为所有单位在此之前都已接受治疗）
gen Ei = ceil(runiform()*7)+$T -6 if t==1  // 生成单位首次接受治疗的年份
bys i (t): replace Ei = Ei[1]  // 将首次治疗年份扩展到每个单位的所有周期
gen K = t-Ei  // 生成相对时间，即自治疗以来的周期数（若从未治疗则可能缺失）
gen D = K>=0 & Ei!=.  // 生成治疗指示变量，1表示已接受治疗

* 生成具有平行趋势和异质性治疗效应的结果变量
gen tau = cond(D==1, (t-12.5), 0)  // 异质性治疗效应（随日历周期变化）
gen eps = rnormal()  // 生成随机误差项
gen Y = i + 3*t + tau*D + eps  // 生成结果变量（固定效应不影响结果，因为所有方法都控制了固定效应）

* 使用 Borusyak et al. (2021) 的 did_imputation 方法进行估计
did_imputation Y i t Ei, allhorizons pretrend(5)  // 估计所有时间范围的事前趋势（5期）
event_plot, default_look graph_opt(xtitle("Periods since the event") ytitle("Average causal effect") ///
    title("Borusyak et al. (2021) imputation estimator") xlabel(-5(1)5))  // 绘制事件图

estimates store bjs  // 存储估计结果以供后续使用

* 使用 de Chaisemartin and D'Haultfoeuille (2020) 的 did_multiplegt 方法进行估计

did_multiplegt_old Y i t D, dynamic(5) placebo(5) breps(100) cluster(i) robust_dynamic  // 动态效应估计，含5期事后和5期安慰剂检验
* did_multiplegt dyn Y i t D, dynamic(5) placebo(5) breps(100) cluster(i) robust_dynamic
event_plot e(estimates)#e(variances), default_look graph_opt(xtitle("Periods since the event") ytitle("Average causal effect") ///
    title("de Chaisemartin and D'Haultfoeuille (2020)") xlabel(-5(1)5)) stub_lag(Effect_#) stub_lead(Placebo_#) together  // 绘制事件图

matrix dcdh_b = e(estimates)  // 存储估计结果
matrix dcdh_v = e(variances)  // 存储方差结果

* 使用 Callaway and Sant'Anna (2020) 的 csdid 方法进行估计
gen gvar = cond(Ei==., 0, Ei)  // 为csdid命令生成组变量（未治疗的单位设为0）
csdid Y, ivar(i) time(t) gvar(gvar) notyet  // 估计因果效应
estat event, estore(cs)  // 生成并存储事件估计结果
event_plot cs, default_look graph_opt(xtitle("Periods since the event") ytitle("Average causal effect") xlabel(-14(1)5) ///
    title("Callaway and Sant'Anna (2020)")) stub_lag(Tp#) stub_lead(Tm#) together  // 绘制事件图

* 使用 Sun and Abraham (2020) 的 eventstudyinteract 方法进行估计
sum Ei
gen lastcohort = Ei==r(max)  // 生成最新或从未治疗的队列的虚拟变量
forvalues l = 0/5 {
    gen L`l'event = K==`l'  // 生成滞后事件虚拟变量
}
forvalues l = 1/14 {
    gen F`l'event = K==-`l'  // 生成提前事件虚拟变量
}
drop F1event  // 归一化K=-1（以及K=-15）为零
eventstudyinteract Y L*event F*event, vce(cluster i) absorb(i t) cohort(Ei) control_cohort(lastcohort)  // 交互估计
event_plot e(b_iw)#e(V_iw), default_look graph_opt(xtitle("Periods since the event") ytitle("Average causal effect") xlabel(-14(1)5) ///
    title("Sun and Abraham (2020)")) stub_lag(L#event) stub_lead(F#event) together  // 绘制事件图

matrix sa_b = e(b_iw)  // 存储估计结果
matrix sa_v = e(V_iw)  // 存储方差结果

* 使用 TWFE OLS 方法进行估计（由于治疗效应同质性，此处结果正确）
reghdfe Y F*event L*event, a(i t) cluster(i)  // 双固定效应回归
event_plot, default_look stub_lag(L#event) stub_lead(F#event) together graph_opt(xtitle("Days since the event") ytitle("OLS coefficients") xlabel(-14(1)5) ///
    title("OLS"))  // 绘制事件图

estimates store ols  // 保存估计结果

* 构建真实平均治疗效应的向量，按自治疗以来的周期数计算
matrix btrue = J(1,6,.)  // 创建一个1x6的空矩阵
matrix colnames btrue = tau0 tau1 tau2 tau3 tau4 tau5  // 设置列名
qui forvalues h = 0/5 {
    sum tau if K==`h'  // 计算每个相对时间点的平均治疗效应
    matrix btrue[1,`h'+1]=r(mean)  // 填充矩阵
}
set scheme Rainbow    
* 在一张图中展示所有估计值的事前趋势与事后动态效应
event_plot btrue# bjs dcdh_b#dcdh_v cs sa_b#sa_v ols, ///
    stub_lag(tau# tau# Effect_# Tp# L#event L#event) stub_lead(pre# pre# Placebo_# Tm# F#event F#event) plottype(scatter) ciplottype(rcap) ///
    together perturb(-0.325(0.13)0.325) trimlead(5) noautolegend ///  // 设置绘图参数
    graph_opt(title("Event study estimators in a simulated panel (300 units, 15 periods)", size(medlarge)) ///
        xtitle("Periods since the event") ytitle("Average causal effect") xlabel(-5(1)5) ylabel(0(1)3) ///
        legend(order(1 "True value" 2 "Borusyak et al." 4 "de Chaisemartin-D'Haultfoeuille" ///
            6 "Callaway-Sant'Anna" 8 "Sun-Abraham" 10 "OLS") rows(3) region(style(none))) ///
        xline(-0.5, lcolor(gs8) lpattern(dash)) yline(0, lcolor(gs8)) graphregion(color(white)) bgcolor(white) ylabel(, angle(horizontal)) ///
    ) ///
    lag_opt1(msymbol(+) color(cranberry)) lag_ci_opt1(color(cranberry)) ///  // 自定义绘图样式
    lag_opt2(msymbol(O) color(cranberry)) lag_ci_opt2(color(cranberry)) ///
    lag_opt3(msymbol(Dh) color(navy)) lag_ci_opt3(color(navy)) ///
    lag_opt4(msymbol(Th) color(forest_green)) lag_ci_opt4(color(forest_green)) ///
    lag_opt5(msymbol(Sh) color(dkorange)) lag_ci_opt5(color(dkorange)) ///
    lag_opt6(msymbol(Oh) color(purple)) lag_ci_opt6(color(purple))

graph export "five_estimators_example.png", replace  // 导出图形
```

## 分享两个有趣的 stata 命令

### Manyiv

Stata 命令下载：

```
net install manyiv, from("https://raw.githubusercontent.com/gphk-metrics/stata-manyiv/main/")
```

使用例子如下：

```
clear
sysuse auto
manyiv price ( trunk = weight ), absorb( gear_ratio ) absorbiv( foreign ) forcejive
```

然后你就会得到各种改进版的 iv 估计结果（适合凑工作量）[^2]：

```
           Coef.      Hetero
           -----      ------
   OLS  152.3933  (101.9636)
  TSLS  560.1103  (370.5976)
  LIML  600.0703  (383.4885)
MBTSLS  635.8036  (395.9637)
  JIVE  946.7464  (841.9874)
 UJIVE  648.4012  (405.8049)
 RTSLS  645.6237         (.)

```


| 方法                      | 对工具变量强度的敏感性               | 样本量要求                     | 典型使用场景                |
| ----------------------- | ------------------------- | ------------------------- | --------------------- |
| **OLS** (普通最小二乘)        | 不使用工具变量                   | 无特殊要求                     | 对照基准                  |
| **TSLS** (两阶段最小二乘)      | 对弱工具高度敏感；弱时估计显著偏向OLS      | 需要中大型样本以获得较好性质            | 标准 IV 分析              |
| **LIML** (有限信息极大似然)     | 相对不敏感于弱工具；可设计权重近似消除2SLS偏差 | 适用于大型样本和多工具情形             | 多个（且可信）工具变量时，对抗弱工具偏差  |
| **MBTSLS** (改进偏差TSLS)   | 适用于多工具场景；修正弱工具偏差          | 需要较大样本来估计偏差修正项            | 存在众多工具或潜在仪器失效时        |
| **JIVE** (Jackknife IV) | 减少弱工具偏差，可在多工具下保持一致        | 中大型样本（因 leave-one-out 特性） | 许多工具、异方差存在或需消除2SLS偏差  |
| **UJIVE** (无偏 JIVE)     | 类似 JIVE，尤其针对处理效应异质情形      | 中大型样本                     | 关注局部平均处理效应、多工具与异质效应场景 |
| **RTSLS** (逆向 TSLS)     | 敏感度同 TSLS；效应异质时估计不稳定      | 无特殊要求，但结果常不可靠             | 一般不常用，仅适用于特殊对称模型假设    |

上面这个表格主要是顺便测试下对比下 GPT 和 grok3 的搜集能力，GPT 的更好所以放上来了。

重点说明下 `JIVE(Jackknife IV)`，其实就是每个样本省略当前行。例如对于第 n 行，使用 n-1 个样本进行工具变量分析。同理，每个观测点都删去自己一行进行观察。这个方法是诺奖得主 [J. D. Angrist ](https://www.jstor.org/stable/223249?seq=1) 提出的。在法律经济学相关研究中，这个工具变量用的比较多，考虑每个法官具有异质性需要控制个体效应，此时比较适合用这种方法。

### chgdiv6命令：在Stata中算铜钱卦


![如图](/img/pythonGIS.zh-cn-20250524111744270.webp)

回归前来点玄学，详细参见

{{< bilibili BV1bGQtYFEte>}}

```
【常规版】适合自己能解卦的

  net install chgdiv6, from(https://gitee.com/chenshaoxuemei/chgdiv6/raw/master) replace 

【chat版】适合不会解卦的

  net install chgdiv6_chat, from(https://gitee.com/chenshaoxuemei/chgdiv6_chat/raw/master) replace 
  
  【备份版】一键下载两个命令（更加隐蔽）

net install chgdiv6_bkp, from(https://gitee.com/chenshaoxuemei/chgdiv6_bkp/raw/master) replace
```

命令例子

```
chgdiv6
\\当前时间起卦
chgdiv6 114514
\\数字起卦
chgdiv6 我买彩票能中一百万吗？
\\问题起卦
```


[^1]: 独作处理政府采购数据和裁判文书数据，感觉作者也太能肝了。
[^2]: 遗憾的是这个命令似乎没有很多的适配输出文档的架构
