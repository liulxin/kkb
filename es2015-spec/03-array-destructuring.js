// 数组解构

const arr = [100, 200, 300]

const [foo, bar, baz] = arr
const [, , baz2] = arr
const [foo2, ...rest] = arr

console.log(foo)

console.log(baz2)

console.log(rest) // [200, 300]