const marvel_heroes = ["thor", "ironman","Captain" ]
const dc_heroes = ["Flash", "Superman", "Batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3])
// console.log(marvel_heroes[3][2])

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes)

const myHeroes = ["I", "ME", "MYSELF"]

const all_newHeroes = [...myHeroes,...marvel_heroes, ...dc_heroes] // spread method
console.log(all_newHeroes)

const myArray1 = [1,2,3,[4,6,7],8,9,[2,5,6,[3,6]]]
console.log(myArray1)

const myArray2 = myArray1.flat(Infinity)
console.log(myArray2)

// When we copy data which is not in the form of array
console.log(Array.isArray("Aniket"))
console.log(Array.from("Aniket"))

// What if it is an object
console.log(Array.from({name: "Ambat"}))  // Gives empty array. We will see this in projects.

let score1 = 1001
let score2 = 1002
let score3 = 1003
// Returns a new array from set of elements
console.log(Array.of(score1,score2,score3))







