// Stack => Primitive data_types.  [Copy data]
// Heap  => Non-primitive data_types.  [Give direct acess means gives REFRENCE]

let myYoutubeChannel = "AniketChannel"
let anotherChannel = myYoutubeChannel
console.table([myYoutubeChannel, anotherChannel])

anotherChannel = "LearnCodeChannel"

console.table([myYoutubeChannel, anotherChannel])
// In stack only data is copied.

// Now for HEAP 

let userOne = {
    email: "aniketambatgmail.com",
    number: 90213
}

let userTwo = userOne

console.log(userOne.email)
console.log(userTwo.email)

userTwo.email = "anigmail.com"
console.log(userOne.email)
console.log(userTwo.email)
// Here refrence means direct changes to memory.