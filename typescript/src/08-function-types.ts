export {}


function func1(a: number): number {
  return a
}

const func2: (a: number) => number = function(a: number): number {
  return a
}