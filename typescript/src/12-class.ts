export {}

class Person {
  public name: string // = 'init name'
  private age: number
  protected readonly gender: boolean

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.gender = true
  }

  sayHi(msg: string): void {
    console.log(`hello, ${this.name} -- ${msg}`)
  }
}

const tom = new Person('tom', 20)

tom.sayHi('mua')

class Student extends Person {
  private constructor(name: string, age: number) {
    super(name, age)

    console.log(this.gender)
  }

  static create(name: string, age: number) {
    return new Student(name, age)
  }
}

const xiaoming = Student.create('xiaoming', 10)
// xiaoming.name