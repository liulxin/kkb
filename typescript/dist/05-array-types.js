"use strict";
// array
Object.defineProperty(exports, "__esModule", { value: true });
var arr1 = ['age', 'name'];
var arr2 = ['age', 'name'];
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (prev, cur) { return prev + cur; }, 0);
}
sum(1, 2, 5);
