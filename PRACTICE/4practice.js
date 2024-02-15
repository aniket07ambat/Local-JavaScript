// // Fix the Bug!

// const company = "Nike"
// const tagline = "Just do it"

// const user = {
//     company: "Nike",
//     tagline:  "Just do it"
// }

// Object.entries(user).forEach( ([key, value]) => {
//     console.log(`Key: ${key} and its value: ${value}`);
// })


// export const product = {
//     id: 12345,
//     name: "Book",
//     price: 250,
//     isAvailable: true
// }


// function createCounter(n) {
// 	// return a function
//     let counter = n
// 	return  () => {
// 		console.log(`${counter++}`)
// 	}
// }

// // Sample Test Cases

// const counter = createCounter(10);
// console.log(counter()); // 10
// console.log(counter()); // 11
// console.log(counter()); // 12

//  const missingNumber = function (nums) {
//     nums.sort()
//     for (let index = 0; index < nums.length; index++) {
//         if(nums[index] !== index) {
//             return index
//         }
//     }

// };

// const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
// console.log(missingNumber(nums)); // returns 2

// const createHelloWorld = function () {
// 	return function (...args) {
// 		return console.log(`"Hello World"`)
// 	}
// }


// const f = createHelloWorld();
// console.log(f("Hi", 123, { a: 1, b: 2 }));  

// async function getJoke() {
//     try {
//         const response = await fetch("https://official-joke-api.appspot.com/random_joke")
//         const Joke = await response.json()
//         return Joke
//     } catch (error) {
        
//         return error
//     }
    
// }

// getJoke()
// .then((data) => {
//     console.log(`setup: ${data.setup}`);
//     console.log(`punchline: ${data.punchline}`);
// })
// .catch( (error) => console.log("error"))


// const numbers1 = [5, 3, 8, 7, 4, 2];
// numbers1.sort((a,b) => a - b)
// console.log(numbers1);  // [ 2, 3, 4, 5, 7, 8 ]

// function getMiddleValue(arr) {
//     arr.sort()
//     if(arr.length % 2 == 1) {
//         return arr[Math.floor(arr.length/2)]
    
//     } else {
//         // even
//         let index = arr.length/2
//         const mid1 = arr[index]
//         const mid2 = arr[index - 1]
//         return (mid1 + mid2)/2
//     }
// }
// console.log(getMiddleValue(numbers1))

// const numbers1 = [5, 3, 8, 7, 4, 2];

// function addAndSort(array, element) {
//     // let newArray = [...array]
//     // newArray.push(element)
//     // return newArray.sort()
//     return [...array, element].sort()
// }
// console.log(addAndSort([25, 27, 21, 16], 19)); // Expected Output: [16, 19, 21, 25, 27]

// console.log(addAndSort(numbers1, 1));


// function shouldAlertOwner(durationInWarehouse, temperature) {
// 	const CRITICAL_TEMPERATURE = 30; // °C
// 	const SECONDARY_TEMPERATURE = 25; // °C
// 	const CRITICAL_DURATION = 7; // Days

// 	// return (
// 	// 	(temperature > CRITICAL_TEMPERATURE &&
// 	// 		durationInWarehouse > CRITICAL_DURATION) ||
// 	// 	temperature > SECONDARY_TEMPERATURE
// 	// );
//     return ( (temperature > CRITICAL_TEMPERATURE)  || 
//              ((durationInWarehouse > CRITICAL_DURATION) &&  (temperature > SECONDARY_TEMPERATURE)))  
// }

// // Sample Tests

// console.log(shouldAlertOwner(5, 26)); // Expected Output: false
// console.log(shouldAlertOwner(8, 26)); // Expected Output: true
// console.log(shouldAlertOwner(8, 32)); // Expected Output: true


//  function updateTemplateLiteral(petName, placeholder = `${NAME}`) {
// 	const reminderTemplate =
// 		`${NAME} is due for another visit. Please call us so we can set up a new appointment. We look forward to seeing you and ${NAME} soon.`;
// 	return reminderTemplate.replace(placeholder, petName);
// }
// // Test your code
// console.log(updateTemplateLiteral("Leo"));
// // console.log(updateTemplateLiteral("Stella", "{NAME}"));

//  function updateTemplateLiteral(petName, placeholder = "{NAME}") {
// 	const reminderTemplate =
// 		"{NAME} is due for another visit. Please call us so we can set up a new appointment. We look forward to seeing you and {NAME} soon.";
// 	return reminderTemplate.replaceAll(placeholder, petName);
// }
// // Test your code
// console.log(updateTemplateLiteral("Leo"));
// console.log(updateTemplateLiteral("Stella", "{NAME}"));

// function sumAll(...numbers) {
//     let total = 0
//     for(const number of numbers) {
//         total += number
//     }
//     return total
// }


// console.log(sumAll(1, 2, 3)); // Output: 6
// console.log(sumAll(4, 5, 6, 7)); // Output: 22

// export function addNumbers(num1, num2) {
//     return num1 + num2
// }

// export default function multiplyNumbers(num1, num2) {
//     return num1 * num2
// }

//  const sumOfEvens = (arr) => {
// 	// Write your code here
//     let total = 0
    
//     arr.forEach(element => {
//         if(element % 2 === 0 && element > 0) {
//              total += element
//         } 

//     });
//     if(arr.length === 0 ) {
//         return 0
//     } else {
//         return total; 
//     }
// }
// console.log(sumOfEvens([1, 1, 1, 2, 2, 2, 3, 3, 3])); // Output: 6
// console.log(sumOfEvens([]))
// console.log(sumOfEvens([-5, 0, 5, -4, 1, 6, -3, 2, 7]));


// Challenge #1: Create two variables "num1" and "num2" and assign a valid numbers to them
// const num1 = 3
// const num2 = 4

// // Challenge #2: Create a variable sum and assign the sum of num1 and num2 to sum variable
// const sum = num1 + num2
// // Challenge #3: Create a variable "product" and assign the product of num1 and num2 to product variable
// const product = num1 * num2
// // Challenge #4: Create two variables "flag1" and "flag2" and assign a valid boolean value to them
// const flag1 = false
// const flag2 = true
// // Challenge #5: Create a variable "combinedFlag" which holds the logical and value of "flag1" and "flag2" variables
// const combinedFlag = flag1 || flag2
// console.log(combinedFlag);


const randomInRange = (min, max) => {
	// Write your code here
	// return (Math.floor((Math.random() * max - min) + min)) this is max exclusive.
	return Math.floor(Math.random() * max - min + 1) + min  // This is max included.
}
const randomInt = randomInRange(1, 10);
console.log(randomInt)

/*

function fetchData() {
	// Simulates fetching data
	return Promise.resolve([10, 20, 30, 40, 50]);
}

function processItem(item) {
	// Simulates processing each item
	return new Promise((resolve) => resolve(item * 2));
}

async function scheduleLogging(data) {
	for (var i = 0; i < data.length; i++) {
		setTimeout(async function () {
			let listItem = document.createElement("li");
			listItem.textContent = data[i];
			document.body.appendChild(listItem);
		}, 500 * i);
	}
}

async function init() {
	const data = await fetchData();
	scheduleLogging(data);
}

// Start executing the code
init();

 */







