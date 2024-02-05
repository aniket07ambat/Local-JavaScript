const array = [1,2,3,4,5,6]
// // Strings

// const text = "Hello World"

// const text1 = text.split(" ").reverse().join(" ")
// console.log(text1);


// function countVowels(str1) {
//     let count = 0
//     str1.toLowerCase().split("").forEach(element => {
//         if(element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u') {
//             count++;
//         }
//     });
//     return count;
// }

// const num = countVowels("Aniket")
// console.log(`No. of vowels: ${num}`);


// //  Q. Implement a function that performs basic string compression   using the counts of repeated characters. For example, the string "aaabbbccc" should be compressed to "a3b3c3".

// let  resultstr= ""
// const inputstr3 =  "aaabbbccc"
// let currentChar = inputstr3[1]
// let count = 1;
// for (let index = 1; index < inputstr3.length; index++) {
//     if(inputstr3[index] === currentChar) {
//         count++
//     }
//     else {
//         resultstr += currentChar + count
//         currentChar = inputstr3[index]
//         count = 1
//     }
// }
// resultstr += currentChar + count
// resultstr.length < inputstr3.length ? console.log(resultstr) 
//                         : console.log(inputstr3);;
// console.log(resultstr.length);


// // Q.  Write a function that checks if two words are anagrams of each other.

// const array1 = [1,2,3]
// const array2 = [3,2,1]
// const array3 = array2.sort()
// console.log(array3);
// // if(array1 === array2) console.log("Yes equal");  // Not equal.
// if(array1 === array3) console.log("Yes equal"); // Not equal
// // What to do to see arrays are equal or not?

// const str5 = "listen"
// const str6 = "silent"
// console.log(str5.split("").sort().join(","));
// console.log(str6.split("").sort().join(""));
// if(str5.split("").sort().join("") === str6.split("").sort().join("")) {
//     console.log("I am Anagram");
// } else {
//     console.log("I am not Anagram");
// }


// // Write a function that capitalizes the first letter of each word in a sentence.

const str6 = "aniket is web developer."
let str7 = str6[0].toUpperCase()
console.log(str7);
let char;
for (let index = 1; index < str6.length; index++) {
    if(str6[index] ==! " ") {
       str7 += str6[index]
    }
}














