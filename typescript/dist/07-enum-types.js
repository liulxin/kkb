"use strict";
// 枚举 enum
Object.defineProperty(exports, "__esModule", { value: true });
// const enum STATUS {
//   Draft = 0,
//   unpublished = 1,
//   Published = 2
// }
var STATUS;
(function (STATUS) {
    STATUS[STATUS["Draft"] = 0] = "Draft";
    STATUS[STATUS["unpublished"] = 1] = "unpublished";
    STATUS[STATUS["Published"] = 2] = "Published";
})(STATUS || (STATUS = {}));
var post = {
    title: 'hello ts',
    status: STATUS.Draft
};
