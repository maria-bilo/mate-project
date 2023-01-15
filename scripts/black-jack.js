
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
name: "Maria",
chips: 145
}

let playerEl = document.getElementById("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;


function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}

/*
let hasSolvedChallenge = false;
let hasHints = false;

if (hasSolvedChallenge === false && hasHints === false) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution")
}  */

/*

let likesDocumentaries = true;
let likesStartups = false;

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Check out this new film!")
}

let recommendNewMovie = document.querySelector(".recommend");

recommendNewMovie.addEventListener("click", function() {
    alert("Hey, check out this movie!")
}) */

//objects

/*
let course = {
    title: "Learn CSS",
    lessons: 16,
    creator: "Per",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html","css"]
}

console.log(course["tags"]) //bracket notation
*/


let castleListing = {
    hasElectricity: true,
    price: 190,
    name: "Windsor",
    rooms: 18,
    images: [img/castle1.png,5,6,7]
}
console.log(castleListing.name);
console.log(castleListing.rooms);

//object practice

let person = {
    name: "Maria",
    age: 29,
    country: Ukraine
}

function logData() {
    person.name + " is " + person.age + "years old " + "and lives in " + person.country
}
logData()


//practice if-statements

let age = 15;

if (age < 6) {
    console.log("free")
} else if (age > 18) {
    console.log("child discount")
} else if (age > 27) {
    console.log("student discount")
} else if (age > 67) {
    console.log("full price")
} else if (age >=66) {
    console.log("senior citizen discount")
}