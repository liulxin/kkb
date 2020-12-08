const set = new Set(['foo', 'bar'])

const iterator = set[Symbol.iterator]()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// { value: 'foo', done: false }
// { value: 'bar', done: false }
// { value: undefined, done: true }