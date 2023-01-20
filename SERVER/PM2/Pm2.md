# 常用命令
```js
// 启动项目并自定义项目名称
pm2 start [file] [--name] <app-name>

// 监听文件发生改变 --watch
pm2 start app.js [--watch]

// 带最大启动内存，超过重启项目
pm2 start app.js [--max-memory-restart] <200MB>

// 指定log文件Path
pm2 start app.js [--log] <log_path>

// 启动文件带参数
pm2 start app.js [-- arg1 arg2 [...]]

// 设置自动重启间隔时间
pm2 start app.js [--restart-delay] <delay in ms>

// 设置日志前缀带时间
pm2 start app.js [--time]

// 禁止重新启动项目
pm2 start app.js [--no-autorestart]
```