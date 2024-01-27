// Notes Things to remember.

// Exponentation
// **=
// foreach forof when to use
// conversion of int to string , string to int







const product = {
    productName: "Parker(Black)",
    rating: 4,
    comments: 7002,
    productPrice: 270,
}

const profile = {
    profile_id: "shradhakapra",
    profileName: "Shradha Kapra",
    workInCompany: "Apna College",
}

console.log(product);
console.log(profile);

// ternary operators syntax:  condition ? true output : false output
let age = 15
age >= 18 ? console.log("Vote") : console.log("First be adult.")

// let num = prompt("Enter a number: ")
// console.log(num);
// if(num % 5) {
//     console.log(num % 5);
//     console.log("Not a multiple");
// } else {
//     console.log(num % 5);
//     console.log("A multiple of 5");
// }

// Code to give grades to students according to their scores.
// let scores = 79 
// switch (scores) {
//     case 80 >= scores <= 100:
//         console.log("Your grades: A");
//         break;
//     case 70 >= scores <= 79:
//         console.log("Your grades: B");
//         break;
//     default:
//         console.log("You FAIL");
//         break;
// }

// The switch statement is not suitable for this scenario because it doesn't support range conditions in the case statements.

// for(let i = 1; i <= 100; i++) {
//     if(i % 2 == 0) console.log(i);
// }

// console.log("Let's play a Game. Guess the number I am thinking in my head");
// let num1 = prompt("Enter a Number: \nHint: Its between 0 to 9")
// if(num1 == 5) {
//     console.log("Your are right!");
// } else {
//     prompt("Your are WRONG!\nCome on, it's between 4 to 7")
//     // console.log("Your are WRONG!\nCome on, it's between 4 to 7");
// }

// console.log("Let's play a Game. Guess the number I am thinking in my head");
// let num;
// while(num != 5) {
//     num = prompt("Enter a Number: \nHint: Its between 0 to 9")
//     if(num == 5) break;
// }

// https://chat.openai.com/share/0f465a03-02ed-4828-916a-8e9440d396df

// average marks

let myArray =  [85, 97, 44, 37, 76, 60]

let total = myArray.reduce( (acc, currVal) => acc + currVal, 0)
let averageMarks = total/myArray.length
console.log(averageMarks);

// Calculate final price
// Final Price = Original Price−(Original Price×Discount Percentage)
let pricesArray =  [250, 645, 300, 900, 50];
let discount = 10; // numeric value for the discount percentage

let finalPriceArray = pricesArray.map((price) => {
    return price - (price * discount / 100);
});

console.log(finalPriceArray);

// I used filter here my code was wrong check this why map here is best option
// https://chat.openai.com/share/cf188f08-24bb-4b8f-8ed6-67d9c7f47ea0

// Array methods

let myCompanies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
myCompanies.shift();
console.log(myCompanies);
myCompanies.splice(1, 1, "Ola")
console.log(myCompanies);
myCompanies.push("Amazon")
console.log(myCompanies);

// Functions

let name = "Microsoft"
let count = 0
function numberofVowels(name) {
    for (let i = 0; i < name.length; i++) {
        // console.log(ch);
        let ch = name[i]
        // if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o'|| ch == 'u' )
        //     count++;        
        console.log(ch);
    }
}

numberofVowels(name)
    
console.log(count);
    
    
    
    
    




















