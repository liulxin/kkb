// @flow

// const a:'foo' = 'foo'

const type: 'success' | 'warning' | 'danger' = 'danger'

const b: string | number = 23

type stringOrNumber = string | number

const c: stringOrNumber = 'str'


// const gender: ?number = null
const gender: number | null | void = 23;

// mixed any
// string | number | boolean | ...

// mixed 强类型
function passMixed(value: mixed) {
  if(typeof value === 'string') {
    value.substr(1)
  }
}

passMixed('string')
passMixed(100)

// any 弱类型
function passAny(value: any) {
  value.substr(1)

  value * value
}
passAny('string')
passAny(100)