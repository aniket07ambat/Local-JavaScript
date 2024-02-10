// prop means properties

class user {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }

    // createId(){
    //     return `123`
    // }
    // We don't want to give acess of createId() to every object So we used
    // Static methods are called on the class itself, not on instances of the class.
    static createId() {
        return `123`
    } 
}

const chai = new user("Aniket")
chai.logMe()
// console.log(chai.createId()) // This will give an error.

// Static methods are called on the class itself, not on instances of the class.
console.log(user.createId());

class Teacher extends user {
    constructor(username, age) {
        super(username)
        this.age = age
    }

}

const iphone = new Teacher("Iphone", 5)
iphone.logMe()

// console.log(iphone.createId());
 // Error as we already know static methods are called on class itself, not on instance of the class.

console.log(Teacher.createId()); 

//https://chat.openai.com/share/7036b767-f0a4-4a9d-a58b-d89278108bb5