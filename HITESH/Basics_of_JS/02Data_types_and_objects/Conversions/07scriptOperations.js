// let value = 3
// let negativeValue = -value
// console.log(value)
// console.log(negativeValue)

// // console.log(2+2);
// // console.log(2-2);
// // console.log(2*2);
console.log(2**3);
// // console.log(2/3);
// // console.log(2%3);
// // console.log(5 % 4)


// let str1 = "Hello"
// let str2 = " Aniket"
// let str3 = str1 + str2
// console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");   // write readable and clean code.

console.log(+true);
console.log(true);
// console.log(true++);  Gives an error.

console.log(+false)
console.log(false)

console.log("")
console.log(+"");

// In JavaScript, when you use the unary plus operator (+) on an empty string (""), it results in 0. This is due to the automatic type coercion that occurs in JavaScript.

// This is because the empty string ("") is treated as a falsy value when used in a numeric context, and when converted to a number, it becomes 0.

// 
let a = 5;
let b = 10;

// Prefix Increment in Assignment
let result1 = ++a + b;
console.log(`Prefix Increment: result1 is ${result1}`);
// Output: Prefix Increment: result1 is 16

// Postfix Increment in Assignment
let result2 = a++ + b;
console.log(`Postfix Increment: result2 is ${result2}`);
// Output: Postfix Increment: result2 is 16

console.log(`Updated values: a is ${a}, b is ${b}`);
// Output: Updated values: a is 7, b is 10
