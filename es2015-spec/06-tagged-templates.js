// 带标签的模板字符串

// const str = console.log`hello world`

const name = 'tom'
const gender = true

function myTagFunc(strings, name, gender) {
  console.log(strings) // [ 'hey, ', ' is a ', '.' ]
  console.log(name, gender)

  // return strings[0] + name + strings[1] + gender + strings[2]
  return 124
}

const result = myTagFunc`hey, ${name} is a ${gender}.`

// console.log(result) // hey, tom is a true.
console.log(result) // 124