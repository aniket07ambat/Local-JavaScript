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
















