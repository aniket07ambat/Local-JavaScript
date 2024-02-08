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

fetch("https://api.github.com/users/aniket0722ambat")
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(data);
})
.catch((error) => console.log("E: ", error))
.finally(() => console.log(" promise is either resolve or rejected."))




