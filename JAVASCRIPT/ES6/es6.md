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
9. matchAll()一次性取出所有匹配。不过，它返回的是一个遍历器
10. replace()正常只能对字符串中第一次匹配到的进行替换，全部替换需要正则表达式配合，
replaceAll则实现了全部替换
$&：匹配的子字符串。
$` ：匹配结果前面的文本。
$'：匹配结果后面的文本。
$n：匹配成功的第n组内容，n是从1开始的自然数。这个参数生效的前提是，第一个参数必须是正则表达式。
$$：指代美元符号$。

# 正则的扩展
ES5不允许使用第二个参数添加修饰符，ES6改变了这一行为，后者将会覆盖前者
新增属性：
RegExp.prototype.unicode   => 是否含有u修饰符
RegExp.prototype.sticky    => 是否函数y修饰符，与g类似，不同的是必须从剩余的第一个位置开始
RegExp.prototype.flags     => 有什么修饰符

具名组匹配：ES2018 引入了具名组匹配（Named Capture Groups），允许为每一个组匹配指定一个名字，既便于阅读代码，又便于引用。  
```js
const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj.groups.year; // "1999"
const month = matchObj.groups.month; // "12"
const day = matchObj.groups.day; // "31"
```

# 数值的扩展
提供二进制和八进制表示法，分别为0b（0B）和0o（0O）
要将0b和0o开头的字符串转换为数值，可用Number方法

新增Number.isFinite()和Number.isNaN()
区别于isFinite()和isNaN(),对于非数值型一律返回False，而后者会先转换为数值型再判断  
parseInt()和parseFloat()移植到了Number对象上，减少全局方法  
Number.isInteger判断是否是整数，当是由于js的整数和浮点数采用的是同样的储存方法，25和25.0会返回true  
精度超出时也会出现判断错误  
Number.EPSILON表示一个极小的常量，实际上是 JavaScript 能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了  
为浮点数计算，设置一个误差范围
ES6 引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限  
Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内  
Math的扩展：
```js
Math.trunc(4.1) // 4  去除一个数的小数部分
Math.sign() // 正数返回+1 ，负数返回-1， 0返回0，-0返回-0，其他值返回NaN
Math.cbrt(8) // 2 求立方根
Math.clz32() //count leading zero bits in 32-bit binary representation of a number计算一个数的 32 位二进制形式的前导 0 的个数  
Math.imul() //方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数
Math.hypot(3,4)  // 5 方法返回所有参数的平方和的平方根
Math.expm1(x) //返回Math.exp(x) - 1 
Math.log1p(x) //方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN
Math.log10(x) //返回以 10 为底的x的对数。如果x小于 0，则返回 NaN 也即Math.log(x) / Math.LN10
Math.log2(x)  // 返回以 2 为底的x的对数。如果x小于 0，则返回 NaN 也即Math.log(x) / Math.LN2
Math.sinh(x) //返回x的双曲正弦（hyperbolic sine）
Math.cosh(x) //返回x的双曲余弦（hyperbolic cosine）
Math.tanh(x) //返回x的双曲正切（hyperbolic tangent）
Math.asinh(x) //返回x的反双曲正弦（inverse hyperbolic sine）
Math.acosh(x) //返回x的反双曲余弦（inverse hyperbolic cosine）
Math.atanh(x) //返回x的反双曲正切（inverse hyperbolic tangent）
```
ES2016 新增了一个指数运算符（**），特点是右结合  => 2 ** 3 ** 4 = 2 ** (3 ** 4)
a **=3 => a*a*a

ES2020 引入了一种新的数据类型 BigInt（大整数），来解决这个问题，这是 ECMAScript 的第八种数据类型。BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示,与普通数值不是一个类型 42n === 42 // false

# 函数的扩展
## 参数默认值
可利用默认值在调用函数时未重申参数值，触发报错提醒
把默认值申明未undefined，表明该参数可以省略
```js
function fnn(x,y = throwMissing()){
  console.log(x,y)
}
function throwMissing(){
  return new Error('Missing ...')
}
```
函数的length属性，返回未申明默认值参数的个数,不包括rest参数

## rest参数
用于获取函数剩余参数
```js
function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}
```
## name属性
返回函数名
匿名函数赋值给变量时会返回变量名，具名函数不论是否赋值一律返回函数名
Function构造函数返回的函数实例，name属性的值为anonymous
bind返回的函数，name属性值会加上bound前缀
```js
(new Function).name // "anonymous"
function foo() {};
foo.bind({}).name // "bound foo"

(function(){}).bind({}).name // "bound "
```
## 箭头函数
（1）箭头函数没有自己的this对象（详见下文）。  
（2）不可以当作构造函数，也就是说，不可以对箭头函数使用new命令，否则会抛出一个错误。  
（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。  
（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。  
除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target


toString()方法ES2019做了修改，返回代码，包括注释
ES2019还允许catch后省略参数
ES2017允许函数参数尾部添加“，”

# 数组的扩展
## 扩展运算符:  
... 只有函数调用时
替代函数apply，在很多函数中，只能接收参数序列，非数组形式，可直接使用...[]即可
数组深拷贝 简单的赋值是不能复制数组的，仅仅将数组的指针地址复制了过去，a1 = [...a2]  [...a2] = a1
合并数组时浅拷贝 a1 = [...a2,...a3]  a1 = a2.concat(a2)
将字符串转为数组 [...'hello'] => ['h','e','l','l','o']
用在实现了 Iterator 接口的对象
Map 和 Set 结构，Generator 函数
## Array.from()
Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）  
任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换  
对于还没有部署该方法的浏览器，可以用Array.prototype.slice方法替代  

## Array.of()
Array.of()方法用于将一组值，转换为数组  
弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异  
```js
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]
```
Array.of()方法可以用下面的代码模拟实现。
function ArrayOf(){
  return [].slice.call(arguments);
}

## 数组实例的copyWithin()
Array.prototype.copyWithin(target, start = 0, end = this.length)  
start位置开始到end位置结束的数据去覆盖target位置开始的数据  

## 数组实例的find()和findIndex()
find用于找出第一个符合条件的数组成员，参数是一个回调函数，成员依次执行该函数，找到返回，找不到返回undefined
```js
let a = [1,4,2,6,8,-1,-9]
let b = a.find((value,index,arr)=>{ //value表示当前值，index表示当前位置，arr表示原数组
  return value < 0
})
console.log(b)
// -1
```
findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1  
这两个方法都可以接受第二个参数，用来绑定回调函数的this对象
```js
function f(v){
  return v > this.age;
}
let person = {name: 'John', age: 20};
[10, 12, 26, 15].find(f, person);    // 26
```
另外，这两个方法都可以发现NaN，弥补了数组的indexOf方法的不足
[NaN].findIndex(y => Object.is(NaN, y))

## fill()
使用接收的参数填充一个数组
fill(num,start,end) start开始，end之前
特别注意填充类型为对象时，赋值的是同一个内存地址，而不是深拷贝对象
```js
let arr = new Array(3).fill({name: "Mike"});
arr[0].name = "Ben";
arr
// [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]

let arr = new Array(3).fill([]);
arr[0].push(5);
arr
// [[5], [5], [5]]
```

## 数组实例的 entries()，keys() 和 values()
返回一个遍历器对象，分别是键值对，键名，键值
不使用for...of循环，可以手动调用遍历器对象的next


## includes(value,start=undefined) ES2016
表示某个数组是否包含给定的值，与字符串的includes方法类似
```js
const contains = (() =>
  Array.prototype.includes
    ? (arr, value) => arr.includes(value)
    : (arr, value) => arr.some(el => el === value)
)();
contains(['foo', 'bar'], 'baz'); // => false
```

## 数组实例的flat(level=1)和flatMap()
flat()将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。  
默认拉平一层，不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数  
原数组有空位则跳过  
flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组，只能打开一层  
flatMap()方法的参数是一个遍历函数，该函数可以接受三个参数，分别是当前数组成员、当前数组成员的位置（从零开始）、原数组  
flatMap()方法还可以有第二个参数，用来绑定遍历函数里面的this，同find和findIndex 

# 对象的扩展
对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象  
```js
let obj = { foo: 123 };
Object.getOwnPropertyDescriptor(obj, 'foo')
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }
```
## 属性的遍历
ES6 一共有 5 种方法可以遍历对象的属性。
（1）for...in
for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
（2）Object.keys(obj)
Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
（3）Object.getOwnPropertyNames(obj)
Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
（4）Object.getOwnPropertySymbols(obj)
Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。
（5）Reflect.ownKeys(obj)

## super关键字
指向当前对象的原型，只能用在对象的方法之中，用在其他地方都会报错。

## 链判断运算符
ES2020 引入了“链判断运算符”（optional chaining operator）?.
链判断运算符有三种用法。
obj?.prop // 对象属性
obj?.[expr] // 同上
func?.(...args) // 函数或对象方法的调用
a?.b
// 等同于
a == null ? undefined : a.b

a?.[x]
// 等同于
a == null ? undefined : a[x]

a?.b()
// 等同于
a == null ? undefined : a.b()

a?.()
// 等同于
a == null ? undefined : a()
## Null 判断运算符？？
ES2020 引入了一个新的 Null 判断运算符??。它的行为类似||，但是只有运算符左侧的值为null或undefined时，才会返回右侧的值。  
??有一个运算优先级问题，它与&&和||的优先级孰高孰低。现在的规则是，如果多个逻辑运算符一起使用，必须用括号表明优先级，否则会报错

# 对象的新增方法
## Object.is()
比较两个值是否严格相等
```js
Object.is('foo', 'foo')
// true
Object.is({}, {})
// false
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```
## Object.assign()
用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）  
```js
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```
如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性  
如果只有一个参数，Object.assign()会直接返回该参数。  
如果该参数不是对象，则会先转成对象，然后返回。  
由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。  
如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。首先，这些参数都会转成对象，如果无法转成对象，就会跳过。这意味着，如果undefined和null不在首参数，就不会报错  
其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果  
Object.assign()拷贝的。只有字符串的包装对象，会产生可枚举的实义属性，那些属性则会被拷贝。  
Object.assign()拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）  
属性名为 Symbol 值的属性，也会被Object.assign()拷贝。  
注意点：
1.浅拷贝，如果原对象的某个属性值是对象，那么目标对象拷贝的是对这个对象的引用
2.遇到同名属性时，发生替换非添加
3.取值函数将先求值再复制

常见用途：
1.为对象添加属性
```js
class Point {
  constructor(x, y) {
    Object.assign(this, {x, y});
  }
}
// 类似
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}
```
2.为对象添加方法
```js
Object.assign(obj.prototype,{
  fn1(){

  },
  fn2(){

  }
})
// 同
obj.prototype.fn1 = function(){}
obj.prototype.fn2 = function(){}
```
3.克隆对象
将原始对象拷贝到一个空对象，就得到了原始对象的拷贝  
不过只能拷贝原始对象自身的值，继承的值无法拷贝  
实现克隆继承属性需按下操作  
```js
function clone(origin) {
  let originProto = Object.getPrototypeOf(origin);
  return Object.assign(Object.create(originProto), origin);
}
```
4.合并多个对象
5.为属性指定默认值

## Object.getOwnPropertyDescriptors()
ES5 的Object.getOwnPropertyDescriptor()方法会返回某个对象属性的描述对象（descriptor）。ES2017 引入了Object.getOwnPropertyDescriptors()方法，返回指定对象所有自身属性（非继承属性）的描述对象。

## __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()
__proto__属性（前后各两个下划线），用来读取或设置当前对象的原型对象（prototype）。目前，所有浏览器（包括 IE11）都部署了这个属性。  
Object.setPrototypeOf方法的作用与__proto__相同，用来设置一个对象的原型对象（prototype），返回参数对象本身
Object.getPrototypeOf()用于读取一个对象的原型对象

## Object.keys()，Object.values()，Object.entries() 
ES5 引入了Object.keys方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名  
Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值  
Object.entries()方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组  

## Object.fromEntries() 
是Object.entries()的逆操作，用于将一个键值对数组转为对象  
因此特别适合将 Map 结构转为对象。  
该方法的一个用处是配合URLSearchParams对象，将查询字符串转为对象
```js
Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'))
// { foo: "bar", baz: "qux" }
```

# Symbol

# Set和Map数据结构
Set类似于数组，但是成员的值都是唯一的，没有重复的值，可以用于数组去重
对象总是不相等的，所以添加add({})两次是可以的

属性：
constructor：
size: 返回Set实例成员总数
方法：
add() => 添加值，返回Set本身
delete() => 删除值，返回删除结果，成功true
has() => 检查是否含有该值，返回true/false
clear() => 清空Set，无返回
Array.from(new Set(array))
Set结构的键名和键值是一致的  
使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）
```js
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
```

WeakSet
与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。首先，WeakSet 的成员只能是对象，而不能是其他类型的值  
WeakSet没有size，不可遍历

Map  
Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。  
```js
let m = new Map()
let o = {name: 'hwg',age:'24'}
m.set(o,'Hello World!')  // o是键名
console.log(m.get(o))
m.has(o)
m.delete(o)
m.size()
m.clear()
```
WeakMap的专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏,同样没有遍历操作

# proxy
用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程  
```js
let person = {
  name: 'hwg',
  age: '24',
  city: 'HZ'
}
// let proxy = new Proxy(target,handler) target要进行操作拦截的对象，handler处理
person = new Proxy(person,{
  // get方法用于拦截某个属性的读取操作
  get(target,propKey,receiver){ // target->目标对象  propKey-> 属性名  receiver-> proxy实例本身
    if(propKey in target){
      return target[propkey]
    }else{
      throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.");
    }
  },
  set(target,key,value,receiver)
})
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
