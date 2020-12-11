// promise 并行请求

// Promise.all([])

import ajax from './25-promise'

// 全部完成或者一个失败就会返回

var promise = Promise.all([
  ajax('api/user.json'),
  ajax('api/student.json')
])

promise.then(res => {
  console.log(res)
}).catch(e => {
  console.log(e)
})
