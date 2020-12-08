// Set 数据结构

const s = new Set()

s.add(1).add(2).add(1)

console.log(s) // Set { 1, 2 }

// s.forEach(i => console.log(i))

// for (let i of s) {
//   console.log(i)
// }

// console.log(s.size) // 2

console.log(s.has(1))

console.log(s.delete(1))
console.log(s.clear())

// 常见为数组去重

const arr = [1, 2, 1, 1, 4, 5]
// const result = Array.from(new Set(arr))

const result = [...new Set(arr)]

console.log(result) // [ 1, 2, 4, 5 ]
