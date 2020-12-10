console.log('global begin')

setTimeout(function() {
  console.log('time1')
}, 1800)

setTimeout(function() {
  console.log('time2')

  setTimeout(function() {
    console.log('inner')
  }, 200)
}, 1000)

console.log('global end')


// global begin
// global end
// time2
// inner
// time1