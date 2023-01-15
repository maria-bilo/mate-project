let homeScoreBtn = document.getElementById("numscore-one-btn")
let homeScoreEl = document.getElementById("number-score")
let homeScore = 0

let homeScoreTwoBtn = document.getElementById("numscore-two-btn")
let homeScoreThreeBtn = document.getElementById("numscore-three-btn")

let guestScoreOneBtn = document.getElementById("guestscore-one-btn")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

letguestScoreTwoBtn = document.getElementById("guestscore-two-btn")
letguestScoreThreeBtn = document.getElementById("guestscore-three-btn")

function addOneHome() {
homeScore += 1
homeScoreEl.textContent = homeScore
}


function addTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
console.log("Amazing")

function addOneGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addTwoGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addThreeGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}