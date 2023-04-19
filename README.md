# 这大概是一个 README 吧


使用前先将 vmanage.sql 导入数据库。  
数据库连接配置可在 settings.py 中修改。
在/Web/Web目录下创建private/private.py，把自己的数据库信息填进去。
### 运行django
```
cd web
python manage.py runserver
```

### 运行门户页面
第一次运行先cd到vueDataV-master，然后运行：
```
npm install
```
运行vue项目：
```
cd vueDataV-master
npm run serve
```
#### 注意
在windows系统下运行vue项目需要将 vueDataV-master/package.json里的
```
"scripts": {
    "serve": "export NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve", 
    "build": "export NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service build", 
    "lint": "vue-cli-service lint"
  },
```
修改为：
```
"scripts": {
    "serve": "SET NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve", 
    "build": "SEt NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service build", 
    "lint": "vue-cli-service lint"
  },
```