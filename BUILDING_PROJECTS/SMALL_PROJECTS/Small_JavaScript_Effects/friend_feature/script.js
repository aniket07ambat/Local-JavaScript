const text1 = document.querySelector("h4")
const text2 = document.querySelector("#add")
const text3 = document.querySelector("#remove")
const text4 = document.querySelector("#both")
// text2.addEventListener("click", function () {
//     text1.innerHTML = "Friend"
// })

// text3.addEventListener("click", function () {
//     text1.innerHTML = "Stranger" 
// })


// // Modification 1.1: Making only one button to both remove and add.

// let flag = 0
// if (flag == 0) {
//     text4.addEventListener("click", function () {
//         text1.innerHTML = "Friend"
//         text4.innerHTML = "Remove"
//         flag = 1
//     })
// }
// else {
//     text4.addEventListener("click", function () {
//         text1.innerHTML = "Stranger"
//         text4.innerHTML = "Add"
//         flag = 0
//     })
// }
// // Not working 

// // Modify 1.2: 

const button_both = document.querySelector("#both")
let flag2 = 0
button_both.addEventListener("click", function () {
    if (flag2 == 0) {
        text1.innerHTML = "Friend"
        text4.innerHTML = "Remove"
        flag2 = 1
    }
    else {
        text1.innerHTML = "Stranger"
        text4.innerHTML = "Add"
        flag2 = 0
    }
})


