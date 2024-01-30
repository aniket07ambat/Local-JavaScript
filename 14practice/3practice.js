// Factorial of a number
/*
// for loop
let fact = 1;
let num1 = 6
for (let i = 1; i <= num1; i++) {
    // // let fact = 1;
    // fact *= i
    console.log(i);
    fact = fact * i;

}
console.log(fact);

// Now lets use reduce
// reduce is used for array.

const myArray = [1, 2, 3, 4, 5, 6];

const factorial = myArray.reduce( (acc, currVal) => {
   return acc * currVal
}, 1)

const factorialOF = myArray.reduce( (acc, currVal) => acc * currVal , 1)

console.log(factorial);
console.log(factorialOF);

 */

// Second approch for reduce method.

// We want an array right from 1 to given number so use below instead of for method

// Making an array using Array.from
// https://chat.openai.com/share/0681aaaf-cda9-4560-8eee-5347ce50e4a5
/*
function factorial1(number) {  // number = 7
    let arr = Array.from(Array(number).keys())
    console.log(arr);  // 0, 1, 2, 3 , 4, 5, 6
}

// Modification: Include 7

function factorial2(number) {  // number = 7
    let arr = Array.from(Array(number + 1).keys())
    console.log(arr);  // 0, 1, 2, 3 , 4, 5, 6, 7
}

// Modification: Exclude 0

function factorial3(number) {  // number = 7
    let arr = Array.from(Array(number + 1).keys())
    let ans = arr.slice(1,)  // 1, 2, 3 , 4, 5, 6, 7
    console.log(ans);
}

function factorial_real_ans(number) {  // number = 7
    let arr = Array.from(Array(number + 1).keys())
    let real_ans = arr.slice(1,).reduce((accumulator, currVal) => accumulator * currVal, 1)  
    console.log(real_ans); 
}

factorial1(7)
factorial2(7)
factorial3(7)

factorial_real_ans(6)

// Here we don't handle edge cases like 
// factorial_real_ans(0) or negative numbers.

*/

let a = [1,23,43,4,3]
let b = a.splice(0, 3)
console.log(b);















