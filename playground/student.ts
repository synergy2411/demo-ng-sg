import { Person } from './person';

export class Student {
    private fname: string;
    private age: number;

    // constructor(fname: string, age: number) {
    constructor(obj : Person) {
        this.fname = obj.firstName;
        this.age = obj.age;
    }
    sayHi() {
        return "Hi, I'm " + this.fname + ", " + this.age + " years old.";
    }
}

export const MAGIC_NUMBER = Math.floor(Math.random()*10);

export function foo(){console.log("Foo called.")}