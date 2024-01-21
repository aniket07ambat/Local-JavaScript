// Arrays

const myArray1 = [1, 2, 3, 4, 5, 6, "Aniket", true]
console.log(myArray1[0])
console.log(myArray1.length)
console.log(typeof myArray1)

const myArray2 = new Array(4, 5, true, "abc string")
console.log(myArray2[3])
console.log(typeof myArray2)

// Difference between Array Literal and Constructor array
// https://chat.openai.com/share/d88e4b0b-1add-47d7-8650-4d189b45d017

/* 
myArray2 = ["New", "Array"];
console.log(myArray2)
ERROR We use const, we can't reassign.
We can modify myArray2 using push, pop, unshift, etc
// https://chat.openai.com/share/bfb87dbc-7e83-44e9-adcc-979a27849ffe
*/

// push and pop
myArray1.push(7)
console.log(myArray1)

myArray1.pop()
console.log(myArray1)

// unshift and shift
myArray1.unshift("Ambat")  // Add at first index of array
console.log(myArray1)

myArray1.shift()           // Removes at first index of array
console.log(myArray1)

// includes and indexOf

console.log(myArray1.includes(6))  // Finds if element is present or not.
console.log(myArray1.includes("Sam")) // OUTPUT: false

console.log(myArray1.indexOf(5))   // Finds index of element 
console.log(myArray1.indexOf("Sam"))  // If not finds then return -1.

// join

console.log(myArray2)
const myArray3 = myArray2.join() // .join() adds all elements of array into string
console.log(myArray3)
console.log(typeof myArray3)
console.log(typeof myArray2)

// slice and splice

let newArray = [1, 2, 3, 4, 5, 6]
console.log(newArray)

console.log("A: " , newArray)

let newArray1 = newArray.slice(1, 3)  // Gives copy of section of array (start, end). end is not included.
console.log(newArray1)

console.log("B: ", newArray)

let newArray2 = newArray.splice(1,3)  // splice removes elements from original array.
console.log(newArray2)
console.log("C:", newArray)





