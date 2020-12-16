// array

const arr1: Array<string> = ['age', 'name']

const arr2: string[] = ['age', 'name']

function sum(...args: number[]): number {
  return args.reduce((prev, cur) => prev + cur, 0)
}

sum(1, 2, 5)

export {}