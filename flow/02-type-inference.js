/**
 * 类型推断
 * @flow
 * @param {*} n 
 */
function square(n) {
  const res = n * n;

  console.log(res)
  return res
}

square(2)

// square('2')
