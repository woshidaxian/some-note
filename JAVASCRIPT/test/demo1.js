class Person {
  sleep(){
    console.log('person start sleep')
  }
}

Person.prototype.eat = function () {
  console.log('person start eat!');
}

let p1 = new Person();

console.log(Person.prototype);
console.log(Person.prototype.constructor);
console.log(p1.__proto__);