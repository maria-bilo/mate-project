//Write a new string from a given string and TAKE FIRST THREE CHARACTERS OF THE STRING AND LAST THREE CHARACTERS AND ADD THEM TOGETHER. The string length 
//must be 3 or more. If not, the original string is returned

const firstAndLast = (str) => 
str.lenght < 3 ? str : str.slice(0, 3) + str.slice(-3);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    } 
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

  
  const Bicycle {
 gear: 2,
 setGear(newGear) {
     this.gear = newGear;
 }
  };
  Bicycle.setGer(5);
  console.log(Bicycle.gear);

  `You bought ${qty} ${product}. Total is: ${price * qty}`

  // NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
const roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`


function isEven(num){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
   
   if(num%2===0) console.log('even');
    //AND THIS LINE ↑↑↑↑↑
}

const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// DO NOT TOUCH ANYTHING BELOW (please) 
if(num <= 100) {
    if(num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if(num % 2 === 0){
            console.log("YOU GOT ME!");
        }
    }
}


const userInput = prompt("Enter something");

if(userInput) {
    console.log("TRUTHY")
} else {
    console.log("FALTHY")
}