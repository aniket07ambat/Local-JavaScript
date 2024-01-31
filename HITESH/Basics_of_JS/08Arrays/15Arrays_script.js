const marvel_heroes = ["thor", "ironman","Captain" ]
const dc_heroes = ["Flash", "Superman", "Batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3])
// console.log(marvel_heroes[3][2])

// concat

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes)

const myHeroes = ["I", "ME", "MYSELF"]

const all_newHeroes = [...myHeroes,...marvel_heroes, ...dc_heroes] // spread method
console.log(all_newHeroes)

// flat

const myArray1 = [1,2,3,[4,6,7],8,9,[2,5,6,[3,6]]]
console.log(myArray1)

const myArray2 = myArray1.flat(Infinity)
console.log(myArray2)

// isArray and from

// When we copy data which is not in the form of array
console.log(Array.isArray("Aniket"))
console.log(Array.from("Aniket"))

// What if it is an object
console.log(Array.from({name: "Ambat"}))  // Gives empty array. We will see this in projects.

// of

let score1 = 1001
let score2 = 1002
let score3 = 1003
// Returns a new array from set of elements
console.log(Array.of(score1,score2,score3))


// 2D arrays.
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3];
  const nestedSubarray = arr[3][0];
  const element = arr[3][0][1];
//   In this example, subarray has the value [[10, 11, 12], 13, 14], nestedSubarray has the value [10, 11, 12], and element has the value 11 .

let newlength = arr.push([4, 1, 3])  // push also return  new length of an array 
console.log(newlength);
console.log(arr);

// unshift and push return new length
// shift and pop return element.
// Try