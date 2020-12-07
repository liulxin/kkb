const a = [1]
const b = [1]
console.log(
  -0 === +0, // true
  NaN === NaN, // false
  Object.is(-0 , +0), // false
  Object.is(NaN , NaN), // true
  Object.is(a, b) // false
)