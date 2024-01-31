// this : refer to current context 
// Context means Kiske Bareme Baat Ho Rahi Hai
///*
const user = {
    userName: "Aniket",
    price: 999,
    welcomeMessage: function() {
        // console.log(`${this.userName}, welcome to website.`)
        console.log(this)
    }
}
user.welcomeMessage()
user.userName = "Sam"
console.log(user.userName)
user.welcomeMessage()

console.log(this)  // This will show window fuction in Browser and {} empty Object or global Object in node.js
// https://chat.openai.com/share/7c91e8a0-9185-402e-b592-b0ba583633c1

//*/

function chai() {
    // console.log(this)
    let userName = "Hitesh"
    console.log(userName)
    console.log(this.userName) // Gives undefined 
    // This not in function we use ${this.userName} like this in Objects
}

chai()

// Arrow functions
const myArray = () => {
    let userName = "Aniket"
    console.log(userName)
    console.log(this.userName) // Gives undefined 
    
}

myArray()

// Normal syntax

const answer = function addOne(num1) {
    return num1 + 1
}

// Array function syntax
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo("4", 5))

// implicit return means mai man leta hu.
// implicit return syntax


const subtractTwo = (num1 , num2) => (num1 - num2)
const result = subtractTwo(5, 4)
console.log(result)
console.log(subtractTwo(5, 2))

// implicit return used in React so remember
// if in function used {} means wrap in braces "return is MUST"
// if () means wraps in parathesis no need to write return keyword. 

// remember this small basic things this will help you 

// If we want return Object
const multiplyTwo = (num1, num2) => ({userName: "Aniket"})

// Different syntaxes used in array 
const newArray = [233, 554, 452, 2542]
/*
newArray.forEach(function () { })  // These also syntax
newArray.forEach(() => { })        // Arrow Function syntax
newArray.forEach(() => ())         // implict return syntax
 */
// Explict means Apko express karna padhega.