import {halfOf, multiply, add, userFriends, userTopFriends, parent, iterateLet, iterateVar } from "/lib.js";
console.log("Half of 68 is",halfOf(68));
console.log("Multiplication of 32 and 2 is",multiply(32, 2));

import doSomething from "/doSomething.js";
doSomething();

import { flag, touch } from "/validator.js";
    console.log(flag);
    touch();
    console.log(flag);


// Class
class Vehicle {
    constructor(wheels) {
    this.wheels = wheels;
    }
    toString() {
    return '(' + this.wheels + 'wheels)';
    }
}

class Car extends Vehicle {
    constructor(color) {
    super(4);
    this.color = color;
    }
    toString() {
    return super.toString() + ' colored: ' + this.color;
    }
}

let car = new Car('white');
    console.log(car.toString());
    console.log(car instanceof Car);
    console.log(car instanceof Vehicle);   

    console.log("Addition");
    console.log(add(5));
    console.log(add(9,4));

userFriends('Rutvik', 'Sahil', 'Hirav', 'Mohit');
userTopFriends(...['Sahil', 'Hirav', 'Mohit']);

// IterateVar
console.log("iterateVar");
iterateVar();

// IterateLet
console.log("iterateLet");
iterateLet();

// Arrow function
const author = {
    fullName: "Bob Alice",
    books: ['Inner Calm', 'Big Shot', '400 Days'],
    printBooks() {
    this.books.forEach(book => console.log(book + ' by ' + this.fullName));
    }
};
console.log(author.printBooks());


// Parent
const childFN = parent();
childFN;