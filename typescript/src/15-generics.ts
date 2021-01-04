export {}

function crfeateNumberArray(length: number, value: number): number[] {
  return Array<number>(length).fill(value)
}

function creatArray<T>(length: number, value: T): Array<T> {
  return Array<T>(length).fill(value)
}