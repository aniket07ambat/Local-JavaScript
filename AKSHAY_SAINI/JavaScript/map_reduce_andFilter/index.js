// map

// const array = [1,2,3,4,5,6]

// function double(x){
//     return x * 2
// }

// function triple(x){
//     return x * 3
// }

// function binery(x){
//     return x.toString(2);
// }

// const answer = array.map(binery)
// console.log(answer);

// Modifications 1.1

// const answer = array.map(function binery(x){
//     return x.toString(2);
// })

// M: 1.2

// const answer = array.map( (x) => {
//     return x.toString(2)
// })
// console.log(answer);

// M: 1.3

// const ans = array.map( (x) => x.toString(2))
// console.log(ans);

// // Maps are mapping each and every element according to given logic and return array

// filter
// What this philtre does actually is filter the array Example, if we want only even or odd numbers present in the array, it filter it and return new array.

// const array1 = [5, 4, 9, 6, 2, 11]

// const oddNumbers = array1.filter( (num) => num % 2 !== 0 )
// console.log(oddNumbers);

// const greaterNumber = array1.filter( (num) => num > 6)
// console.log(greaterNumber);


// // Reduce
// // Reduce is used when we have to take the whole values of array and return a single value.

// const array2 = [5, 4, 9, 6, 2, 11]

// const output2 = array2.reduce( function (acc, currVal) {
//     acc = acc + currVal
//     return acc
// }, 0)

// console.log(output2);

// // // M: 1.1

// const output = array2.reduce((acc, currVal) => acc + currVal, 0)
// console.log(output);

// // Find max value in an array

// const array3 = [5, 4, 9, 6, 2, 11]

// const output3 = array3.reduce( function (acc , currVal) {
//     if(acc < currVal) acc = currVal
//     return acc
// }, 0)

// console.log(output3);

///////////////  Understand with this tricky question, When to use map, reduce and filter


const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 },
]

// // When we want to print or iterate through whole array.
// // Map

const output4 = users.map( (key) => key)
console.log(output4);

const output5 = users.map( (key) => key.firstName + " " + key.lastName)
console.log(output5);



// // Now what we want is =    [age : how many people]
// // ex. 26: 2, 75: 1, 50: 1
// // We are taking this in form of object
// // {26: 2, 75: 1, 50: 1}


// // Reduce

const output6 = users.reduce( (acc, currVal) => {
    if(acc[currVal.age]) {
        acc[currVal.age] = ++acc[currVal.age]
    } 
    else {
        acc[currVal.age] = 1
    }
    return acc;
}, {})

console.log(output6);


// // Now we want to find out how many users have a particular age.

// // Filter
const particular_age = users.filter( (item) => item.age > 45)
console.log(particular_age);

// // Find out the first name of all the people whose age > 30

const people = users.filter( (key) => key.age > 30).map( (item) => item.firstName)
console.log(people);

// // Above is chaining of filter and map.
// // First filter return array of age > 30 then map gives firstName.

// // Now can we do above problem using reduce.

const output8 = users.reduce( (acc, currVal) => {
    if(currVal.age > 30) {
        acc.push(currVal.firstName)
    }
    return acc
}, [])






