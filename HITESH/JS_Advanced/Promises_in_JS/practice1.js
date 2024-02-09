/* 
/// Promises

// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({userName: "Aniket", age: 32})
//     }, 2000)
// }) 

// promiseOne.then(function (user) {
//     console.log(user.userName);
// })
// }).then(() => {
//     console.log(userName);
// }).catch( () => console.log("Error"))

// const promiseTwo = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         // let error = false
//     let error = true
//     if(!error) {
//         resolve({userName: "Aniket", age: 32})
//     } else {
//         reject("Error")
//     }
//     }, 2000)
// })

// promiseTwo.then(function (user) {
//     console.log(user);
// }).catch(function (error) {
//     console.log(error);
// }).finally(function () {
//     console.log("The promise is either resolved or rejected.");
// })

// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         // let error = true
//         let error = false
//         if(!error) {
//             resolve({userName: "Aniket", password: 2232})
//         } else {
//             reject("Error: Something went wrong.")
//         }
//     }, 1000)
// })

// // async function comsumePromise1() {
// //     const response = await promiseFive
// //     console.log(response);
// // } Not good code

// async function comsumePromise1() {
//     try {
//     const response = await promiseFive
//     console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// comsumePromise1()


// async function GETgithubInfo() {
//     try {
//         const response = await fetch("https://api.github.com/users/aniket07ambat")
//         console.log(typeof response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// GETgithubInfo()

// fetch("https://api.github.com/users/aniket0722ambat")
// .then(function (response) {
//     return response.json()
// })
// .then(function (data) {
//     console.log(data);
// })
// .catch((error) => console.log("E: ", error))
// .finally(() => console.log(" promise is either resolve or rejected."))

*/

/*
// Objects

// function sumByFour(num) {
//     return num + 4
// }

// sumByFour.power = 5
// // console.log(sumByFour.power);

function createUser(userName, age) {
    this.username = userName
    this.age = age
}

createUser.prototype.increment = function () {
    this.age++
}

createUser.prototype.printMe = function() {
    console.log(`Age of ${this.username} is ${this.age}`);
}

const user1 = createUser("Aniket", 22)

console.log(user1); // Gives directly undefined.
// when you call user1 = createUser("Aniket", 22), you're invoking the createUser function directly, without using the new keyword. When you do this, this inside the createUser function refers to the global object (or undefined in strict mode), rather than creating a new object with username and age properties.

// Since the createUser function doesn't explicitly return anything, it implicitly returns undefined. That's why user1 is undefined.

const user2 = new createUser("Sam", 18)

user2.printMe()

user2.increment()
user2.printMe()

*/


////   Prototype

let myName = "Aniket    "

// Object.setPrototypeOf()

String.prototype.trueLength  = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

myName.trueLength()
"   Hitesh    ".trueLength()

let myHeroes = ["Thor", "SpiderMan"]
let heroPower = {
    Thor: "hammer",
    SpiderMan: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.SpiderMan}`);
    }
}

Object.prototype.Aniket = function() {
    console.log(`Now Aniket is present in all objects.`);
}

heroPower.Aniket()
myHeroes.Aniket()

// 
// https://chat.openai.com/share/f09d06b6-bbbb-41f1-9943-daeabf8c36e9