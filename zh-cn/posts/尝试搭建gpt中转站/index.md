# 

第一步，设定一个 liux 环境 


管理员模式打开 cmd，然后输入：

```
wsl --install
```

下载结束后会提示重启

确认是否安装成功：
```
wsl --status
wsl -l -v
```


![[尝试搭建GPT中转站.zh-cn-1782220379408.webp]]

我们只需要支持版本 2 即可，1 不兼容不用管

第二步，下载 Docker Desktop

Docker Desktop [官方下载](https://www.docker.com/products/docker-desktop/)，

![[尝试搭建GPT中转站.zh-cn-1782220522137.webp]]

和一个正常软件一样安装

重启后，打开桌面端的 docker

![[尝试搭建GPT中转站.zh-cn-1782221377923.webp]]


在 D 盘安装 sub 2 api，先创建地址

```
mkdir D:\DockerProjects
cd D:\DockerProjects
```

然后使用 git 进行下载

```
cd D:\DockerProjects
git clone https://github.com/Wei-Shaw/sub2api.git
```


先复制配置文件 


```
cd D:\DockerProjects\sub2api\deploy

copy .env.example .env
copy config.example.yaml config.yaml
```

测试 docker 是否能识别

然后创建 d 盘目录

```
mkdir D:\DockerVolumes
mkdir D:\DockerVolumes\sub2api
mkdir D:\DockerVolumes\sub2api\postgres
mkdir D:\DockerVolumes\sub2api\redis
mkdir D:\DockerVolumes\sub2api\data
```

执行

```
cd D:\DockerProjects\sub2api\deploy
docker compose down -v
```

创建 override 文件：

```
notepad docker-compose.override.yml
```


在弹出的对应文件填写并保存

```
services:
  postgres:
    volumes:
      - D:/DockerVolumes/sub2api/postgres:/var/lib/postgresql/data

  redis:
    volumes:
      - D:/DockerVolumes/sub2api/redis:/data

  sub2api:
    volumes:
      - D:/DockerVolumes/sub2api/data:/app/data
```

保存后执行

```
docker compose config
```

继续启动

```
docker compose up -d
docker compose ps
```

接下来修改密码

执行

```
notepad .env
```

打开后，

检索 `POSTGRES_PASSWORD=change_this_secure_password`

修改后面的 `change_this_secure_password` 为自己想要的密码

检索 `ADMIN_EMAIL`，修改后面的等号后面的内容为自己想要的邮箱账号

检索 `ADMIN_PASSWORD`，修改后面的等号后面的内容为自己想要的密码

检索 `JWT_SECRET`，修改后面的等号后面的内容为自己想要的密码

保存关闭记事本，

运行

```
docker compose down
docker compose up -d
```

检测是否成功启动

```
docker compose ps
```

然后我们就可以在本地打开

```
http://localhost:8080/dashboard
```


