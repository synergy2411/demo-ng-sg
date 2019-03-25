"use strict";
// Template String 
exports.__esModule = true;
// - include variables inline with string
// - multiline string
// var fname = "Foo";
// console.log(`Hello ${fname}!!`);
// Constants and block scopes
// - 'let'
// - 'const'
// function demo(arr){
//     if(arr.length>2){
//         let load = "LOADING";
//         console.log(flash);         //?
//     }else{
//         let flash = "FLASHING";
//     }
// }
// demo([2,3,4,5])
// const APP = "Application";
// const USER = Object.freeze({
//     name : "Foo"
// })
// // USER.name = "Bar";
// console.log(USER.name);
// Destructuring
// - 'Array'
// - 'Object
var myModule = {
    drawCircle: function (r) { console.log(Math.PI * r * r); },
    drawText: function (text) { console.log("Drawing " + text); },
    modules: {
        module_one: function () { console.log("Module 1"); },
        module_two: function () { console.log("Module 2"); }
    }
};
var dt = myModule.drawText, dc = myModule.drawCircle, mt2 = myModule.modules.module_two;
var mt1 = myModule.modules.module_one;
// mt2();
// dc(3);
// dt("Sample Text")
// dt("Sample String Text")
//Array Destructuring
// let arr = ["foo", "bar", "bam", "bas"];
// let [arr1, arr3, arr4] = arr;
// console.log(arr3);          //bam
// let user = {
//     name : "Foo",
//     friends : ["bar", "bam", "bas"],
//     address : {
//         street : "201 Main St.",
//         city : "Chennai"
//     }
// }
// let {friends : [,,b] , address : {city : c}} = user;
// Spread & Rest operators ( ... )
function demo(xyz) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(args[0]); //32
}
// demo("foo")
// demo("foo", 32)
// demo("foo", 32, true)
// let coll = [2,3,4];
// let newArr = [1, ...coll, 5,6];
// console.log(newArr);            //?
// Arrow functions
//ES5
// let numbers = [2,3,4,5];
// let doubleNum = numbers.map(function(value){
//     return value * 2;
// })
// console.log(doubleNum);
// //ES6
// let tripleNum = numbers.map( value => value * 3);
// console.log(tripleNum);
// let obj = {
//     firstName : "Foo",
//     lastName : "Bar",
//     sayHello : function(){
//         var nestedFunc =  () => "Hello " + this.firstName + " " + this.lastName;
//         return nestedFunc();
//     } 
// }
// console.log(obj.sayHello());        //?
// let newUser = {
//     firstName : "New First Name"
// }
// let boundFunc = obj.sayHello.bind(newUser);
// console.log(boundFunc());
// console.log(obj.sayHello());
// function add(num1, num2){
//     return num1 + num2;
// }
// var addition = function(add1, add2){
//     return add1 + add2;
// }
// console.log(add(34,4));
// console.log(addition(3,4));
//function hoisting
// function mystry(){
//     var chooseNumber = function (){
//         return 7;
//     }
//     return chooseNumber();
//     var chooseNumber = function (){
//         return 12;
//     }
// }
// console.log(mystry());          //?
// Classes & Inheritance
// npm install typescript -g
// typescriptlang.org > documentation > handbook
// Module system
// import { Student, MAGIC_NUMBER, foo } from './student';
var student = require("./student");
var obj = {
    firstName: "Bar",
    age: 32
};
// let foo = new Student("Foo", 32);
var foo1 = new student.Student(obj);
console.log(foo1.sayHi());
console.log(student.MAGIC_NUMBER);
student.foo();
// Decorators
// Additional types
//  - any
// - void
// - enum
var xyz = "String";
xyz = true;
xyz = 201;
console.log(typeof xyz);
