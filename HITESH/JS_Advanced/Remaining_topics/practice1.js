// Use of call

// function setUserName(username) {
//     this.userName = username
// }

// function createUser(username, email, age) {
//     setUserName.call(this, username)

//     this.age = 24
//     this.email = email   
// }

// const AniketUser = new createUser("Aniket", 22, "amfds")

// console.log(AniketUser);

//////  Classes

// class user {
//     constructor(username, age) {
//         this.username = username
//         this.age = age
//     }
//     encrytedPassword() {
//         return `${this.username}@123${this.age}`
//     }
    
// }


// const chai = new user("ANiket", 22)
// console.log(chai.encrytedPassword());


// // Lets see behind the scenes.
// function user(username, age) {
//     this.username = username
//     this.age = age
// }

// user.prototype.encrytedPassword = function () {
//     return `${this.username}@123${this.age}`
// }

// const chai = new user("Aniket", 22)
// console.log(chai.encrytedPassword());


// inheritance

class user {
    constructor(username) {
        this.username = username
    }
    logME() {
        console.log(`UserName is ${this.username}`);
    }
}

class Teacher extends user {
    constructor(username, age, password) {
        super(username)
        // user.call(this, username)
        this.age = age
        this.password = password
    }
    addCourse() {
        console.log(`A new course is added by Professor ${this.username}`);
    }

}
const chai = new Teacher("Aniket", 22, "abc")
chai.addCourse()



