
// Global scope and block scope 

// Blocked scope starts from {} braces.



// Core scope of browser and Node.js is different

// Nested scope examples

function one() {
    const username = "Aniket"

    function two() {
        const website = "Aniket.com"
        console.log(username)
        console.log(website)
    }
    // console.log(website)
    two()
}

one()

if(true) {
    const username = "Aniket"
    if(username === "Aniket") {
        const website = " Chatgpt"
        console.log(`${username} use ${website} `)
    }
    // console.log(website)
    console.log(username)
}
// console.log(username)

function addOne(num1) {
    return num1 + 1
}

addOne(4)

//addTwo(2) // This gives an error as we can't initilize if we store in variable.
const addTwo = function(num1) {
    return num1 + 2
}



console.log(typeof addOne)
console.log(typeof addTwo)
console.log(addOne(5))
console.log(addTwo(5))

