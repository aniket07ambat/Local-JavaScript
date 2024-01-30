const name = "Aniket"
const repoCount = 9

// console.log(name + repoCount + " Value")  Not modern syntax.

// `` => backticks
// String interPolation 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)  // Modern Practice.

let message = 'Hello, World!'
console.log(message.length);
console.log(message.charAt(8));
console.log(message.indexOf("!"));

let newMessage = message.replace("Hello", "Bye")
console.log(message);
console.log(newMessage);

message = '   Hello, World!   ';
console.log(message.trim());
console.log(message);  // don't change original string

let result = message.trim()
console.log(result);
console.log(result.toLowerCase());
console.log(result.toUpperCase());
console.log(result.toLocaleLowerCase());

console.log(result.includes("World"));

let newstring = result.replace('llo,', '')
console.log(newstring);

let newString1 = result.split(',')
console.log(newString1);

// syntax for split: string.split("delimiter")

// Using split and join methods:

// You can split the string into an array, remove unwanted elements, and then join it back into a string

console.log(result);
// I want to remove ','

let newString2 = result.split('') // I split and make an array.
console.log(newString2); 
let newString3 = newString2.filter( (char) => char !== ',')  // removing ','
console.log(newString3);
let finalString = newString3.join("")
console.log(finalString);

// loops for string

let str = "Hello, World!";
for (let [char, index] of str) {
    // Access each character using the char variable
    console.log(`${char} and its index: ${index}`);
}


// let arr = [1,243,2,5,4,3,43,3]

// for (const [num, index] of arr) {
//     console.log(num, index);
// }


// let obj = {
//     a: "aniket",
//     b: "Ambat",
// }


// for (const [key, Value] in obj) {
   
//     console.log(key, Value);    
    
// }

let arr = [1,243,2,5,4,3,43,3]
let answer = arr.entries()
console.log(answer);


// See this 
// https://chat.openai.com/share/8510261e-1d0d-4030-8a9e-1aedb42223ef


