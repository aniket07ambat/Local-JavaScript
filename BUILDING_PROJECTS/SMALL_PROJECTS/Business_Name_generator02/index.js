/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

const adj = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}

const shopName = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}

const anotherName = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}

// console.log(random);

// for (let index = 0; index < 5; index++) {
//     let random = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    
    
// }

function random() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1
}

let randomName = `${adj[random()]} ${shopName[random()]} ${anotherName[random()]}`
console.log(randomName);
