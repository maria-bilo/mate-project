//Ex1 wrte a JS program to check 2 numbers and return true if one of the number i 100 or if the sum of the two number is 100.
/*
const equalToHundred = (a, b) => a === 100 || b === 100 || a + b === 100;
console.log(equalToHundred(60,70));

//EX 2 write a JS program to the extenion of a flename

const extensionFile = (str) => str.slice(str.lastIndexOf('.'));
undefined
console.log(extensionFile('index.html'));


// Ex3 wrte a JS program to replace every character in a given string with the character following it n the alphbet

const moveCharForward = (str) => 
str
.split()
.map(char => String.fromCharCode(char.charCodeAt(0) + 1))
.join('');


////multiple arguments

function isSnakeEyes(numOne, numTwo) {
    if (numOne === 1 && numTwo ===1) {
        console.log("Snake Eyes!")
       } else {
            console.log("Not Snake Eyes!")
        }
    }

    // DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true
    } else {
        return false
    }
}
isShortsWeather()

/// Please write a function called lastElement which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.
function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        return arr[arr.length -1];
    }
}


///Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).  For example:

capitalize('eggplant') // "Eggplant"
capitalize('pamplemousse') // "Pamplemousse"
capitalize('squid') //"Squid"

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}
capitalize()

///Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.
/*
sumArray([1,2,3]) // 6
sumArray([2,2,2,2]) // 8
sumArray([50,50,1]) // 101

Hints:

You'll need a variable to keep track of the total.  It should start out as zero.

Loop over the array and for each element, add it to the total variable.

After you have added every number to total, return total.

function sumArray(arr) {
    let total = 0;
    for (let i = 0; i<arr.length; i++){
        total = total+arr[i]
    } 
    return total
}
*/

////Days Of The Week Exercise

/*Write a function called returnDay. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.

Hint: store the days of the week in an array, or use an object with numerical keys.  When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value.

    returnDay(1) // "Monday"*/

/*
function returnDay(num) {
    const days = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
        return days[0];
    }
    return days[num];
}*/

/*
const square = function(num) {
    num * num
}
square

//NOTE: Udemy's coding exercise platform does NOT support the ** operator.  You'll need to multiply a number by itself or use the Math.pow() method.
const square = function(num) {
    return Math.pow(num, 2)
 }
 square()
 */
//RETURNING FUNCTIONS
/*
function makeBetweenFunction(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunction(0,18)
isChild(18)

//METHODS - WE CAN ADD FUNCTIONS AS PROPERTIES ON OBJECTS

const myMath = {
    PI: 3.1489689,
    square: function(num){
        return num * num;
    },
    cube: function(num) {
        return num ** 3;
    }
}

///Define an object called square, which will hold methods that have to do with the geometry of squares. It should contain two methods, area and perimeter 

/*area should accept the length of a side (all sides are the same in a square) and then return the side squared. 

perimeter should accept the length of a side and return that side multiplied by 4. 

square.area(10) //100
square.perimeter(10) //40*/

/*
const square = {
    area: function(side){
        return side * side;
    },
    perimeter: function(side){
        return side * 4;
    }
}

//THIS IN METHODS

const cat = {
    color: "onrange",
    name: "Rusty",
    breed: "scottish fold",
    meow() {
        console.log("This is:", this)
        console.log(`${this.name} says MEOW`)
    }
}
const meow2 = cat.meow;

//CHLLANGE
/*
const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg(){
        this.eggCount++
        return "EGG"
    }
} 
hen.layAnEgg()

const hen = {}
    hen.name = "Helen",
    hen.eggCount = 0,
    hen.layAnEgg = function() {
        this.eggCount++
        return 'EGG'
    }

hen.layAnEgg()


let hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return ('EGG');
    }
};

*/

//TRY CATCH
/*

try {
    hello.toUpperCase();
} catch {
    console.log("ERROR!!!!")
}
console.log("AFTER!!")

let yell = function(msg) {
console.log(msg.toUpperCase().repeat(3))
}
yell(msg)


//METHODS FOR EACH

const numbers = [1,2,3,4,5,6,7,8,9]

/*function print(element) {
    console.log(element)
}
numbers.forEach(numbers) */
/*
numbers.forEach(function(el){
      console.log(el);
}

for (let el of numbers) {
    console.log(el);
}
*/

/*
numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
    }
})


const movies = [
    {
        title: "Amedeus",
        score: "99"
    },
    {
        title: "Stand by me",
        score: "85"
    },
    {
        title: "Parasite",
        score: "95"
    },
    {
        title: "Alien",
        score: "90"
    }
]

/*movies.forEach(function(movie) {
    console.log(`${movies.title} - ${movies.score}/100`)
})*/

/*
movies.map(function(movie){
    return movie.title.toUpperCase();
})
*/
//MAP METHOD - creates a new array with the results of calling a callback on every element in the array

/*
const texts = [hkh, jodo, jdosjd, sjo]
const caps = texts.map(function(f) {
    console.log(f.toUpperCase);
})
texts;
caps;

// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here

const firstNames = fullNames.map(function(person) {
    return person.first;
});

//ARROW FUNCTIONS

const square = (x) => {
    return x * x;
}
*/
/*

const rollDie = () => {
    Math.floor(math.random() * 6 + 1)
}

//Write an arrow function expression called greet.  It should accept a single string argument, representing a person's name.  It should return a greeting string as shown below:

greet("Hagrid") //"Hey Hagrid!" 
greet("Luna") //"Hey Luna!"

Be sure to use arrow function syntax!

const greet = (name) => {
    console.log(`Hey ${name}`);
};
*/

//IMPLICIT RETURNS - the difference is in parenthesis
/*
const rollNewDie = () => (
    Math.floor(Math.random() * 6 + 1)
)

const add = (a, b) => a + b
const isEven = function(num) {
    return num % 2 === 0;
}

const isEven = (num) => {
    return num % 2 === 0;
}

const isEven = num => {
    return num % 2 === 0;
}

const isEven = num => (   //implicit return
    num %2 === 0
);
const isEven = num => num % 2 === 0;
*/

//SETTIMEOUT
/*
setTimeout(() => {
    console.log("Hello")
}, 3000)
*/
//then we should use clearInterval(id)


//THE FILTER METHOD

const movies = [
    {
        title: "Amedeus",
        score: "99"
    },
    {
        title: "Stand by me",
        score: "85"
    },
    {
        title: "Parasite",
        score: "95"
    },
    {
        title: "Alien",
        score: "90"
    },

    {
        title: "Christmas",
        score: "80"
    }
]

/*
const goodMovies = movies.filter(n => n.score > 85)
const goodTitle = goodMovies.filter(m => m.title)
*/
/*
const topMovie = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})
///*Filter Exercise

/*Let's get some practice using the filter method. Write a function called validUserNames that accepts an array of usernames (strings).  It should return a new array, containing only the usernames that are less than 10 characters. For example:

validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// => ["mark", "carrie98", "MoanaFan"]


Note: The syntax for this solution might be a little strange to you at this point in the course because it requires you to write the code, that you just learned in the previous lecture, inside of a function. e.g.,

function validUserNames(usernames) {
  // your code here
}


or if you want to get fancy with an arrow function: */

function validUserNames(usernames) {
    let filteredUserNames = usernames.filter(function(usernames) {
        return usernames.length < 10;
    });
    return filteredUserNames;
}


//Every and some; every returns true if all of the arry elements pss the test function; some returns true if some of the array elements pass the test function

const words = ["dog", "cat", "cangoroo", "lion", "tiger"]

words.every(word => {
    return word.length < 4;
})


/// Challenge

function allEvens(arr) {
    const newNumbers = arr.every(el => el % 2 === 0)
    return newNumbers;
}

//REDUCE METHOD

//SUMMING AN Array

[1,2,3,4,5,6].reduce((accumulatior, currentValue) {
    return accumulator + currentValue;
});
 
/*
Callback    Accumulator    CurrentVlue      ReturnValue

firstcall        1             2                 3
secondcall       3             3                 6

*/

//examples

let prices = [9.99, 8.99, 5.50, 10.99, 11.99]

let total = 0;

for (let price of prices) {
    total += price;
}
console.log(total)


/*
let newPrices = prices.reduce((total, price) => {
    return total + price;
})
*/

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})

const maxPrice = prices.reduce((max, price) => {
    if (price > max) {
        return price;
    }
    return max;
})

//
const movies = [
    {
        title: "Amedeus",
        score: "99"
    },
    {
        title: "Stand by me",
        score: "85"
    },
    {
        title: "Parasite",
        score: "95"
    },
    {
        title: "Alien",
        score: "90"
    },
    {
        title: "Christmas",
        score: "80"
    }
]

/*
const goodMovies = movies.filter(n => n.score > 85)
const goodTitle = goodMovies.filter(m => m.title)
*/
const topMovie = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})

//DESTRUCTURING OBJECTS

const person = {
    name: "Pier",
    lastName: "Borgen",
    bio: "Famous ingeneer",
    born: "1950",
    died: "2020",
    city: "Massachussets",
    state: "Massachussets"
}

const {name, lastName, bio, born, died, city, state} = person;


///DOM

const allHeads = document.querySelectorAll("h1")

for (let head of allHeads) {
    head.style.color = "green";
}
//Exercise
const container = document.querySelector("#container")

container.style.textAlign = "center";


const image = document.querySelector("img")

image.style.width = "150px";
image.style.borderRadius = "50%";

///Rainbow exercise

/*I've provided you with an <h1> element which contains 7 individual spans (each holding a single letter). 

    Please write some JavaScript to make them rainbow-colored! 

    In app.js you'll find an array of color names called colors.  It looks like: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].

    Your task is to select all spans, iterate over them, and assign them each one of the colors from the colors array.  The first span should be red, the second should be orange, etc.   Your result should look like this: */

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const spans = document.querySelectorAll("h1 span")

for (let i = 0; i < spans.length; i++) {
    spans[i].style.color = colors[i]
}

//another variant

spans.forEach((span, index) => {
    span.style.color = colors[index]
})

///CREATE ELEMENT, APPEND, PREPEND

document.createElement('img');

const newImg = document.createElement('img');
newImg.src = "https://plus.unsplash.com/premium_photo-1661270413285-fc9fe2b44e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"

// to insert an element between tWO - element.insertAjacentElement
//coding test

/*100 Button Insanity Exercise

Without touching index.html, please use JavaScript to create exactly 100 new button elements! Add each new button inside the container element provided in index.html.  Unfortunately, Udemy's exercise tool does not support to the append method, so you will need to use appendChild.  Here are the steps:

    Create exactly 100 new button elements

    Each button must have some text inside of it (it doesn't matter what)

    Each button must be appended inside the container div.
const containerDiv = document.querySelector("#container")  */


for (let i = 0; i < 100; i++) {
let button = document.createElement("button");
button.innerText = "Hey";
containerDiv.appendChild(button)

}

///EVENTLSTENER

const button = document.querySelector('h1')

button.addEventListener('click', () => {
    alert("You clicked me")
})

// coding exercise
/*
const hello = document.querySelector("#hello");
const goodBye = document.querySelector("#goodbye");

hello.addEventListener('click', () => {
    console.log("hello")
})

goodBye.addEventListener('click', () => {
    console.log("goodbye")
})
*/


/* What does out of scope mean JavaScript?
The if statement introduces a block scope by using a block statement. We say that foo is block-scoped to the if statement. This means it can only be accessed from within that block. If we try to access foo outside of the block, we get a ReferenceError because it is out of scope: if (true) { const foo = "foo"; console. */



//LEARNING PREVENT DEFAULT

const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#list")
form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(input.value);
    const newLi = document.createElement("Li")

})

///LEARNING ES 6
//for of loops

let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
    console.log(income);
    total += income;
}


let fullName = "Dylan Coding God Israel";


for (const char of fullName) {
    console.log(char);
}
