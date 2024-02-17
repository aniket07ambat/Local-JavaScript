// https://chat.openai.com/share/244253a8-6bd2-423f-92e2-01a317438db0

/*
const url = document.querySelector("#url")
const username = document.querySelector("#Username")
const id = document.querySelector("#ID")
const followers = document.querySelector("#followers")
console.log(url.value);

document.querySelector("#button").addEventListener("click", function (event) {
    event.preventDefault();
    async function user(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            return console.log("Error");
        }
    }
    
    // const Aniket =  user("https://api.github.com/users/aniket07ambat");
    const Aniket = user(url.value)
    // console.log(Aniket);
    Aniket.then( (value) =>{ 
        console.log(value)
        username.textContent = value.login;
        id.textContent = value.id
        followers.textContent = value.followers;

    }).catch( (error) => console.log(error))
})

*/   
// ///// /// More readable code.

/*
const urlInput = document.querySelector("#url")
const usernameOutput = document.querySelector("#Username")
const idOutput = document.querySelector("#ID")
const followersOutput = document.querySelector("#followers")

document.querySelector("#button").addEventListener("click", async function (event) {
    event.preventDefault();
    try {
        const response = await fetch(urlInput.value);
        if(!response.ok) {
            throw new Error("Network response was not Ok");
        }
        const userData = await response.json();
        usernameOutput.textContent = userData.login;
        idOutput.textContent = userData.id;
        followersOutput.textContent = userData.followers;
    } catch (error) {
        console.error("Error fetching Data", error);
    }
});
 */

// Above code is good 

// I change HTML TOO. SO above code will not work.
// Let's increase Functionalities.

const usernameInput = document.querySelector("#username")
const nameOutput = document.querySelector("#name")
const idOutput = document.querySelector("#ID")
const followersOutput = document.querySelector("#followers")

let url = "https://api.github.com/users/";
let completeUrl = url + usernameInput.value;
console.log(completeUrl);





   