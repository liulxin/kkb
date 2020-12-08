// Symbol 数据类型
// 值都是独一无二的

const cache = {}

// // a.js

// cache['foo'] = Math.random()

// // b.js 

// cache['foo'] = 123

// console.log(cache) // { foo: 123 }

const s = Symbol()

console.log(s) // Symbol()
console.log(typeof s) // symbol


const a = Symbol('foo')
const a2 = Symbol('foo')
console.log(a === a2) // false

cache[a] = 1
cache[a2] = 2

console.log(cache) // { [Symbol(foo)]: 1, [Symbol(foo)]: 2 }

// 还可以创建对象的私有成员
const name = Symbol()

const person = {
  [name]: 'xiaoming',
  say() {
    console.log(this[name])
  }
}

// for

console.log(
  Symbol.for('name') === Symbol.for('name') // true
)

const oj = {
  [Symbol.toStringTag]: 'SObject'
}

console.log(oj.toString()) // [object SObject]

const ob2 = {
  [Symbol()]: 'symbol value',
  foo: 'normal value'
}

// foo
// [ 'foo' ]
// {"foo":"normal value"}
for (var key in ob2) {
  console.log(key)
}
console.log(Object.keys(ob2))
console.log(JSON.stringify(ob2))

console.log(Object.getOwnPropertySymbols(ob2)) // [ Symbol() ]