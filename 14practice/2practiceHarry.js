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

let myArray = [1,2,3,4,5,6]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index] * 10;
    myArray[index] = element
}
console.log(myArray);

///////  for in loop

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

const colors = ['red', 'green', 'blue'];

for (const color of colors) {
    console.log(color);
}

for (const greet of greeting) {
    console.log(greet);
}


// not defined : means javascript don't allocate memory.

// undefined : is like a placeholder, telling us is there any value assinged or not.

// We can invoke functions before function declaration just because hoisting. [Remember JS Excution context.]

// When Functions are invoke execution context is created

// Every Execution context creates its own memory, separate memory they are Independent of each other.