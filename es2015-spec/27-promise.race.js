// Promise.race
// 任意一个结束

import ajax from './25-promise'
const promise = Promise.race([
  ajax('api/user.json'),
  ajax('api/student.json')
])

promise.then(res => {
  console.log(res) //{name: "xiaoming"}
}).catch(e => {
  console.log(e)
})