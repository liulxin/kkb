// 枚举 enum

export {}

// const enum STATUS {
//   Draft = 0,
//   unpublished = 1,
//   Published = 2
// }

enum STATUS {
  Draft = 0,
  unpublished = 1,
  Published = 2
}

const post = {
  title: 'hello ts',
  status: STATUS.Draft
}