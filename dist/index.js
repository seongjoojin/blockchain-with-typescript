"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const tim = new Human("Tim", 30, "female");
const sayHi = (person) => {
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
};
console.log(sayHi(tim));
//# sourceMappingURL=index.js.map