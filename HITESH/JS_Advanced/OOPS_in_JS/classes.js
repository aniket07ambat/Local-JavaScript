// JS is prototype based language.

// Programming paradigram:-  means our code likhneka structure.
// A programming paradigm is a fundamental style or approach to programming, which provides a framework for building and designing programs. 

// Objects : collection of properties and methods.
// ex. tolowercase(), promises,   and methods means functions. see line 31 for ex.


// Parts of OOP 
// Object literal :  means literraly.

// -constructor function

// prototypes

// classes

// Instances(new, this)


// 4 pillars of OOP
// Abstraction
// Encapsulation
// Inheritance
// Polymorphism

// Now object literal

const user = {
    // properties
    userName: "Aniket",
    age: 23,
    isSignedIn: true,

    // methods
    getUserDetails: function () {
        console.log("I have user detais.");
        console.log(`get username: ${this.userName}`);
        // this shows value of current context.
        console.log(this);
    }

}

console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

// Now lets suppose  I want to reuse the above code.

// constructor function :  new keyword

const data = new Date
// Constructor function allows us to make multiple instances from one object literal.


function User(userName, age, isSignedIn) {
    this.userName = userName
    // here this.userName is varible
    // userName is parameter.
    this.isSignedIn = isSignedIn
    this.age = age
    this.greeting = function greets(){
        console.log(`Welcome ${this.userName}`);
    }
    return this
}

// const userOne = User("aniket", 22, true)
// console.log(userOne);
// const userTwo = User("Anil", 23, false)

// // See magic and importance of new keyword
// console.log(userOne);

// We are overwriting our values. 

// Solution

// Create a new instances or copy every time 
// e.x

const userThree = new User("aniket", 22, true)
const userFour = new User("Anil", 23, false)

// console.log(userThree);
// console.log(userFour);

// When we use new keyword
// step 1: New object is created 
// step 2: 
// step 3: 
// step 4: 
// step 5: 

const userFive = new User("Sam", 18, true)
console.log(userFive.constructor);


