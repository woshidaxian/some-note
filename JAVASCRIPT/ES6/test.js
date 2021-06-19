const { red } = require('chalk');
const chalk = require('chalk');
function out(a){
  console.log(a)
}
function outError(a){
  console.log(chalk.red(a))
}
function outSuccess(a){
  console.log(chalk.green(a))
}

// let a = new Set(['a', 'a', 'b', 'c'])
// a.forEach(item => {
//   outSuccess(item)
// })
// out(a)
// out([...a].join(''))
// let [ flag = true ] = [1]
// out(typeof(d))
// let [a,b,[c,[d]]] = [1,2,[3,[4]]]
// console.log(a,b,c,d)
// let a = {
//   b: [1,2,3,4],
//   c: {
//     d: 1,
//     e: [1,2]
//   }
// }
// let {b,c,c:{d,e}} = a
// console.log(b,c,d,e)
// let {length:len} = 'hello'
// out(len)
// let x = 1;
// let y = 2;
// [x, y] = [y, x]
// console.log(x,y)
// let map = new Map()
// map.set('first','hello')
// map.set('second','world')
// console.log(map)
// for(let [key,value] of map){
//   console.log(key,value)
// }
// let a = '大家好'
// for(let i=0;i<a.length;i++){
//   console.log(a[i])
// }
// let a = "Hello World"
// out(a.replace(/o/g,'_'))
// let reg = new RegExp(/o/,'Hello World!')
// out(reg.test())
// out(reg)
// wghuangzj@sina.com
// let reg = /\d{11}a$/
// let emailReg = /@\w\./
// out(reg.test(' '))
// let a = 'Hello World ! Hi '
// out(reg.test('18167110550a'))
// let reg = new RegExp(/\s/)
// out(a.split(reg))
// let obj = {
//   who: 'hwg',
//   year: 24,
//   city: '衢州'
// }
// let a = '${who} are ${year} old, He/She is from ${city}'
// let reg = /\$\{(.+?)\}/g
// out(a.replace(reg,(a,b,c,d) =>{
//   // console.log(a,b,c,d)
//   return obj[b]
// }))
//电话号码
// let reg = /^1(81|50|34|39)\d{8}$/
// out(reg.test('18167110550'))
// 邮箱验证
// let emailReg = /^.+@.+\.\w+$/
// out(emailReg.test('wg1huangz@sina.com'))

// let a = [1,2]
// Array.prototype.aa = function(){
//   console.log()
// }
// Array.prototype.name = ''
// a.name = 'hwg'
// a.name = 'hwg'
// out(a.name)
// let a = [1,2]
// let b = [3,4]
// let c = [5,6]
// let d = a.concat(b,c)
// let g = ['我','爱','你']
// for (let i of d){
//   out(i)
// }
// Array.prototype.join_hwg = function(a) {
//   console.log(this)
// }
// a.join_hwg('1')
// console.log(a.join('-'))
// console.log(d)
// function sortNumber(a,b){
//   return b-a;
// }
// console.log(d.sort((a,b)=> b-a))
// console.log(d.splice(3,0,34))
// console.log(g.toLocaleString())
// console.log(g.toString())
// console.log(d.unshift(1,2,3,5))
// out(d.valueOf()===d)
// let a = new Boolean(true)
// console.log(typeof(a))
// class Car{
//   constructor(a){
//     this.carName = a
//   }
// }
// myCar = new Car('BWM')
// // console.log(myCar.carName)
// let myDate = new Date()
// console.log(myDate.Date())
// out(Math.exp(1))
// out(Math.E)
// out(Math.max(23,34))
// let a = 1234
// out(Number.POSITIVE_INFINITY)
// out(a)
// out(a.toPrecision(8))
// let a = 'asfasfsada'
// let b = String('asdsdasd')
// let c = new String('sdagrhds')
// out(b.length)
// out(a.link('http://'))
// out(a.substring(2,3))
// out(b instanceof(String))
// function Person() {
  
// }
// Person.prototype.name = 'hwg'
// let p1 = new Person()
// let p2 = new Person()
// console.log(Person.prototype.__proto__.constructor)
// console.log(p2.name)
// console.log(p1.__proto__.__proto__)
// function Person(name){
//   this.name = name
// }
// Person.prototype.eat = function(){
//   console.log(this.name+' is eatting !')
// }
// let p1 = new Person('hwg')
// p1.eat()
// console.log(p1.__proto__) // 指向对象的原型，即Person
// console.log(Person.prototype) // 该函数的原型,
// console.log(Person.prototype.constructor) //指向构造函数