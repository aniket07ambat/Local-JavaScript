// There are two types of datatypes in JS based on 
// how data is stored in memory and how it is access.

// Primitive datatype [Call by value]
//  Primitive

//  7 types : String, Number, boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// "=="  and "===" have big difference.  
// "==="  through check[data type included]

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
const myObj = {
    name: "hitesh",
    age: 22,
}

// We can change name value even if name is on the const object.

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// typeof operator table
// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
 JavaScript is a dynamically typed language. 
This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness. */

