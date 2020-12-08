// const obj = {
//   name: 'zhangsan',
//   age: 12
// }

// const proxy = new Proxy(obj, {
//   get(target, property) {
//     // do something

//     console.log('watch...')

//     return Reflect.get(target, property)
//   }
// })

// console.log(proxy.name)


const obj = {
  name: 'zjamg',
  age: 18
}

// console.log('name' in obj)
// console.log(delete obj.name)
// console.log(Object.keys(obj))

console.log(Reflect.has(obj, 'name'))
console.log(Reflect.deleteProperty(obj, 'name'))
console.log(Reflect.ownKeys(obj))

