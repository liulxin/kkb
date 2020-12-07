// function inc(number) {
//   return number + 1
// }

const inc = number => number + 1

console.log(inc(10))

// 箭头函数不会改变this的指向
const person = {
  name: 'tom',
  // say: function() {
  //   console.log(this) // { name: 'tom', say: [Function: say] }
  //   console.log(this.name)
  // }
  say: () => {
    console.log(this) // { }
    console.log(this.name) // undefined
  },
  // sayAsync: function() {
  //   setTimeout(function() {
  //     console.log(this.name) // undefined
  //   }, 1000)
  // }
  sayAsync: function() {
    setTimeout(() =>  {
      console.log(this.name) // tom
    }, 1000)
  }
}

person.say()
person.sayAsync()