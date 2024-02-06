// step 1 : random number
let randomNumber = parseInt((Math.random() * 100) + 1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")

// We have to create an array to show to the user
let prevGuess = []

let numGuess = 1; // No. of guess It goes to point 10

// Whenever we are designing games like stuff we declare
let playGame = true

if(playGame) {
    submit.addEventListener("click", function(event) {
        event.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

// Now to validate if user gives correct input
function validateGuess(guess) {
    if(guess < 1 || guess > 100 || isNaN(guess)) {
        alert("Please enter a valid number.")
    } else {
        prevGuess.push(guess)
        if(numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage(`You guessed it right.`)
        endGame()
    } else if(guess < randomNumber) {
        displayMessage(`You guessed Tooo low.`)
    } else if(guess > randomNumber) {
        displayMessage(`You guessed Tooo high.`)
    }
}

function displayGuess(guess) {
    // here we clean value of userInput
    userInput.value = ""
    guessSlot.innerHTML += `${guess}  `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(guess) {
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click", function (event) {
        randomNumber = parseInt((Math.random() * 100) + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)

        playGame = true;
    })
}





