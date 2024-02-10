class user {
    constructor(userName) {
        this.userName = userName
    }

    logME() {
        console.log(`UserName is ${this.userName}`);
    }
}

class Teacher extends user {
    constructor(userName, age, password) {
        
        // Behind the scenes call is happing here. 
        super(userName)  // super is keyword which do all the work, like it takes current this (Teacher) then with call keyword goes to user and set this.userName in Teachers userName for currently newly created obj. with new keyword.

        this.age = age
        this.password = password
    }

    addCourse() {
        console.log(`A new course is added by Professor ${this.userName}`);
    }
}

const chai = new Teacher("Aniket", 22, "abc")
chai.addCourse()

const masalaChai = new user("Sam", 18, "324")
// masalaChai.addCourse() // Gives error: as masalaChai is instance of user not Teacher.

chai.logME() // As chai is instance of Teacher and Teacher is instance of user.

console.log(chai === masalaChai); // false 

console.log(chai instanceof Teacher); // True

console.log(masalaChai instanceof user); // True

console.log(Teacher instanceof user);  // false
// You're checking if the Teacher class itself is an instance of the user class. However, Teacher is not an instance of user. It's a class definition, not an instance. Therefore, console.log(Teacher instanceof user) will return false.


// If you want to check if the Teacher class inherits from the user class, you should use "instanceof" on an instance of Teacher, not the class itself.

// example

console.log(chai instanceof user); // True




