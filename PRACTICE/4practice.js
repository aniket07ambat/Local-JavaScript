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









