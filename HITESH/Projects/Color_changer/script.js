const text = document.querySelectorAll(".button")
// console.log(text);

const text6 = document.querySelector("h2")
const text4 = document.querySelector("body")
const text3 = document.querySelector(".canvas")
const text5 = document.querySelector("h1")
const text1 = document.querySelector("#white")

text1.addEventListener("click", function () {
    // body.style.backgroundColor = "#212121"
    // text3.style.backgroundColor = "#212121"
    console.log("Hello");
    text4.style.backgroundColor = "#212121"
    text5.style.color = "aqua"
})

text.forEach(function (element) {
    // console.log(element);
    element.addEventListener("click", function () {
        text4.style.backgroundColor = "#212121"
        text5.style.color = "aqua"
        text6.style.color = "azure"
    })
})

text.forEach(function (button) {
    button.addEventListener("click", function (event) {
        console.log(event);
        console.log(event.target);
    })
})
