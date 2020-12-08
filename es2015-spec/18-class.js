// function Person(name) {
//   this.name = name;
// }

// Person.prototype.say = function() {
//   console.log(this.name)
// }

// function Son() {
//   this.name = 'som'
// }

// Son.prototype = new Person()

// const person = new Person('tom')
// person.say()

// const son = new Son()
// son.say()


class Person {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(this.name)
  }

  static create(name) {
    return new Person(name)
  }
}

const person = new Person('tom')
person.say()

const xiaoming = Person.create('xiaoming')
// console.log(xiaoming)
xiaoming.say()

class Son extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

const son = new Son('pe', 18)
console.log(son.age)
