// What we want is? makke a method so that we can get truelength.

let myName = "Aniket     "

// Creating method and injecting directly in object so any string has acess to it.
// Object.prototype.trueLength = function() {
    
// }

// myName.trueLength()

// console.log(myName.trueLength());

// Difference between property and method.
// Property: myName.length
// method:   myName.toLowerCase() 

let myHeroes = ["Thor", "SpiderMan"]

let heroPower = {
    Thor: "hammer",
    SpiderMan: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.SpiderMan}`);
    }
}

// We can create our custom method.

Object.prototype.Aniket = function() {
    console.log(`Now Aniket is present in all objects.`);
}

// heroPower.Aniket()
// Our custom method is also present in arrays, strings
// myHeroes.Aniket()


// Now lets see if we custom made our method and inject in array instead of object will it present in object ???

Array.prototype.sayAniket = function () {
    console.log(`Injecting our prototype method in array.`);
    console.log(this);
}

myHeroes.sayAniket()

// heroPower.sayAniket()  Error as we inject in only array. not object.

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport,
    
}


Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea    ".trueLength()