const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

//"FirstLine\n\t\\SecondLine\n\ThirdLine" - CORRECT

//const userAge = prompt("Your Age")
//alert("Your age + userAge")

/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/
/*
document.querySelector('html').addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
});*/

//const FCC = "freeCodeCamp"; // Change this line
//let fact = "is cool!"; // Change this line
//fact = "is awesome!";
//console.log(FCC, fact); // Change this line

//const myStr = "I am a \"double quoted\" string inside \"double quotes\""; 

//     "FirstLine\n\\SecondLine\\\rThirdLine"

/*const mySchool = "HappyDots";
let fact = "is awesome";
fact = "is fantastic";
console.log(mySchool, fact);*/

//////Concatinating strings with class operator:
//         const myStr = "This is the start. " + "This is the end."; // Change this line (має бути пробіл після других лапок  першому стрінгу)

//        let myStr = "This is the first sentence. ";
//          myStr += "This is the second sentence.";

//    const myName = "Maria";
//    const myStr = "My name is " + myName + "and I am well!";

//     const someAdjective = "cool";
//     let myStr = "Learning to code is ";
//     myStr += someAdjective;

/////  FUNCTIONS

/* function makeNegative(num) {
  if (num < 0) {
    return num;
  }
  else {
    return num = num * -1;
  }
}
*/

///// DRAW CATS FUNCTON

// var drawCats = function (howManyTimes) {for (var i = 0; i < howManyTimes; i++) {console.log(i + " =^.^=");}}
//undefined
//drawCats(5);
//VM766:1 0 =^.^=
//VM766:1 1 =^.^=
//VM766:1 2 =^.^=
//VM766:1 3 =^.^=
//VM766:1 4 =^.^=


////// ARRAYS WITH SHIFT - removing the first element (pop removes the last)

//const ourArray = ["Stimpson", "J", "cat"];
//ourArray.shift();

////// UNSHIFT

// unshift() adds the element at the beginning of the array

//myArray.unshift(["Paul", 35]);

function happyDots() {
    //o something
    console.log ("Leave me alone!");
}

///// 1. DEFINING A FUNCTION

function singSong() {consol.log("DO"); consol.log("RE"); console.log("MI");}; // it will not run yet

/////// 2. RUN FUNCTION

// singSong() // plus enter 

DO
RE 
MI 

////// 3. ARGUMENTS - saying nput to a function

function greet(firstName) {
    console.log("${firstName} is a good person");
}

greet(ivan) //// ivan is an argument

///// FUNCTIONS WITH MULTIPLE ARGUMENTS

//function functionWithArgs(a,b) {
console.log(a+b);
}
functionWithArgs(1,2); \= 3
functionWithArgs(7,9); \= 16   

// ---------------WHY IS THIS CORRECT?

////// LOCAL SCOPE AND FUNCTONS

//function myLocalScope() {
  // Only change code below this line
let myVar = "Some var";
console.log(myVar);
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);


///// UNDEFINED VALUE IN FUNCTIONS

// / Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();


///// for(let i =100; i > 2; i = i-2)

//// for(let i = 2; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//////-------------------------22.06.22

/* function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
*/

/*function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue) {
  return "Yes, that was true";
} else {
return "No, that was false"
}
*/

/*function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
undefined
testEqual(12);
'Equal'
testEqual(10);
'Not Equal' */

/* Comparison with the Strict Equality Operator

Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

Examples

3 ===  3  // true
3 === '3' // false

In the second example, 3 is a Number type and '3' is a String type. */

/*Practice comparing different values

In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.

If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

Examples

3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because the types are different and type conversion is not performed.

Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

typeof 3
typeof '3'
*/

//EXAMPLE

/* // Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10"); */


/////////* Comparison with the Inequality Operator

/*The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

*/

/// EXAMPLE

/*function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
} */

///// STRICT INEQUALITY OPERATOR
///EAMPLE: 
/*function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}   
*/

////// Comparisons with the Logical And Operator

/*Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";

will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";


*/

/* LOGICAL OR OPRATOR

Comparisons with the Logical Or Operator

The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";

will return Yes only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";

*/

///EXAMPLE

// function testLogicalOr(val) {
  // Only change code below this line

  /*if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);  */

///// ELSE IF STATEMENTS

/*
Introducing Else If Statements

If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}

*/

//// ORDER MATTERS - СПОЧАТКУ ЧТАВИМО НАЙМЕНШЕ ЧИСЛО І РУХАЄМОСЯ ДАЛІ
/*
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } 
  else if (val < 10) {
    return "Less than 10";
  } 
  else {
    return "Greater than or equal to 10";
  }
} /


////// CHAINING IF ELSE STATEMENTS

/// /*
function testSize(num) {
  // Only change code below this line
if (num < 5) {
  return "Tiny"
} else if (num < 10) {
  return "Small"
} else if (num < 15) {
  return "Medium"
} else if (num < 20) {
  return "Large"
}
else {
  return "Huge"
}
*/

////// GOLF GAME

//Task
/*Golf Code

In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):
Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"

par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
*/

/* SOLUTION
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  } */

  ////// SWITCH STATEMENTS

  /* Selecting from Many Options with Switch Statements

If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.

Here is an example of a switch statement:

//EXAMPLE

///* function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
case 1:
answer = "alpha";
break;
case 2:
answer = "beta";
break;
case 3:
answer = "gamma";
break;
case 4:
answer = "delta";
break;
} */

//////MULTIPLE Identical Options in Switch Statements

/*Multiple Identical Options in Switch Statements

If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}

Cases for 1, 2, and 3 will all produce the same result.
*/

//EXAMPLE:
/*unction sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
      case 1:
      case 2:
      case 3:
        return "Low";
        break;
      case 4:
      case 5:
      case 6:
        return "Mid";
        break;
      case 7:
      case 8:
      case 9:
        return "High";
        break;
    } */
////// RETURN BOOLEAN VALUES FROM FUNCTONS

/* Returning Boolean Values from Functions

You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

function isEqual(a, b) {
  return a === b;
}

*/

////// COUNTING CARDS

/* let count = 0;

function cc(card) {
  // Only change code below this line
switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A'); */

////// ACCESSIGN OBJECT PROPERTIES WTH DOT NOTATION
/* const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line  */

////Accessing Object Properties with Bracket Notation

/*The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

However, you can still use bracket notation on object properties without spaces.

Here is a sample of using bracket notation to read an object's property:   */

//EXAMPLE

//// // Setup
/*const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj["an entree"];   // Change this line
  const drinkValue = testObj["the drink"];    // Change this line


  ///// TESTING OBJECTS FOR PROPERTIES

  /*
  function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Only change code above this line
} */


/////RECORD COLLECTION

/* // Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value != "")
  records[id][prop] = value; 
  else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false)
  records[id][prop] = [value];
  else if (prop === 'tracks' && value != "") {
  records[id][prop].push(value); 
  }
  else if (value === "") {
  delete records[id][prop]

  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');  
*/

////////Iterate Through an Array with a For Loop
/*

A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. In this case the last iteration is i === 4 i.e. when i becomes equal to arr.length - 1 and outputs 6 to the console. Then i increases to 5, and the loop terminates because i < arr.length is false.

Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.


/////SOLUTION

/*const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 1; i < myArr.length; i++) {
 total += myArr[i]; 
}  */

//WHY

////BECAUSE

/* total + myArr[0] -> 0 + 2 = 2 
total + myArr[1] -> 2 + 3 = 5
total + myArr[2] -> 5 + 4 = 9
total + myArr[3] -> 9 + 5 = 14 
total + myArr[4] -> 14 + 6 = 20  */

//// ARROW FUNCTIONS

/* 
const greeting = (name = "Anonymous") => "Hello " + name;
undefined
console.log(greeting("John"));
VM123:1 Hello John
undefined
console.log(greeting());
VM146:1 Hello Anonymous
undefined  */

var res = [];
function buildFun(n){
for (var i = 0; i< n; i++){
function[i] = function() {
console.log("My value: " + i);
};
}



    ------------------

    var funcs = [];
// let's create 3 functions
for (var i = 0; i < 3; i++) {
  // and store them in funcs
  funcs[i] = function() {
    // each should log its value.
    console.log("My value: " + i);
  };
}
for (var j = 0; j < 3; j++) {
  // and now let's run each one to see
  funcs[j]();
}