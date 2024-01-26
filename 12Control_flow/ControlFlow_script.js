// if 

let temperature = 20

if(temperature >= 40) {
    console.log("Too hot!")
} else if(temperature < 40 && temperature > 20) {
    console.log("Moderate temperature.")
} else {
    console.log("Cold here, my friend!")
}

// < , >, <=, >=, ==, !=, ===, !== 

if(true) console.log("True means always going to excute."); // here ';' at end is good practice.

// const userName = "Aniket"
// const userEmail = "Aniket@Gmail.in"

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2 == "2") {
    console.log("Allow to buy course.")
}

if(userLoggedIn && debitCard && 2 === "2") {
    console.log("Allow to buy course.")
}else {
    console.log("=== also checks data type.")
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("Come in.")
}

// switch case

const month = "March"

switch (month) {
    case "Jan":
        console.log("Jan")
        break;
    case "Feb":
        console.log("Feb")
        break;
    case "March":
        console.log("March")    
        // break;
    case "April":
        console.log("April")
        break;
    default:
        console.log("It's Sunday.")
        break;
}

// https://chat.openai.com/share/03022316-232a-4ad6-8a54-5034324fd635

// The switch statement is not suitable for this scenario because it doesn't support range conditions in the case statements.










