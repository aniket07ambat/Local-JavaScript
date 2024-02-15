

document.addEventListener("DOMContentLoaded", () => {
    //list all card options
    const cardArray = [
        {
            name: "fries",
            img: "images/fries.png"
        },
        {
            name: "cheeseburger",
            img: "images/cheeseburger.png"
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        }
    ]


cardArray.sort( () => 0.5 - Math.random())

const resultDisplay = document.getElementById("result")
const grid = document.querySelector('.grid')


let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

  //create your board

    function createBoard() {
        for (let index = 0; index < cardArray.length; index++) {
            const card = document.createElement("img")
            card.setAttribute("src", "image/blank.png")
            card.setAttribute("data-id", index)
            // card.addEventListener("click", flipcard)
            grid.appendChild(card)
        }
    }


//   //check for matches
// function checkForMatches() {
//     const cards = document.querySelectorAll("img")
//     const optionId1 = cardsChosenId[0]
//     const optionId2 = cardsChosenId[1]

//     if(optionId1 === optionId2) {
//         // If you click on the same image twice.
//         cards[optionId1].setAttribute("src", "images/blank.png")
//         cards[optionId2].setAttribute("src", "images/blank.png")
//         alert("You clicked same image.")
//     }
//     else if (cardsChosen[0] === cardsChosen[1]) {
//         alert("You found match.")
//         cards[optionId1].setAttribute("src", "images/white.png")
//         cards[optionId2].setAttribute("src", "images/white.png")
//         cards[optionId1].removeEventListener("click", flipcard)
//         cards[optionId2].removeEventListener("click", flipcard)
//         cardsWon.push(cardsChosen)
//     } 
//     else {
//         cards[optionId1].setAttribute("src", "images/blank.png")
//         cards[optionId2].setAttribute("src", "images/blank.png")
//         alert("Sorry try again")
//     }
//     cardsChosen = []
//     cardsChosenId = []
//     resultDisplay.textContent = cardsWon.length
//     if(cardsWon.length === cardArray.length/2) {
//         resultDisplay.textContent = "You Win. You found them all."
//     }
// }



//   //flip your card
// function flipcard() {
//     let cardId = this.getAttribute("data-id")
//     cardsChosen.push(cardArray[cardId].name)
//     cardsChosenId.push(cardId)
//     this.setAttribute("src", cardArray[cardId].img)
//     if(cardsChosen.length === 2)   
//     {
//         setTimeout(checkForMatches, 500)
//     }
// }


  createBoard()

})















