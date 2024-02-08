// IF resolve => .then() 
// if reject => .catch()
// Creation of promises
// const promiseOne= new Promise(function (resolve, reject) {
//     // Do async tasks
//     // DB calls, crytography, network

//     setTimeout(function () {
//         console.log("Async task is complete.");
//         resolve()
//         // Here first our task console.log is completed then resolve is called.
//     }, 2000)
// }) 

// // Now consume promise
// // With help of .then we can connect resolve to setTimeout function
// promiseOne.then(function () {
//     console.log("Promise is comsumed.");
// })

// // 

// new Promise(function (resolve, reject) {
//     setTimeout(function() {
//         console.log("Async2 is complete");
//         resolve()
//     }, 2000)
// }).then(function () {
//     console.log("Promise is resolved.");
// })


// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function() {
//         resolve({userName: "Aniket", age: 22}) // 
//     }, 2000)
// })

// promiseThree.then(function (user){
//     console.log(user);
// })

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // let error = true
        let error = false
        if(!error) {
            resolve({userName: "Aniket", password: 2232})
        } else {
            reject("Error: Something went wrong.")
        }
    }, 2000)
})

// promiseFour.then(function (user){
//     console.log(user);
//     // console.log(user.userName);
// }).catch(function (error){
//     console.log(error);
// }) 

// Now lets say we want to acess user.username
// We can also use Chaining..

// promiseFour.then((user) => {
//     console.log(user);
//     return user.userName
// }).then((userName) => {
//     console.log(userName);
// }).catch( (error) => console.log(error))

// Modification 3

// promiseFour.then((user) => console.log(user))
// .catch((error) => console.log(error))
// .finally(() => console.log("Default: The promise is either resolved or rejected."))

/*
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // let error = true
        let error = false
        if(!error) {
            resolve({userName: "Aniket", password: 2232})
        } else {
            reject("Error: Something went wrong.")
        }
    }, 1000)
})

// Instead of .then().catch().finally() we can also used async await.
// Note: async await don't handle errors gracefully

// async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response);
// } // This will work only if our promise get resolve. 
// What wiil happen if it gets rejected.
// Shows error of not using try catch block.

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


/// 

async function getGithubInfo() {
    try {
        const response = await fetch("https://api.github.com/users/aniket07ambat")
        const data = await response.json()
        // this data is in form of string.
        // console.log(typeof data);
        console.log(data);
    } catch (error) {
        console.log("E: ", error);   
    }
}

getGithubInfo()

 */

// Now trying to get API information with fetch and using .then().catch()

fetch("https://api.github.com/users/aniket07ambat")
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))
.finally(() => console.log("promise is either resolved or rejected."))


// I can even add objects in fetch
// Syntax:  fetch("url", {})










