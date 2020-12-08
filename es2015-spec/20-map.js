// Map 数据结构

// const obj = {}

// obj[true] = 'value'
// obj[123] = 'value'
// obj[{a: 1}] = 'value'

// console.log(Object.keys(obj)) // [ '123', 'true', '[object Object]' ] 会自动转为字符串


const m = new Map()

const tom = { a: 1 }

m.set(tom, 90)

console.log(m) // Map { { a: 1 } => 90 }

console.log(m.get(tom))

// Map 可以用任意类型作为键， 而对象只能使用字符串作为键