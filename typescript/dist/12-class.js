"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHi = function (msg) {
        console.log("hello, " + this.name + " -- " + msg);
    };
    return Person;
}());
var tom = new Person('tom', 20);
tom.sayHi('mua');
