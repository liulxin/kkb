const arr = [2, 4, 5]

for (const item of arr) {
  if(item > 3) {
    break;
  }
  console.log(item)
}
// 可以直接中断

// arr.forEach() // 不能跳出循环


const s = new Set([2, 4])
for (const item of s) {
  console.log(item)
}


const m = new Map()
m.set('foo', 1)
m.set('bar', 2)
for (const [key, value] of m) {
  console.log(key, value)

}
// foo 1
// bar 2


const obj = {
  store: ['foo', 'bar', 'baz'],
  [Symbol.iterator]: function() {
    let index = 0;
    const self = this;
    return {
      next: function () {
        const res =  {
          value: self.store[index],
          done: index >= self.store.length
        }
        index ++;
        return res
      }
    }
  }
}

for (const item of obj) {
  console.log(item)
  // TypeError: obj is not iterable
}
// for of 的前提是实现 iterable 接口
