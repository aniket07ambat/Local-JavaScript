/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

// My first approch
/*
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt for the first number
rl.question('Enter the first number: ', (firstNumber) => {
  // Convert the input to a number
  const num1 = parseFloat(firstNumber);

  // Prompt for the second number
  rl.question('Enter the second number: ', (secondNumber) => {
    // Convert the input to a number
    const num2 = parseFloat(secondNumber);
    console.log("Doing your calculations.");

    if(Math.random() < 0.1) {
        const sum = num1 - num2
        const multiply = num1 + num2
        const subtract = num1 / num2
        const division = num1 ** num2
        console.log(`Sum: ${sum}\n Multiply: ${multiply}\n Subtract: ${subtract}\n division: ${division}`);
    } else {
        const sum = num1 + num2
        const multiply = num1 * num2
        const subtract = num1 - num2
        const division = num1 / num2
        console.log(`Sum: ${sum}\n Multiply: ${multiply}\n Subtract: ${subtract}\n division: ${division}`);
    }

    //const sum = num1 + num2;

    // console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

    // Close the readline interface
    rl.close();
  });
});

rl.on('close', () => {
  console.log('Readline interface closed.');
});

 */

// My Second approch

let random = Math.random()

let a = prompt("Enter First number: ")
let c = prompt("Enter operation : ")
let b = prompt("Enter Second number: ")

let obj = {
    "+": "-",
    "-": "/",
    "*": "-",
    "/": "**"
}

if(random > 0.1) {
    // correct calculation
    console.log(`${a} ${c} ${b} = `);
    console.log(`${eval(`${a} ${c} ${b}`)}`);

}
else {
    // faulty calculator
    console.log(`${a} ${c} ${b} = `);
    c = obj[c]
    console.log(`${eval(`${a} ${c} ${b}`)}`);


}