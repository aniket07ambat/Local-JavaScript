let score = 400
console.log(score)

let balance = new Number(100)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(3))

const num1 = 390.4356
console.log(num1.toFixed(3))

const num2 = 123.8966
console.log(num2.toPrecision(5))   // Return a string

let num3 = 70000000
console.log(num3.toLocaleString('en-IN'))

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-3))
console.log(Math.round(4.6))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.7))
console.log(Math.max(4,5,7,3))
console.log(Math.min(4,5,7,3))

console.log(Math.random()) // Give numbers between 0 to 1 (0 and 1 included.)
console.log((Math.random() * 10) + 1) // Make sure number is greater than 0.
console.log(Math.floor(Math.random() * 10) + 1)  // Makeing sure to get min of floating numbers.

const min = 10
const max = 20

// Make sure to remember the below formula
// To make sure we always get random value above min.
let formula = Math.floor(Math.random() *(max - min + 1)) + min
console.log(formula)












