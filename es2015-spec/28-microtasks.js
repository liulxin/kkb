// 微任务 Promise.then && MutationObserver && process.nextTick
// setTimeout 宏任务

console.log('global start')

setTimeout(() => {
  console.log('setTimeout')
}, 0)

Promise.resolve().then(res => {
  console.log('promise')
})

console.log('global end')

// global start
// global end
// promise
// setTimeout
