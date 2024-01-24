function sayMyName() {
    console.log("A")
    console.log("N")
    console.log("I")
    console.log("K")
    console.log("E")
    console.log("T")
}

sayMyName   // This only is function refrence.
// sayMyName() // This is excution.

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2)
}

addTwoNumbers()   // This gives NaN: Not a Number. 
               // Here we don't give parameters.
addTwoNumbers(3, 5)
addTwoNumbers(3, "a")
addTwoNumbers(3, null)

// Arguments: num1 and num2 we wrote at line 13 in function are arguments
// Parameters: 3 and 5 We given at line 19 are parameters.

const result = addTwoNumbers(3, 5)
console.log(`Result is ${result}`)   // undefined

function subtractTwoNumbers(num1, num2) {
    // let answer = num1 - num2
    // return answer
    return num1 - num2
     console.log("Hi") // This will not print as this is unreachable code.
}

const answer = subtractTwoNumbers(10, 5)
console.log(answer)

function loginLoggedInMessage(username) {
    if(username === undefined) {
        console.log("Please enter username")
        return
    }
    return `${username} just logged in.`
}

loginLoggedInMessage("Aniket") // This fuction return but you don;t store in any variable or don't print it.
console.log(loginLoggedInMessage("Aniket"))
console.log(loginLoggedInMessage(""))
console.log(loginLoggedInMessage())

function loginLogged_of_Message(username = "default") {
    return `${username} just logged of.`
}

console.log(loginLogged_of_Message())

// if we have multiple parameters
function calculateCartPrice(val1, val2, ...num1) {  // ... this is rest method
    return num1
}

console.log(calculateCartPrice(100))
console.log(calculateCartPrice(222, 444)) //WE can't print val1 and val2 as we defined num1 to return only.
console.log(calculateCartPrice(200, 333, 555, 5453))

// spread and rest methods are same difference lies in used cases.

// Functions and Objects
const user = {
    username: "Aniket",
    price: 50,
}

const customer = {
    username: "Sam",
    price: 78,
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
 handleObject(user)
handleObject(customer)
// We can also directly pass objects
handleObject({
    username: "Ambat",
    price: 355,
})

// Functions and Arrays
const myArray = [222, 555, 666, 642, 2442]

function anyArray(getarray) {
    return getarray[1]
}

console.log(anyArray(myArray))

// We can also directly pass arrays

console.log(anyArray([333, 643, 36346, 2653]))








