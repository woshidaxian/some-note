# Vue CLI安装
```bash
npm install -g @vue/cli
```
# 创建vue项目----UI界面/命令行
ui界面
npm ui -> 
命令行
vue create XXX
# CLI服务
```bash
vue-cli-service serve [options] [entry]
``` 
  --open    在服务器启动时打开浏览器
  --copy    在服务器启动时将 URL 复制到剪切版
  --mode    指定环境模式 (默认值：development)
  --host    指定 host (默认值：0.0.0.0)
  --port    指定 port (默认值：8080)
  --https   使用 https (默认值：false)

```bash
vue-cli-service build [options] [entry|pattern]
```
  --mode        指定环境模式 (默认值：production)
  --dest        指定输出目录 (默认值：dist)
  --modern      面向现代浏览器带自动回退地构建应用
  --target      app | lib | wc | wc-async (默认值：app)
  --name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
  --no-clean    在构建项目之前不清除目标目录
  --report      生成 report.html 以帮助分析包内容
  --report-json 生成 report.json 以帮助分析包内容
  --watch       监听文件变化

# 如何区分环境 ？？？ -development/-production
.env.production
VUE_APP_BASE_API=服务器地址
.env.development
VUE_APP_BASE_API=本地地址
须以VUE_APP、BASE_URL、NODE_ENV开头的变量才能通过 webpack.DefinePlugin 静态地嵌入到客户端侧的代码中。这是为了避免意外公开机器上可能具有相同名称的私钥

# vue.config.js配置
publicPath: 默认为'/'，即部署项目包默认放在域名的根路径上，也可为空''或'./'，所有资源链接为相对路径，项目文件可放置在任意路径下  
outputDir: 默认为'dist'，构建生产环境项目文件时的目录，npm run build / vue-cli-service build
assetsDir: 默认''，放置生成的静态资源的目录（js、css、img、fonts）,该目录相对于outputDir
indexPath: 默认'index.html'，指定生成的'index.html'的路径，相对于outputDir  
productionSourceMap: 默认true，生产环境下是否需要source map，不需要可加快构建速度