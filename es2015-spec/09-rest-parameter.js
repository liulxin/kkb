// 剩余参数

// function foo() {
//   console.log(arguments) // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
// }

function foo(...args) {
  console.log(args) // [ 1, 2, 3, 4 ]
}

foo(1, 2, 3, 4)