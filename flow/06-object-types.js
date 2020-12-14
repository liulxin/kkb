// @flow

const obj1 : {foo: string, bar: number} = {
  foo: 'str',
  bar: 1
}

const obj2 : {foo?: string, bar: number} = {
  bar: 1
}

const obj3: {[string]: number} = {}

obj3.age = 100
// obj3.name = 'xiaoming'