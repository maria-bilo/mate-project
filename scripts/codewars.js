//#1
// function makeNegative(num) {
//   if (num < 0) {
//     return num;
//   } else {
//     return (num = num * -1);
//   }
// }
// #2
// function makeNegative(num) {
//   if (num < 0) {
//     return num;
//   } else {
//     return -num;
//   }
// }
// #3
// function makeNegative(num) {
//   return num < 0 ? num : -num;
// }
// #4
// const makeNegative = (num) => (num < 0 ? num : -num);
// #5
// const makeNegative = (num) => -Math.abs(num);

////

//------------------------------------
////CODEWARS

//// MAKE NEGATIVE

/*function makeNegative(num) {
    if (num < 0) {
      return num;
    }
    else {
      return num = num * -1;
    }
  }
  
 /* function makeNegative(num) {
     if (num < 0) {
     return num;
     } else {
       return -num;
    }
   }
   ///
//-----------------------------------
   ////// MESSI GOALS

   // function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
//}
//------------------------------------
//////   TERMINAL GAME MOVE FUNCTION

// function move (position, roll) {
 // return position + roll * 2;
//}-----------------------------------

////// PERSONALIZED MESSAGE

// 1ST VAR

 /*function greet (name, owner) {
  if (name = owner) {
  return 'Hello boss';
  }
 else {
    return 'Hello guest';
  }
}
//--------------------------------
//// 2nd var CORRECT

/////
/*function greet (name, owner) {
    if (name === owner) {
   return "Hello boss";
   }
   else {return "Hello guest";}
   }
-----------------------------------
///// KEEP HYDRATED
/*Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5


// !!!   function litres(time) {
return Math.floor(time/2);
}

-------------------------------------
///// LOVE OPPOSITES ATTRACT

// function lovefunc(flower1, flower2){
  if (flower1 === flower2) {
    return false;
  }
  else {
    return true;
  }
}
--------------------------------


///----------------------------------------21.06.22

//// CONVERT STRING TO AN ARRAY

//function stringToArray(string){
return string.split(' ');
}

///---------------------------------------
//DNA TO RNA

// BAD VARIANT

function DNAtoRNA(dna) {
const rna = 'GCAT';
const dna = 'GCAU';
console.log(rna.replace(dna, 'GCAU'));
}

// CORRECT VAR

// function DNAtoRNA(dna) {
console.log(dna.pop);
return dna.split('T').join('U');
}


////// Smallest value of an array

// wrong
///// for (i = 0, l = arr.length; i < l; i++) {
  min = Math.min(min, arr[i])
}
console.log(min)

////wrong
////// function min(arr, toReturn) {
const min = Math.min(...arr);
console.log(min);
}

////CORRECT

//function min(arr, toReturn) {
if (toReturn==='value') return Math.min(...arr)
return arr.indexOf(Math.min(...arr));
}



//--------------------------

/////SHEEP

function warnTheSheep(queue) {
  const index=queue.indexOf('wolf')
  return index===queue.length-1?"Pls go away and stop eating my sheep"
  :`Oi! Sheep number ${queue.length-1-index}! You are about to be eaten by a wolf!`
}

///// MAP

////function maps(x){
  return x.map(value => value*2);
}

//  let lastNameLength = 0;
//const lastName = "Lovelace";

// Only change code below this line
//lastNameLength = lastName.length;

//// BRACKET FOR LAST CHARACTER IN STRING
//  const lastLetterOfLastName = lastName[lastName.length -1]; // Change this line

///// ARRAY -- const teams = ["Bulls", 23];

//// ONE ARRAY INSIDE ANOTHER
//const teams = [["Bulls", 23], ["White Sox", 45]];

//// ARRAY PUSH

//const myArray = [["John", 23], ["cat", 2]];
//myArray.push(["dog", 3])


///// Manipulate Arrays With pop()
/////UNSHIFT ADS AT THE BEGINNING
//animals;
//["Cat", "Dog", "Llama"]
//animals[0];
//"Cat"
//animals.unshift("Monkey");

////CONCAT

//var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
//allAnimals;


////To find the index of an element in an array, use .indexOf(element)


/* =--------------------------------25.06.22
Find the samllest
1. class SmallestIntegerFinder {
findSmallestInt(args) {
return Math.min(...args)
}
}

// 2 circle

function circleCircumference(circle) {
return circle = 2 * Math.PI * circle.radius;
}

circleCircumference = circle => 2 * Math.PI * circle.radius

//3. Give me five 

error (not defined)

function giveMeFiveKeys(obj){
  for (let length in obj.key == 5)
  console.log(arr.push(key));
  
}

function giveMeFiveVal(obj){
  for (let length in obj.key == 5)
  console.log(arr.push(value));
  
}

var arr= {one: "This", two: "is", three: "emazing"};


2nd attempt (value is not defined)

function giveMeFive(obj){
  for (let length in obj.key == 5)
  console.log(arr.push(key));
  console.log(arr.push(value));
  
}

const arr = {one: "This", two: "is", three: "an", four: "emazing", five: "task"};


4th attempt

const giveMeFive = object => {
  const feedback = []

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      if (key.length === 5) feedback.push(key)
      if (object[key].length === 5) feedback.push(object[key])
    }
  }

  return feedback
}


4. Understanding closures

function buildFun(n){

	for (let i = 0; i< n; i++){
		res.push(function(){
			return i
		})
	}
	return res
}

var res = []


//UNIQUE IN ORDER

var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  let arr = [];
  for (let i = 0; i < iterable.length; i++) {
    let curr = iterable[i];
    let next = iterable[i + 1];
    if (curr !== next) {
      arr.push(iterable[i]);
    }
  }
  return arr;
}

///INCREMENTER
Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.
Notes:

    return an empty array if your array is empty
    arrays will only contain numbers so don't worry about checking that

Examples:

[1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

[4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
                                       #  9+3 = 12  -->  2



function incrementer(nums) {
return nums.map((element, index) => (element+index+1)%10);
}

///EVEN OR ODD

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  }
  else {
    return "Odd"
  }
}


//Difference of perfect squares displayed as sum of consecutive odd numbers 

///VALID BRACES

function validBraces(braces){
  //create empty array for opening brackets
  const openings = []
  //loop over each char in 'braces'
  
  for (let i = 0; i < braces.length; i++)
  
  //if the char is equal to ["[", "(", "{"], push the char to openings. Otherwise, 
  //2.2. if openings is empty, return false directly
    if (braces[i] === "{" || braces[i] === "(" || braces[i] === "[") {
      openings.push(braces[i])
    }
  else {
   if (!openings.length) {
     return false;
     }
    // get the last element from openings to lastEl variable
    const lastEl = openings.length - 1;
  }
  //if char is equal to "}" "]" ")" and if last El is equal to "{", "(","[", pop from openings
  if (braces[i] === "}" && lastEl === "{") || (braces[i] === "]" && lastEl === "[") || (braces[i] === ")" && lastEl === "(") {
    openings.pop();
  }
  else {
    break;
  }
  return !openings.length;
} 

// retur true if openings is empty */
//KEP UP THE HOOP
/*Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".



function hoopCount (n) {
  return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}  */

//GET THE MEAN OF THE ARRAY 08.11.2022
/*It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/
//my

function getAverage(marks){
  return Math.floor(marks.reduce(function(a,b){return a+b})/marks.length)
}

//best practice
function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

People on the bus    

//my solution

var number = function(busStops){
  // Good Luck!
  let people = 0;
  for(let stop of busStops){
    people += stop[0] - stop[1];
  }
  return people;
}

//best pracices
//first
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);
//second
var number = function(busStops){
	var totalPeople = 0;
  for (var i=0; i<busStops.length; i++) {
  	totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}

///
var number = function(busStops){
  // Good Luck!
  var num=0;
  for(var i=0;i<busStops.length;i++){
      num+=busStops[i][0]-busStops[i][1]
  }
  return num;
}

//Find the unique number

function findUniq(arr) {
  // do magic
 let uniqueNumber
 for (let i = 0; i< arr.length; i++) {
     if (uniqueNumber === arr[i]) {
    return arr[i] + 1;
} else if (uniqueNumber < arr[i] || uniqueNumber > arr[i]) {
  return uniqueNumber; 
  }
}
