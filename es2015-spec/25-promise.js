// const promise = new Promise((resolve, reject) => {

//   // resolve(100)


//   reject(new Error('404'))
// })

// promise.then(res => {
//   console.log(res)
// }, e => {
//   console.log(e)
// })

// // promise.then(res => {
// //   console.log(res)
// // }).catch(e => {
// //   console.log(e)
// // })

// console.log('end')


// function ajax(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()

//     xhr.open('GET', url)
//     xhr.responseType = 'json'
//     xhr.onload = function() {
//       if(this.status === 200) {
//         resolve(this.response)
//       } else {
//         reject(new Error(this.statusText))
//       }
//     }
//     xhr.send()
//   })
// }

// ajax('api/user.json').then(res => {
//   console.log(res)
// }).catch(e => {
//   console.log(e)
// })

// window.addEventListener('unhandledrejection', event => {
//   const {reason, promise} = event;

//   console.log(reason, promise)
//   // reason => promsie 失败的原因，一般是一个错误对象
//   // promise => 出现失败的promise

//   event.preventDefault()
// }, false)

Promise.resolve('foo') // 转为 Promise 对象

Promise.resolve({
  then: function(onFulfilled, onRejected) {
    onFulfilled('foo')
  }
}).then(val => {
  console.log(val) // foo
})

Promise.reject(new Error('err'))