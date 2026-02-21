# After the Split of Sichuan Province: Political Planning and Economic Growth

## The Question of Institutions vs. Geography

In the long course of economic development, the nation-state appears to be an inevitable formation, but why must it be a nation? Why are there such vast disparities between nations? This is a critical question. Fascinating elements abound in national development—such as the Mafia[^3][^2][^4], natural resource endowments, foreign trade, natural disasters[^5], and power rivalries[^1]... Yet for the most part these can be distilled into **innate geographical endowments** and acquired **cultural-institutional evolution**.

Much like how we no longer debate whether liberalism or Keynesianism is superior, but instead clarify their respective policy boundaries. Resource endowments and cultural-institutional factors invariably influence each other; the critical question lies in which factor influenced the other first. For instance, the seminal paper on rice in the south and wheat in the north[^6]:

> Rice cultivation requires collective collaboration; wheat farming favors individual labor. The difference in planting structures created cultural divides between north and south.

Geographic discontinuities, to some extent, can mitigate the endogeneity of the mutual influence between geography, culture, and institutions—just as Daron illustrated in "Why Nations Fail" through examples of the United States and Mexico[^7]; South Korea and North Korea; and East and West Germany.

Now the crucial question is: **Through what characteristics do cultural institutions bring about such tremendous disparities in development?**

"[Political hierarchy and regional economic development: Evidence from a spatial discontinuity in China](https://www.sciencedirect.com/science/article/pii/S0047272720302164)" utilizes the geographic discontinuity created when Chongqing was elevated from a prefecture-level city in Sichuan Province to a municipality directly under the central government in 1997 to investigate the phenomenon that **empowering local governments through increased political hierarchy can promote regional development**.

## Political Structure and Economic Growth

In the introduction of the paper, the research question is introduced from the perspective of informational advantages in governance:

In terms of **economic phenomena**, national political governance is invariably hierarchical[^8], with different levels wielding different decision-making powers. In 1997, Chongqing was elevated from a prefecture-level city in Sichuan Province to a municipality directly under the central government.

The expansion of decision-making power brought by this change manifests as:

Increased administrative, personnel, and fiscal decision-making powers. More surplus in fiscal allocation.

{{< admonition type=question  title="Can promoting administrative rank drive development?" open=false >}}

The core mechanism by which administrative power stimulates economic growth is `informational advantage + power coordination`. However, there is a contradiction between decentralization and local fragmentation. The problem with decentralizing to all cities is local fragmentation and the consequences of corruption, so the dilemma of overall governance is always how to balance decentralization to allow localities to fully leverage informational advantages with centralization to weaken local protectionism, rent-seeking, and corruption—government power structure and economic growth.



![Diagram](/img/行政规划与经济发展.zh-cn-1761472496361.webp)


{{< /admonition >}}

In terms of power allocation, the paper's theory and the points to explore can be divided into the following parts:

- **Core Question**: Does the allocation of power structure affect economic growth?
	- For example, converting counties to districts
	- When local government in South Africa is very decentralized, existing studies show weak effects[^9].
- **The Tradeoff Dilemma**: The decentralization and diffusion of political power bring benefits of flexible decision-making, but also bring local protectionism, corruption, and rent-seeking.
- **Impact**: Do these behaviors represent spontaneous order? Public choice theory reveals that politicians are motivated by the desire to expand their power networks rather than maximizing social welfare.
- **Marginal Contribution**:
	- Methodologically using geographic discontinuities to discuss government power diffusion and decentralization. Sichuan and Chongqing share very similar geographic, cultural environments, and ethnic composition.
	- Compared to South Africa, China's power decentralization involves substantive enhancement; the appointment system from higher levels can better prevent corruption.

## Background

Let's learn how comparative expressions are framed (adapt for foreign editors + strengthen the central theme, the particularity of decentralization under political systems):

> **Political systems differ from federalism**: Lower-level governments are completely subordinate to higher-level governments... unitary states rather than federal states... higher-level governments can easily intervene in the policy decisions of lower-level governments because the former determines the latter's career prospects...
>
> **Power of municipalities directly under the central government**: Municipalities directly under the central government possess powers comparable to provinces in administrative, personnel, and fiscal affairs, while prefecture-level cities must comply with provincial government policies.
>
> **Comparability**: Chongqing was once part of Sichuan Province. Since the Yuan Dynasty...
>
> **Event Background**: According to official Chinese propaganda, the central government decided to elevate Chongqing for two reasons: to become an engine for western development and because the Sichuan provincial government was unable to provide excessive public goods.


## Theoretical Analysis

**Different decentralization environments yield different results; it could be political patronage or political efficiency.**

Cost-Benefit Analysis

- Hierarchical management and power diffusion confer **informational advantages** in governance, while uniform laws and regulations can reduce **governance costs**;
- The proliferation of peer institutions (which also entails a decline in **economies of scale**) simultaneously incurs **administrative costs** and central **coordination costs**.

Political Agency Problems

- Local voters likewise possess informational advantages and can monitor localities more effectively;
- Promotes mutual competition among localities;
- In regions receiving less oversight, local elites may more easily collude to foster corruption.

Countermeasures: Sufficient electoral competition, transparency of budgetary procedures, voter awareness, media supervision, and reward-punishment mechanisms.

Following status elevation, Chongqing gained: expanded personnel, fiscal decision-making, and construction planning powers better tailored to local conditions; greater fiscal resources (**rendering investment more attractive**). However, this came with increased coordination, administrative, and public service costs.

## Data Sources


| Database      | Measured Variable  | Content Used                                         | Time        |
| -------- | :---: | -------------------------------------------- | --------- |
| Satellite nighttime lighting   | Economic growth  | Light intensity                                           | 1992-2013 |
| GIS topography    | Slope, area | Topography                                           |           |
| Statistical yearbooks     | Economic data  | County-township level per capita industrial output, urbanization rate, and non-agricultural employment rate              |           |
| Google Maps     | Public goods  | Distribution of roads, schools, and hospitals at town level                              |           |
| Enterprise census     |       | Includes enterprise-level basic financial statements, identifying enterprise towns through address                       | 2008      |
| World Bank Enterprise Survey | Business environment  | Number of licenses and registrations                                     | 2005      |
| Population census     |  Population   | Ethnic composition, population migration                                    | 2000、2005 |
| Ministry of Finance of China    |  Finance   | County-level socioeconomic variables, including population, urbanization rate, industrial output, county-level GDP |           |
| Audit yearbook     |  Corruption   | Counties with misuse of public funds                                     | 2003-2009 |

## Estimation Strategy

$$Y_i=\beta_0+\beta_1Chongqing_i+f(geographiclocation_i)+\epsilon_i$$
$$Y_{i}\equiv ln(0.01+LightIntensity_{i,2013})-ln(0.01+LightIntensity_{i,1996})$$
- $Y_i$: Economic growth rate estimated from nighttime light data.
- $i$: Township.
- $Chongqing$: Located in Chongqing is 1, located in Sichuan is 0.

### Parallel Trends

![Diagram, showing no statistically significant differences in terrain elevation, ethnic composition, GDP, industrial output, tax revenue, and urbanization rates between the two regions](/img/行政规划与经济发展.zh-cn-1761488424185.webp)

![Light data on both sides of the boundary](/img/行政规划与经济发展.zh-cn-1761488841977.webp)

## Empirical Results

### Basic Regression

![Experimental and control groups first restricted to within 30km of the boundary](/img/行政规划与经济发展.zh-cn-1761487797701.webp)

![Diagram](/img/行政规划与经济发展.zh-cn-1761489007234.webp)


![Diagram](/img/行政规划与经济发展.zh-cn-1761489056820.webp)


### Placebo Tests

Method 1: Shift the boundary 30km west and east respectively.

![Diagram](/img/行政规划与经济发展.zh-cn-1761489231984.webp)
Method 2: Create random boundaries.

### Excluding Spillover Effects

#### Chongqing Effect

If boundary points in Sichuan are subject to spillover effects from the Chongqing region, then the validity of the test would be compromised.

![Exclude boundary points](/img/行政规划与经济发展.zh-cn-1761489493160.webp)

Further exclude towns within 10km of the boundary line (considering transportation costs).

At the same time, compare population mobility rates between the two regions using census data (0.27% vs. 0.13%).

![Exclude boundary points](/img/行政规划与经济发展.zh-cn-1761489908299.webp)


#### Excluding Sichuan Effect

Sichuan's reduced size might also improve the efficiency of public goods provision by the Sichuan provincial government. Therefore, use boundary region data from other provinces adjacent to Sichuan (**Gansu, Guizhou, Qinghai, Shaanxi, and Yunnan**) for testing.

![Diagram](/img/行政规划与经济发展.zh-cn-1761490252878.webp)

#### Excluding Political Spillover Effects

There are three sections in the Sichuan-Chongqing border area, where the northern and southern parts may differ in political influence. The closer to the north, the more significant the political influence may be.

![Adjacent areas](/img/行政规划与经济发展.zh-cn-1761490405984.webp)
![Diagram](/img/行政规划与经济发展.zh-cn-1761490530613.webp)

### Alternative Economic Dependent Variables

Use yearbook data to replace lighting data.

Per capita industrial output, urbanization rate, and non-agricultural employment show similar effects.

![Diagram](/img/行政规划与经济发展.zh-cn-1761490628730.webp)

## Mechanism Tests

### Official Accountability

Elevation of administrative rank may have improved officials' sense of accountability.

- **Corrupt local officials** tend to extract revenue by increasing administrative expenditures to expand the government workforce and augment bureaucratic consumption.
- **Motivated officials** will invest more in construction and infrastructure investment.

The paper employs county-level fiscal expenditure panel data for analysis.

![Left: administrative expenditure; right: infrastructure investment](/img/行政规划与经济发展.zh-cn-1761491091834.webp)
Results indicate that following the elevation of administrative rank, the Chongqing region reduced the proportion of administrative expenditures while expanding the proportion of infrastructure investment. This outcome may be attributable to more robust **accountability mechanisms**.

The audit yearbook indicates that counties audited and held accountable in the Chongqing region were significantly fewer than in the Sichuan region.

![Counties held accountable in audit yearbook as y](/img/行政规划与经济发展.zh-cn-1761491221901.webp)

### Provision of Public Goods

Road, school, and hospital construction investments.

![Statistics using Google Maps](/img/行政规划与经济发展.zh-cn-1761491862787.webp)

### Business Environment

Use enterprise registration and licensing data for analysis.

Chongqing has more enterprise entries, and the growth rate of private enterprises is higher than that of state-owned enterprises.

![Diagram](/img/行政规划与经济发展.zh-cn-1761491991726.webp)

## Exploring Other Possibilities

Might the boundary disparities between Chongqing and Sichuan be attributable to other factors?

### Three Gorges Project

- Eliminate 9 town areas within the 30km range that were later submerged by the Three Gorges Project.
- Compare Yichang City in Hubei Province with surrounding cities, results are not significant.

![Comparison with Yichang City, Hubei Province](/img/行政规划与经济发展.zh-cn-1761492334924.webp)

### Center-Periphery Theory

Urban boundaries are affected by the development of urban centers. Although both are boundary regions, the Chongqing boundary is closer to the center.

Adding distance from Chongqing center as a control variable, results are not significant.

At the same time, further compared Yichang and Chengdu (separated by rivers), differences are not significant.

![Diagram](/img/行政规划与经济发展.zh-cn-1761492614204.webp)

### Transfer Payments

![Diagram](/img/行政规划与经济发展.zh-cn-1761492851101.webp)

Transfer payment data indicates that the gap in transfer payments began to widen in 2008; consequently, it cannot explain growth differences predating 2008.

## Conclusion

- Empowering local government officials fostered regional development.
- For centralized countries, well-functioning local reward-punishment systems may mitigate the adverse effects of local decentralization in fostering local corruption and regulatory capture.
- Outlook: The paper provides only a single case study; the administrative costs and coordination costs attendant upon widespread elevation remain unknown. Furthermore, local officials would experience a loss of power and would thus oppose large-scale elevation of administrative rank.



[^1]: Allen R C, Bertazzini M C, Heldring L. The economic origins of government[J]. American Economic Review, 2023, 113(10): 2507-2545.

[^2]: Acemoglu D, De Feo G, De Luca G D. Weak states: Causes and consequences of the Sicilian Mafia[J]. The Review of Economic Studies, 2020, 87(2): 537-581.

[^3]: Dipoppa, G. (2025). How criminal organizations expand to strong states: local agreements and migrant exploitation in Northern Italy. The Journal of Politics, 87(2), 000-000.

[^4]: Sánchez De La Sierra R. On the origins of the state: Stationary bandits and taxation in eastern congo[J]. Journal of Political Economy, 2020, 128(1): 000-000.

[^5]: Gallagher, J. (2014). Learning about an Infrequent Event: Evidence from Flood Insurance Take-Up in the United States. American Economic Journal: Applied Economics, 6(3), 206–233.

[^6]: Talhelm T, Zhang X, Oishi S, et al. Large-scale psychological differences within China explained by rice versus wheat agriculture[J]. Science, 2014, 344(6184): 603-608.

[^7]: Of course, personally I think one endogeneity of geographic discontinuity lies in the center-periphery city theory, where boundary development is strongly correlated with center development.

[^8]: Why must governance be hierarchical? Seemingly obvious realities are often not easy to give obvious answers to. For example, continuing to ask deeper: What kind of political hierarchy is reasonable? This is a very complex question.

[^9]: Gottlieb, J., Grossman, G., Larreguy, H., Marx, B., 2019. A signaling theory of distributive policy choice: evidence from Senegal. J. Polit. 81 (2), 631–647

