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
```javascript
module.exports = {
  // 配置
}

// 以下方法可以获得更好的提示，vue3
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  // 选项
})
```
publicPath: 默认为'/'，即部署项目包默认放在域名的根路径上，也可为空''或'./'，所有资源链接为相对路径，项目文件可放置在任意路径下  
outputDir: 默认为'dist'，构建生产环境项目文件时的目录，npm run build / vue-cli-service build
assetsDir: 默认''，放置生成的静态资源的目录（js、css、img、fonts）,该目录相对于outputDir
indexPath: 默认'index.html'，指定生成的'index.html'的路径，相对于outputDir  
filenameHashing: true,  生成的静态资源的文件名中是否包含了 hash  
pages: {}, 在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。
lintOnSave: boolean | 'warning' | 'default' | 'error'。设置为 true 或 'warning' 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败；lintOnSave: 'default'。这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败；设置为 error 将会使得 eslint-loader 把 lint 警告也输出为编译错误，这意味着 lint 警告将会导致编译失败。  
runtimeCompiler： false; 是否使用包含运行时编译器的 Vue 构建版本。会让你的应用额外增加 10kb 左右  
transpileDependencies: false； 启用本选项，以避免构建后的代码中出现未转译的第三方依赖；boolean | Array<string | RegExp> 不过，对所有的依赖都进行转译可能会降低构建速度。如果对构建性能有所顾虑，你可以只转译部分特定的依赖：给本选项传一个数组，列出需要转译的第三方包包名或正则表达式即可。
productionSourceMap: 默认true，生产环境下是否需要source map，不需要可加快构建速度  
crossorigin: 设置生成的HTML中link、script标签的crossorigin属性，直接在index.html中引入的除外  
integrity：忽略，不常用  
configureWebpack：额外的webpack配置  
chainWebpack：允许对内部的 webpack 配置进行更细粒度的修改  
devServer: {
  proxy: {

  } | 'http://'
} 配置代理