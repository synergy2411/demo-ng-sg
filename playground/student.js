"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    // constructor(fname: string, age: number) {
    function Student(obj) {
        this.fname = obj.firstName;
        this.age = obj.age;
    }
    Student.prototype.sayHi = function () {
        return "Hi, I'm " + this.fname + ", " + this.age + " years old.";
    };
    return Student;
}());
exports.Student = Student;
exports.MAGIC_NUMBER = Math.floor(Math.random() * 10);
function foo() { console.log("Foo called."); }
exports.foo = foo;
