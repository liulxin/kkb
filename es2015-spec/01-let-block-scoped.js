// if (true) {
//   // var foo = 1;
//   let foo = 1;
// }

// console.log(foo) // ReferenceError: foo is not defined

// ---------------------------------


// for (var i = 0; i < 3; i++) {
//   for (var i =0; i < 3; i++) {
//     console.log(i)
//   }
//   console.log('内层结束 i = ', i) // 3
// }

// for (let i = 0; i < 3; i++) {
//   for (let i =0; i < 3; i++) {
//     console.log(i)
//   }
//   console.log('内层结束 i = ', i) // 0 1 2
// }

// ---------------------------------

// var elements = [{}, {}, {}]

// for (var i =0; i < elements.length; i++) {
//   elements[i].onClick = function() {
//     console.log(i)
//   }
// }

// elements[0].onClick() // 3

// ---------------------------------


// var elements = [{}, {}, {}]

// for (let i =0; i < elements.length; i++) {
//   elements[i].onClick = function() {
//     console.log(i)
//   }
// }

// elements[0].onClick() // 0

// ---------------------------------

// for (let i = 0; i < 3; i++) {
//   let i = 'foo'
//   console.log(i) // foo foo foo
// }

// let i = 0;

// if (i < 3) {
//   let i = 'foo'
//   console.log(i)
// }