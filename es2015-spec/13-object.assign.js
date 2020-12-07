const source1 = {
  a: 1,
  b: 2
}

const target = {
  a: 2,
  c: 3
}

const d = Object.assign(target, source1)

console.log(d) // { c: 3, a: 1, b: 2 }
console.log(target) // { c: 3, a: 1, b: 2 }