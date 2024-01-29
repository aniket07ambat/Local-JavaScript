// https://chat.openai.com/share/146b891d-1cb5-4d85-b0b8-bbaba73acf43

const userEmail = " "
// Here try=  "", " ani", " ", []
if(userEmail) {
    console.log("Excute.")
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// true, " ", [], {}, function(){}
// any array, object, function are truthy values.

// Recommended practices for 
// Array
let myArray = [1, 3 , 5, 67, 4]

if(myArray.length === 0) {
    console.log("Array is empty.")
} else {
    console.log("Array is not empty")
}

// Objects

const myObject = {
    userName: "Aniket",
    age: 22,
}

if(Object.keys(myObject).length) {
    console.log("Here we get keys in form of array.")
}

const emptyObj = {}

if (Object.values(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Terniary Operator "?"

// condition ? true : false

const ice_packPrice = 100

ice_packPrice <= 80 ? console.log("Ice pace is affordable") : console.log("Ice pack is not affordable.")

// Don't use parathesis '()' in condition

// Nullish Coalecing Operator '??' 
// https://chat.openai.com/share/12dbbc70-cbcc-4c4d-b6e1-f4a66e348561

// It ensures that your application doesn't break or behave unexpectedly when dealing with data retrieved from a database that might contain null or undefined values.

let num1;
let num2;
let num3;
let num4;

num1 = 5 ?? 10
num2 = null ?? 10
num3 = undefined ?? 5
num4 = null ?? 4 ?? 12

console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)


