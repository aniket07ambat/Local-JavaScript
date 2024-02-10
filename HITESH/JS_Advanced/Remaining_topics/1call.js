// CODE 1.1

// function setUserName(userName) {
//     // complex DB calls.
//     this.userName = userName
// }

// function createUser(userName, age, email) {
//     // instead of this.userName = userName I want to use setUsername function to access userName.
//     setUserName(userName) // This does not give us acess to userName. 
//     // What happing here is we get only refrence. See below modification.

//     this.age = age
//     this.email = email
// }

// const AniketUser = new createUser("Aniket", 22, "ambataniket@gmail.com")
// console.log(AniketUser);

///////////

// CODE 1.2

// function setUserName(userName) {
//     // complex DB calls.
//     this.userName = userName
//     console.log("SetUserName is called. but it does not wait for createUser function to get userName, it just console.log() then gets deleted means its excution context gets deleted. ");
// }

// function createUser(userName, age, email) {
    
//     setUserName.call(userName)
//     // Here we have to do something to hold setUserName so creatUser can acess userName. 
//     this.age = age
//     this.email = email
// }
// // But even now we don't get acess to userName after usering call.
// const AniketUser = new createUser("Aniket", 22, "ambataniket@gmail.com")
// console.log(AniketUser);


/////

// CODE 1.3

function setUserName(userName) {
    // complex DB calls.
    this.userName = userName
}

function createUser(userName, age, email) {
    setUserName.call(this, userName)
    // Now we have acess to userName. 
    // Here what we are doing is passing creatUser this to setUserName. So that serUserName know it has to hold userName in serrUserName this. With this we have acess to all the variables in setUserName. So remember to use  ... .call(this, ...)
    this.age = age
    this.email = email
}

const AniketUser = new createUser("Aniket", 22, "ambataniket@gmail.com")
console.log(AniketUser);







