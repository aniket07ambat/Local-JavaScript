// constructor method means singleton
const youtube = new Object()

youtube.id = "123abc"
youtube.name = "Sunny"
youtube.isLoggedIn = true

console.log(youtube)

// Now doing Objects in Objects

const regularUser = {
    age: 18,
    fullname: {
        userfullname: {
            firstname: "Aniket",
            lastname: "Ambat",
        }
    }
}

console.log(regularUser)
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.lastname)

// There is also optional chaining we will see this later.

// assign
const obj1 = {a: 1, b: 2}
const obj2 = {d: 1, f: 2}
const obj3 = {e: 1, h: 2}

const obj4 = {obj1, obj2}
console.log(obj4) // wrong method 

const obj5 = Object.assign({}, obj1, obj2, obj3)
console.log(obj5)

// Recomended method: Spread method. 
const obj6 = {...obj1, ...obj2, ...obj3}
console.log(obj6)

// When we get data from database, Its gets in the form of array in Objects means

const users = [
    {
        name: "Aniket",
        age: 32,
    },
    {
        name: "Aniket",
        age: 22,
    },
    {
        name: "Aniket",
        age: 32,
    },
]

console.log(users[1].age)

// As we know, in Objects there are pairs of keys and values

console.log(youtube)
console.log(Object.keys(youtube))   // Remember keys return in form of Array.
console.log(Object.values(youtube)) 

// entries gives us an array
console.log(Object.entries(youtube))

// To calculate length of object
// https://chat.openai.com/share/0392c1ac-6872-4fad-b107-3f12d33f101c
console.log(Object.keys(youtube).length)

// Now to know if Objects has given key/property
console.log(youtube.hasOwnProperty("isLoggedIn"))
console.log(youtube.hasOwnProperty("fullname"))  // OUTPUT: false
