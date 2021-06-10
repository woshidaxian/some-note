# 实现进入全屏&退出全屏
```js
toggleFullScreen:function(){
    if(!this.isFullScreen){
        let el = document.documentElement;
        (el.requestFullscreen && el.requestFullscreen()) ||
        (el.mozRequestFullScreen && el.mozRequestFullScreen()) ||
        (el.webkitRequestFullscreen && el.webkitRequestFullscreen()) || (el.msRequestFullscreen && el.msRequestFullscreen());
        this.isFullScreen = 1;
    }else{
        document.exitFullscreen ? document.exitFullscreen() :
        document.mozCancelFullScreen ? document.mozCancelFullScreen() :
        document.webkitExitFullscreen ? document.webkitExitFullscreen() : '';
        this.isFullScreen = 0;
    }
}
```

# 重新加载
全屏下使用会退出全屏
```js
document.location.reload()
```

# XMLHttpRequest对象

# typeof与instanceof
typeof可以返回一个数据的类型，但是null、array、object都会返回object，这是typeof的局限
对于未定义变量可以返回undefined，常用于判断变量是否有值if(type(a)!="undefined")
instanceof用于测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性 
object（要检测的对象）instanceof constructor（某个构造函数）object是constructor的实例？
注意Array是Object的子类
Array.isArray()也可用于判断是否数组


# js正则
## 修饰符
/i 大小写不敏感  
/g 执行全局匹配  
/m 执行多行匹配  

## 模式
方括号内的任意一个，可以是范围可以是一些值，加了^表示取反  
[a-z]  
[0-9]  
[abc]  
[^abc] abc之外的数  

()该括号一般配合｜表示或  
(a|b)  

元字符  
. => 表示单个字符，除了换行和行结束符 \n  
\w => 查找单词字符,相当于 [a-zA-Z0-9_]  
\W => 查找废单词字符，相当于\w取反 [^a-zA-Z0-9_]  
\d => 查找数字 [0-9]  
\D => 查找非数字 [^0-9]  
\s => 查找空白字符  
\S => 查找非空白字符  
\b => 匹配单词边界  
\B => 匹配非单词边界  
\0 => 查找Null 字符串中有\u0000 \0  
\n => 换行符  
\f => 换页符 字符串中有\f  
\r => 回车符号（return）  
\t => 制表符（table）  
\v => 垂直制表符  
\xxx => 八进制  
\xdd => 十六进制  
\uxxxx => Unicode字符  

量词
n+ 包含至少一个n  
n* 零个或多个n，任意个数  
n? 零个或一个   
n{x} 含x个n  
n{x,y} 含x-y个n  
n{x,} 含至少x个n  
n$ 以n结尾  
^n 以n开始  
?=n 其后紧接字符串n  
?!n 其后非紧接n  

RegExp对象属性  
global 是否具有标志g  
ignoreCase 是有具有标志i  
lastIndex 一个整数，标示开始下一次匹配的字符位置  
multiline 是否具有标志m  
source 正则表达式源文本  

RegExp对象方法  
compile() 编译正则表达式或改写  
exec() 检索字符串中指定的值。返回找到的值，并确定其位 置。
test() 是否含有，返回true OR false  

支持正则表达式的String对象的方法  
search() 返回源字符串中第一次匹配位置  
match() 找到全部匹配的字符串，返回匹配字符串的数组，  非/g可返回第一次匹配的位置  
replace() 替换  
split() 拆分  
```js
let reg = /[a-z]/

// 模版字符串
/.+?/ //为惰性匹配
/.+/ // 贪婪匹配
let obj = {
  who: 'hwg',
  year: 24,
  city: '衢州'
}
let a = '{{who}} are {{year}} old, He/She is from {{city}}'
let reg = /\{\{(.+?)\}\}/g
out(a.replace(reg,(a,b,c,d) =>{
  console.log(a,b,c,d)
}))
```


# JS对象
## JS Array
属性：
constructor   => 返回对创建此对象的数组函数的引用
length        => 数组长度
prototype     => 通过数组原型向对象添加属性和方法
```js
let a = new Array()
console.log(a.constructor == Array) // true
console.log(a.length) // 0
Array.prototype.a = function(){}
Array.prototype.b = ''
```

方法：
concat()   =>  把数组连接起来 a.concat(b)  a.concat(b,c)