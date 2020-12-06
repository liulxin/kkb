function foo(enable = false) {
  console.log('foo invoked - enable:')
  console.log(enable) // false
}

foo()
foo(true) // true