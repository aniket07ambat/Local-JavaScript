// 1

// 1. Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

// function invoke_after_delay(callback) {
//     setTimeout(callback, 2000)
// }

// function callback() {
//     console.log("Printing after delay of 2 seconds.");
// }

// invoke_after_delay(callback)

// document.body.style.backgroundColor = "#212121"


//// Write a JavaScript program that converts a callback-based function to a Promise-based function.

// What are callback functions? // Functions, which pass as arguments to another function

// Promise based functions

// function fetchDataFromServer() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function() {
//             // const sucess = true
//             const sucess = false
//             if(sucess) {
//                 const data = {id: "2332", name: "John"}
//                 resolve(data)
//             } else {
//                 reject(new Error("Failed to fetch data"))
//             }
//         }, 2000)
//     })
// }

// fetchDataFromServer()
// .then(function (data) {
//     console.log("Received data: " , data);
// })
// .catch(function (error) {
//     console.log("Received error: ", error);
// })
// // .finally(() => console.log("either resolved or get rejected."))

//// Write a JavaScript program that converts a callback-based function to a Promise-based function.

// Callback function

// function fetchData(callback) {
//     setTimeout(() => {
//         const data = {id: "32323", age: 32}
//         callback(null, data) // null for error and 
//     }, 2000)
// }

// function fetchDataPromise() {
//     return new Promise(function (resolve, reject) {
//         fetchData(function (error, data) {
//             if(error) {
//                 reject(error)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// fetchDataPromise()
// .then( (data) => console.log(data))
// .catch( (error) => console.log(error))


////  Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

// Get API from GITHUB with fetch

// const followingOfUser = fetch("https://api.github.com/users/aniket07ambat")
// .then((response) => {
//     return response.json()
// })
// .then((data) =>{ console.log(data)
//     console.log(data.following);
// })
// .catch((error) => console.log(error))



// // JavaScript a function that makes an HTTP GET request

// function makeHttpGetRequest(url) {
//     return fetch(url)
//         .then((response) => {
//             if(!response.ok) {
//                 throw new Error("Network response was not Ok.")
//             } 
//             return response.json()
//         })
//         .catch( (error) => {
//             console.log("Error while fetching data", error);
//             throw error;
//         })
// }

// const myGithubUrl = "https://api.github.com/users/aniket07ambat"

// makeHttpGetRequest(myGithubUrl)
// .then((data) => {
//     console.log("Received data: ", data);
// })
// .catch((error) => {
//     console.log("Received error: ", error);
// })


////  Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

function makeHttpGetRequest(url) {
    return new Promise(function (resolve, reject) {
        fetch(url)
            .then((response) => {
                if(!response.ok) {
                    throw new Error("Error")
                } 
                return response.json()
            })
            .then((data) => resolve(data))
            .catch((error) => reject(error))
    })
}

const myGithubUrl = "https://api.github.com/users/aniket07ambat"
 
makeHttpGetRequest(myGithubUrl)
.then((data) => console.log("Received data: ", data))
.catch((error) => console.log(error))













