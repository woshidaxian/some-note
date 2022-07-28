## Crypto - Certificate类
ByeBye

## Crypto - Cipher类


# OS

1. os.arch()
```
const os = require('os')

// CPU架构
console.log(os.arch())
// 'arm'、'arm64'、'ia32'、'mips'、'mipsel'、'ppc'、'ppc64'、's390'、's390x'、'x32' 和 'x64'
```

2. os.constants
```
// 包含错误码、进程信号等常用操作系统特定常量
console.log(os.constants)
// [Object]
```

3. os.cpus()
```
// 获取CPU每个核的信息
console.log(os.cpus())
// [{model: 'CPU名', speed: 'CPU频率', times: {}}, ...]
```

4. os.freemen()
```
// 获取空闲的内存量(字节)
// 1 GB = 1024 MB = 1024*1024 KB = 1024*1024*1024 B(字节)
console.log(os.freemem())
// xxxxxxxxxxx
```