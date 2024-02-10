// ES6

// class user {
//     constructor(userName, age, password) {
//         this.userName = userName
//         this.age = age
//         this.password = password
//     }

//     encrytedPassword() {
//         return `${this.password}abc`
//     }

//     changeUserName() {
//         return `${this.userName.toUpperCase()}`
//     }
// }
// const chai = new user("Aniket", 22, "adffijdf")
// console.log(chai.encrytedPassword());
// console.log(chai.changeUserName());


//// Now lets see what is happing in behind the secens in JS. 
//// As we know JS has not classes its prototype based language.
//// JS just suger coat syntax of class so that develpers from Java or other class based language understands. 
// Lets see behind the scenes.

function user(userName, age, password) {
    this.userName = userName
    this.age = age
    this.password = password
}

user.prototype.encrytedPassword = function () {
    return `${this.password}abc`
}

user.prototype.changeUserName = function () {
    return `${this.userName.toUpperCase()}` 
}

const chai = new user("Aniket", 22, "adffijdf")
console.log(chai.encrytedPassword());
console.log(chai.changeUserName());







