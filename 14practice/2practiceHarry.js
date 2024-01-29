// not defined : means javascript don't allocate memory.

// undefined : is like a placeholder, telling us is there any value assinged or not.

// We can invoke functions before function declaration just because hoisting. [Remember JS Excution context.]

// When Functions are invoke execution context is created

// Every Execution context creates its own memory, separate memory they are Independent of each other.


// Harry's practice set
// Chapter 2

let age = 30;
if(10 >= age  && age <= 20) {
    console.log(age);
    console.log("age is in between 10 and 20");
} else {
    console.log("Not between.");
}

// program to check if a number is divisible by 2 and 3

let num = 8
// if(num % 2 == 0 && num % 3 == 0) {
if(num % 2 == 0 || num % 3 == 0) {
    console.log("divisible");
} else {
    console.log("not divisible");
}

// ternery operator

let driving_age = 25
driving_age >= 18 ? console.log("You can drive") : console.log("You can not drive");

////////// Chapter 3: Loops and Functions
console.log("for loop");
let myArray = [1,2,3,4,5,6]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index] * 10;
    myArray[index] = element
}
console.log(myArray);

///////  for in loop
console.log("for in loop");
// t's important to note that using for...in to iterate over arrays is not always recommended, as it can also iterate over inherited properties. In such cases, for...of or Array.forEach might be more appropriate for arrays.

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

const greeting = 'Hello';
for (let charText in greeting) {
    console.log(`Character at index ${charText} is ${greeting[charText]}`);
}

///////  for of loops great for arrays or other iterable collections.
console.log("for of loop");
const colors = ['red', 'green', 'blue'];

for (const color of colors) {
    console.log(color);
}

for (const greet of greeting) {
    console.log(greet);
}


/////////// for each method only for an array.
console.log("for each loop only for an array.");
const myArray3 = [1,2,3,4,5]

myArray3.forEach( function (number, index) {
    console.log(`${number} its index: ${index}`)
} )

// loops file 
// https://chat.openai.com/share/1febf373-af52-4db5-9ab4-6b2123e7ba93

// Practice set 3 
console.log("Practice set")
const marksObj = {
    Rohan: 56,
    Aniket: 65,
    Sam: 65
}

for (const marks in marksObj) {
    console.log(`Marks of ${marks}: ${marksObj[marks]}`);
}

///////   Chap 4:   STRINGS
console.log("STRINGS STARTING");
// There are escape sequences like 
// backslash:   /  [used if we want to add quotes]
// tab:  \t  
// newline:  \n
// carriage return:  \r 

// String literls
console.log(`This is string 'literls' using "backtick" `);
// We can use single quotes and double quotes easily.







































