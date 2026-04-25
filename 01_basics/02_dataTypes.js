"use strict";// This line enables strict mode in JavaScript, which helps catch common coding mistakes and prevents the use of certain features that are considered bad practice.

//data types in JavaScript
//JavaScript has several data types, including:

//1. Primitive data types: These include string, number, boolean, null, undefined, and symbol.
let name="Rajiv";           // This is a string data type.
console.log("type of name:", typeof name);              // This will print "string"
console.log("type of name:", typeof(name));              // This will print "string"
let age=30;                 // This is a number data type.
console.log("type of age:", typeof age);                // This will print "number"
let isMarried=false;        // This is a boolean data type.
console.log("type of isMarried:", typeof isMarried);    // This will print "boolean"
let address=null;           // This is a null data type.
console.log("type of address:", typeof address);        // This will print "object" (null is considered an object in JavaScript)
let phoneNumber;            // This is an undefined data type because it has not been assigned a value yet.
console.log("type of phoneNumber:", typeof phoneNumber); // This will print "undefined"
let uniqueId=Symbol("id");  // This is a symbol data type, which is a unique and immutable value.
console.log("type of uniqueId:", typeof uniqueId);       // This will print "symbol"

//2. Non-primitive data types: These include objects, arrays, and functions.
let person={                // This is an object data type, which is a collection of key-value pairs.
    name:"Rajiv",
    age:30,
    isMarried:false
};
console.log("type of person:", typeof person);          // This will print "object"

let numbers=[1, 2, 3, 4, 5]; // This is an array data type, which is a list of values.

function greet(){             // This is a function data type, which is a reusable block of code that performs a specific task.
    console.log("Hello, World!");
}
console.log("type of greet:", typeof greet);          // This will print "function"
greet(); // This will call the greet function and print "Hello, World!" to the console.

// This will print the variables in a table format for better visualization.
console.table({name, age, isMarried, address, phoneNumber, uniqueId, person, numbers, greet}); // This will print the variables in a table format for better visualization.