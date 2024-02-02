/*
// JavaScript function that reverses a number.
// Example number = 32243;
// Expected Output : 34223

let number = 12345

// My wrong code
// function reverseNumber(number) {
//     let ans = 0;
//     let i = 0;
//     while(number > 0) {
//         let digit = number%10
//         ans = ans * (10 ** i) + digit
//         number = number/10
//     }
//     return ans;
// }

// CORRECTION: 
function reverseNumber(number) {
    let ans = 0;
    while(number > 0) {
        let digit = number%10
        ans = ans * 10 + digit
        number = Math.floor(number/10)
    }
    return ans;
}

let answer = reverseNumber(number)
console.log(answer);

 */

// Reverse a number

/*
// Does array has reverse property?
let array = [1,2,3,4,5,6,7]
console.log(array.reverse());

// Can we convert string to array?
let text = "aniket"
let array1 = text.split("")
console.log(array1);

// Can we convert array to string?
let text1 = array1.join("")
console.log(text1);

// Can we convert number to string?
let number1 = 1235767
number1 = number1 + ""
console.log(number1);

let number = 12345

function reverseNumber(num) {
    // let text = "" + num
    // console.log(typeof text);
    num = num + ""
    return num.split("").reverse().join("");
}

console.log(typeof reverseNumber(number));

// Can we convert string to number

// Approch 1
let str = "123";
let num = parseInt(str)
console.log(num);

// Approch 2
let num1 = Number(str)
console.log(num1);

// Approch 3
// Using the unary plus (+) operator:

let str2 = "123";
let number2 = +str2;
console.log(number2); // Output: 123

 */

////////// Ques.

// Write a JavaScript function that checks whether a passed string is a palindrome or not?

const text = "kaak"

function check(str) {
    let length = str.length
    let half = Math.floor(length/2)
    if(length == 1 || length == 0) return console.log("Palindrome");
    if(length % 2 == 0) {
        console.log(`half is ${half}`);
        let new_str = str.split(0, half-1)
        console.log("Here");
        console.log(new_str);
        console.log(str);
        console.log("Here");
        return new_str.join("") === str 
    } else {
        // let new_str = str.split(0, )
        return str.slice(0, half) === str.slice(half + 1)
    }
}

const check_if = check(text);
console.log(check_if);

// str.slice(0, half) === str.slice(half + 1)
console.log(text.slice(0, 2))
console.log(text.slice(3));

const text2 = "kaak"
let str3 = text2.split(0, 1)
console.log(str3);





