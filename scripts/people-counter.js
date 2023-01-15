/*document.getElementById("count-el").innerText = 5;*/

/*let count = 0;
console.log(count) */

/*let myAge = 30;
console.log(myAge)*/

// let firstBatch = 5;
// let secondBatch = 7;

// let count = firstBatch + secondBatch;
// console.log(count)     ctrl + k +c
/*
let myAge = 30;
let humanDogRatio = 7;
let myDogAge = myAge * humanDogRatio;
console.log(myDogAge) */

/*
let count = 5;
count = count + 1; 
console.log(count) */


/*
let bonusPoints = 50;
bonusPoints = bonusPoints + 50;
console.log(bonusPoints)
bonusPoints = bonusPoints - 75;
console.log(bonusPoints)
bonusPoints = bonusPoints + 50;
console.log(bonusPoints) */

// intialize the count as 0
// listen for clicks on the increment button
// 
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

/*
function increment() {
    console.log("The button was clicked")
} */

/*
function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}
countdown()     //calling the function as a dog */
/*
function myBaby() {
    console.log("My baby")
}
myBaby() */
/*
let lap1 = 34
let lap2 = 33
let lap3 = 36 */

// Create a function that logs out the sum of all the lap times
/*function countPlayers() {
    console.log(lap1 + lap2 + lap3)
}
countPlayers()

*/
/*
function incrementLaps() {
    console.log(lapsCompleted + 1)
}
*/

/*
let lapsCompleted = 0;
function incrementLaps() {
    lapsCompleted = lapsCompleted +1;
}
incrementLaps()

console.log(lapsCompleted) */
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0;

function increment() {
count += 1;
countEl.innerHTML = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr; //changed innerText into textContent
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    countEl.textContent = 0;
    count = 0;
}

/*
let username = "Maria"

let message = "You've got a new message"
let messageToUser = message + ", " + username + "!"
console.log(messageToUser) */

/*
let name = "Maria";
let greeting = "Hello, how are you";
let myGreeting = greeting + " " + name;
console.log(myGreeting) */

/*
let welcomeEl = document.getElementById("welcome-el")
let name = "Maria";
let greeting = "Welcome back, "

welcomeEl.innerText = greeting + name; 
welcomeEl.innerText = welcomeEl.innerText + "👋"
welcomeEl.innerText += "👋" */

/*
function save() {
    let countStr = count + " - ";
    saveEl.innerText = countStr;
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
} */

/* let name = "Linda"
let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called

function sayHello() {
    console.log(greeting + "," + " " + name + "!")
}
sayHello()   */

/*
let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points() {
    myPoints += 3
}

function remove1Points() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Points()
remove1Points()

// Call the functions to that the line below logs out 10
console.log(myPoints) 8/ */


let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function add() {
    let addNum = num1 + num2;
}
add()

function subtract() {
    let subtractNum = num1 - num2
}
subtract()

function divide() {
    let divideNum = num1 % num2
}
divide()

function multiply() {
    let multiplyNum = num1 * num2
}
multiply()
