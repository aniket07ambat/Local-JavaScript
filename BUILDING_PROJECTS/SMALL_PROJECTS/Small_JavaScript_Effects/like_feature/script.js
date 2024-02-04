const icon = document.querySelector(".ri-heart-3-fill")
const con = document.querySelector(".container")

con.addEventListener("dblclick", function () {
    icon.style.transform = "scale(2) "
    console.log("Hello, Yes it is working.");
})