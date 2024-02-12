// To get protection We don't want to access our passwords or email so we can use get and set 

class user {
    constructor(email, age, password) {
        this.email = email
        this.age = age
        this.password = password
    }

    get email() {
        return `${this._email.toUpperCase()}`
    }

    set email(value) {
        this._email = value
    }


    set password(value) {
        this._password = value
    }
    get password(){
        return `${this._password}Aniket`
    }
}

// You have to use both get and set. Only one is not working. Dont work.
// Make sure to always return get
// Set is not returned.

const Aniket = new user("Aniket@gmail.com", 22, "123")
console.log(Aniket.password);
console.log(Aniket.email);





