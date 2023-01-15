
const hamburger = document.querySelector(".header__nav_burger");
const navMenu = document.querySelector(".header__nav_burger-line");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("nav-item").forEach(n => {
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
})



const form = document.querySelector("#wordForm");
const input = document.querySelector("#wordName");
const list = document.querySelector(".list")
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const newWord = input.value     
const newLI = document.createElement("LI");
newLI.innerText = newWord;
list.append(newLI);
input.value = ""
})

/*
document.createElement('img');

const newImg = document.createElement('img');
newImg.src = "https://plus.unsplash.com/premium_photo-1661270413285-fc9fe2b44e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
document.body.appendChild(newImg)

newImg.classList.add("square")

const newH3 = document.createElement("h3");
newH3.innerText = "I am new"


let head2 = document.createElement("h2")
head2.append("Hello I am H2")
*/

//nsertAjacentElement
/*
const h2 = document.createElement("h2")
h2.append("Are adorable chickens")

const h1 = document.querySelector("h1")
h1.insertAdjacentElement('afterend', h2)


const btnContact = document.querySelector("#btn-contact");

btnContact.onclick = function () {
    console.log("Call me")
}

const btnLearn = document.querySelector("#btn-learn");

btnLearn.onmouseover = function () {
alert("want to learn more?")
}

*/

const button = document.querySelector("#btn-learn");
/*const para = document.querySelector(".course-description");
para.innerText = newColor; */

/*
button.addEventListener('click', () => {
const r = Math.floor(Math.random () * 255);
const g = Math.floor(Math.random () * 255);
const b = Math.floor(Math.random () * 255);
const newColor = `rgb(${r}, ${g}, ${b})`;
document.body.style.backgroundColor = newColor;
}) */


