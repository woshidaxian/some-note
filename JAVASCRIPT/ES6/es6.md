New major version of npm available! 6.14.4 → 7.7.5       │
   │   Changelog: https://github.com/npm/cli/releases/tag/v7.7.5   │
   │               Run npm install -g npm to update!  
# let 和 const
let声明的变量同var一样，但let有严谨作用阈
var声明在用到之前正常输出，不论作用阈；var声明在用到之后为undefined
let声明的变量只能在本作用阈内使用，且必须声明在前，否则就是报语法错误
当声明在前，作用阈却不在X is not undefined
当声明在后，Cannot access 'b' before initialization
在块内用到let和const，只要使用在前，即使全局申明在前，一律报错，暂时性死区
const必须在声明的时候也赋值，不可后赋值，因为const声明的变量不允许被改变
const声明简单类型变量（变量指向的内存即为实际值）值不能改动，但声明复合类型数据（主要是数组和对象，变量指向的内存地址存储的是指向实际数据的指针，const只能保证这个指针不被修改，但所指向的数据结构就不能控制了）可以添加属性或修改值，但不能修改指向新对象
如果要将对象冻结，可使用Object.freeze()
var和function声明的全局变量属于顶层对象，let、const、class声明的全局变量从ES6开始不属于顶层对象（浏览器下为window，Node下为global）
# 解构赋值
## 数组的结构赋值
嵌套合理，等号两端模式匹配
```js
let [a1,a2,a3] = [1,2,3]
a1 // 1
a2 // 2
a3 // 3

let [a,b,[c,[d]]] = [1,2,[3,[4]]]

let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x = 1] = [undefined];
x // 1
let [x = 1] = [null];
x // null
// ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效
```

## 对象结构赋值
变量必须与属性名相同,不同则会为undefined
对象的解构赋值可以方便的把现有对象的方法，赋值到某个变量
默认值同数组解构
```js
let { bar, foo } = { foo: 'aaa', bar: 'bbb' };

let {cos,sin,log} = Math
// 对于想要改变变量名与属性名不同的
let {foo:f,bar:b} = {foo:'aaa',bar:'bbb'}
// 嵌套解构
let a = {
  b: [1,2,3,4],
  c: {
    d: 1,
    e: [1,2]
  }
}
let {b,c,c:{d,e}} = a
console.log(b,c,d,e)
```

## 字符串的解构赋值
字符串的length属性也可参与解构
```js
let [a,b,c,d,e] = 'hello'
let {length:len} = 'hello'
len // 5
```
## 解构的用途
1.变量交换，无需使用第三者变量
```js
let a = 1;
let b = 2;
[x,y] = [y,x]
```
2.从函数返回多个值
3.函数参数的定义
4.提取 JSON 数据
5.函数参数的默认值
6.遍历 Map 结构
```js
let map = new Map()
map.set('first','hello')
map.set('second','world')
for(let [key,value] of map){
  console.log(key,value)
}
```
7.输入模块的指定方法


#  字符串的扩展
1. 加强对Unicode对支持
采用\uxxxx形式表示一个字符串，限码点在\u0000~\uFFFF之间的字符，超出需要用两个双字节表示
\u{xxxxx}加了{}后可正常显示

2. 字符串的遍历器接口
```js
for(let a of 'hello'){
  console.log(a)
}
```

3. 直接输入 U+2028 和 U+2029
4. JSON.stringify() 的改造
5. 模板字符串

# 字符串新增方法
1. String.fromCodePoint()
用于将Unicode码点返回对应字符串，支持码点大于0xFFFF
String.fromCharCode()不能大于0xFFFF
2. String.raw()
返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串
3. codePointAt()
返回一个字符的码点
4. normalize()
5. 实例方法：includes(), startsWith(), endsWith()
支持第二个参数，表示开始搜索的位置，除了endsWith方法除外，表示前n个字符是否以第一个参数结尾
```js
let a = 'Hello World!'
a.includes('0') // true
a.startsWith('Hello') //true
a.endsWith('!') // true 
```
6. repeat(n)重复n遍
7. padStart()头部补全  padEnd()尾部补全
第一个参数为指定输出字符串长度
第二个参数用来填补空缺，允许长度超出第一个参数，自动截取
8. trimStart()消除头部空格 trimEnd()消除尾部空格 trim()消除全部空格
9. mathchAll()
10. replace()正常只能对字符串中第一次匹配到的进行替换，全部替换需要正则表达式配合，
replaceAll则实现了全部替换
$&：匹配的子字符串。
$` ：匹配结果前面的文本。
$'：匹配结果后面的文本。
$n：匹配成功的第n组内容，n是从1开始的自然数。这个参数生效的前提是，第一个参数必须是正则表达式。
$$：指代美元符号$。

# 正则的扩展
ES5不允许使用第二个参数添加修饰符，ES6改变了这一行为，后者将会覆盖前者

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
