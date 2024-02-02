/*
////// Strings

const text = "Hello"
const text1 = "World!"

const text2 = text + " " + text1
console.log(text2);

console.log(text2.length);

console.log(text.toLowerCase());
console.log(text1.toUpperCase());
console.log(text);  // String are immetuble.

const text3 = "Programming"
console.log(text3[2]);

const text4 = "apple"
const text5 = "orange"
console.log(text4 === text5);

const text6 = "I love JavaScript!"
console.log(text6.length);
// console.log(text6.substring("JavaScript"));
console.log(text6.includes("JavaScript"));
console.log(text6.substring(7, 17));  // here 17 is excluded?
console.log(text6.indexOf("!"));


// What are string index and includeof propterties.


const text7 = "JavaScript is good"
text7.replace("good", "great")
console.log(text7);
console.log(text7.replace("good", "great"));

const text8 = " Hello "
console.log(text8.trim());
console.log(text8);

let text9 = "apple,orange,banana"
let array = text9.split(",")
console.log(array);

console.log(array.join(","));
 */

//  ////// ARRAYS   // arrays are mutable

/*
const array = ['apple', 'orange', 'banana']
console.log(array[1]);
console.log(array.length);
array.push("grape") 
console.log(array);
console.log(array.pop()) // extract and return last element
console.log(array);

let string1 = array.join(",")
console.log(string1);
console.log(array.includes("orange"));

// let array1 = ['a', 'b', 'c', 'd', 'e']
// let array2 = array1.slice(1, 4)
// console.log(array1);
// console.log(array2);

// let array3 = ['a', 'e']
// let array4 = array2 + "," + array3  // It becomes a string
// console.log(`${typeof array4} and ${array4}`);
// let array5 = array4.split(",")
// console.log(array5);

// let array6 = [5, 2, 8, 1, 4]
// console.log(array6.sort());

let array7 = ['one', 'two', 'three']
console.log(array7.reverse());

 */
// para
/////////// Functions

/*
function text(para1, para2 = 7) {
    return para1 + para2
}

console.log(text(2, 4));
console.log(text(3, 4));
console.log(text(3));

function text1(para1, para2) {
    return para1 + " " + para2
}

console.log(text1("Aniket", "Ambat"));

// Function Expression ?

// Anonymous Function ?

// Returning Object

function text3(para1, para2) {
    let obj = {
        name: para1,
        age: para2
    }
    return obj;
}

// optimised
function text3(para1, para2) {
    return {para1, para2};
}


console.log(text3("Aniket", 22));

// Callback Function: I don't understand

function text4(para1) {
    console.log(para1);

}
function callBack(para1){
    console.log(para1);
}
console.log(text4(callBack("Hell0")));

// Arrow Functions ?

function text(para1, para2 = 7) {
    return para1 + para2
}
// function text5 (para1, para2) => {
//     return para1 + para2
// }


// Resursive function

function text6(number) {
    if(number <= 0) {
        return 1;
    }
    return text6(number - 1) * number
}

// Optimesed

function text9(number) {
    return number === 0 ? 1 : n * text9(number - 1)
}

console.log(text6(3));
 */

/////////// OBJECTS

const obj1 = {
    "name A": 'John',
    age: 25 
}
console.log(obj1["name A"]);

obj1.city = "New York"
obj1.age = 45
console.log(obj1);

const obj2 = { a: 1, b: 2 } 
const obj3 = { b: 2, a: 1 }
console.log(obj2 == obj3); //  ?

const obj4 = {
    "name A": 'John',
    age: 25,
    address: {
        city: "Parbhani",
        pin: 43165
    },
    greet: () =>{
        return greeting;   
    }
    
}
 ////// What is happening in Object Method

// console.log(obj4);
// // console.log(obj4.greet());
// console.log(obj4.greet); 
// const obj5 = obj4.greet
// console.log(obj5);

delete obj4.age
console.log(obj4);

const obj6 = { x: 10, y: 20, z: 30 }
for (const key in obj6) {
   console.log(`${key}: ${obj6[key]}`);
    
}

//// Object Destructuring:

// Object from Arrays

const array1 = ['name', 'age']
const array2 = ['John', 25]

function createObj1(para1, para2) {
    const length = para1.length
    let obj7 = {}
    for (let index = 0; index < length; index++) {
        // obj7.para1[index] = para2[index] // What is problem....
        console.log(`${para1[index]}: ${para2[index]}`);
    }
    return obj7
}

const obj8 = createObj1(array1, array2)
console.log(obj8);



