// const person = {
//   name: 'zhangsan',
//   age: 14
// }

// const personProxy = new Proxy(person, {
//   get(target, property) {
//     console.log(target, property)

//     return property in target ? target[property] : 'default'
//   },
//   set(target, property, value) {
//     console.log(target, property, value)
//     if (property === 'age') {
//       if (!Number.isInteger(value)) {
//         throw new TypeError(`${value} is not int`)
//       }
//     }
//     target[property] = value
//   }
// })


// console.log(personProxy.name)
// console.log(personProxy.name2)

// // personProxy.age = 'aa'

// personProxy.age = 16

// console.log(personProxy.age)

// 对比 Object.defineProperty() ----------
// 1. 可以监听对对象的操作
// 2. 更好的支持对数组的监视
// 3. proxy 非侵入的方式进行对对象的监视
// const person = {
//   name: 'zhangsan',
//   age: 14
// }

// const proxyPerson = new Proxy(person, {
//   deleteProperty(target, property) {
//     console.log('delete', property)
//     delete target[property]
//   }
// })

// delete proxyPerson.age // delete age

// console.log(person) // { name: 'zhangsan' }

const list = []
const listProxy = new Proxy(list, {
  set(target, property, value) {
    console.log('set', property, value)

    target[property] = value

    return true; // 表示设置成功
  }
})

listProxy.push(100)
// set 0 100
// set length 1