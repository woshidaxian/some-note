New major version of npm available! 6.14.4 → 7.7.5       │
   │   Changelog: https://github.com/npm/cli/releases/tag/v7.7.5   │
   │               Run npm install -g npm to update!  

# 一些可能用到的解构赋值
## 默认值
```
let [ flag = true ] = [false]
// false

let [ flag = true ] = []
// true
```

#  对字符串的一些好方法
## 字符串的遍历
```
for(let code of 'abc'){
  out(code)
}
// a
// b
// c
```
## at()  OR  charAt() 获取定位位置的字符
```
let a = 'abc'.at(0)
// a
```




# js一些方便的方法
## new Set()方便去重
```
let a = new Set(['a', 'a', 'b', 'c'])
a.forEach(item => {
  outSuccess(item)
})
// a b c
out([...a])
// [ 'a', 'b', 'c' ]
```
## join(a) 将字符串以a相连 拼接
```
let a = new Set(['a', 'a', 'b', 'c'])
out([...a].join('-'))
// a-b-c
```
