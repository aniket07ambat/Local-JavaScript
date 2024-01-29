// We can create objects using literals and constructor.

// If we create Objects using constructor then it will be "singleton".

// Now creating Object using literals.

// Objects come in pairs of key and value.
// In Objects below name, email, age that is Keys are automatically converts into string.

// Declaring symbol into Objects
const mySym = Symbol("key1")

const jsUser = {
    name: "Aniket",
    "full name": "Aniket Ambat",
    [mySym]: "myKey1",
    email: "aniket@gmail.com",
    age: 22,
    isLoggedIn: true,
    number: 9021,

}

console.log(jsUser.age)
console.log(jsUser["email"])

// console.log(jsUser.fullname)  this is an error we can't use .[dot] at string.
console.log(jsUser["full name"])

console.log(jsUser[mySym])

// How to change values
jsUser.email = "ambat@gmail.com"
console.log(jsUser)

// Using freeze
// Object.freeze(jsUser)  // Values can't change in Objects after using freeze.
//jsUser.age = 21
//console.log(jsUser)

// Now lets add a Function in Objects

jsUser.greeting1 = function(){
    console.log("Hello JS User")
}
console.log(jsUser.greeting1)
console.log(jsUser.greeting1())

jsUser.greeting2 = function(){
    console.log(`Hello, ${this.name} are you using backtick?`)
    console.log(`Hello, your number is ${this.number}`)
}
console.log(jsUser.greeting2())

// Generally we use (jsUser.name) like syntax instead of (jsUser["name"]).
// Remember special cases like symbol or "full name", here we have to use baracket[].
// For Symbol [mySym]




