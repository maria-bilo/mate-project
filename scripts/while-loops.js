
/*
let input = prompt("What would you like to do?")
while( input !== "quit" && input !== "q") {
    input = prompt("What would you like to do?")
} 
    console.log("You quit the app")

*/


    /*
    for (let i = 1; i <= 6; i++) {
        console.log("Bla bla bla")
    }
    console.log(i)
    */

    //EVEN NUMBERS

    /*for (let i = 0; i <= 20; i+=2) {
        console.log(i)
    } */

    //COUNT DOWN

    /*
    for (let i = 25; i >= 0; i-=5) {
    console.log(i)

}*/

/* const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i <= people.length; i++) {
    console.log(people[i].toUpperCase())
} */

/*
const SECRET = "BabyHippo"
let guess = prompt("Enter the secret code ...")
while (guess!==SECRET) {
    guess = prompt("Enter the secret code ...")
}
console.log("You know the secret")
*/
//GUESSING GAME

/*
let maximum = parseInt(prompt("Enter a valid number"))
while (!maximum) {
maximum = parseInt(prompt("Enter a valid number"));
}
const taregetNum = Math.floor(Math.random()* maximum + 1);
console.log(taregetNum)

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;
while (guess !== taregetNum) {
    attempts++;
    if (guess > taregetNum) {
        guess = parseInt(prompt("Too high, try again"));
    }
    else {
        guess = parseInt(prompt("Too low, try again"));
    }
}
console.log(`You got it! It took you ${attempts} guesses`)

let dishesCleaned = document.getElementById("cleaned-num")
*/


//FOR OF LOOPS
/*
for (let char of "Hello world") {
    console.log(char)
}
*/

let input = prompt("What would you like to do?");
const todos = ["Feed chickens", "Feed the cat"];
while (input !== "quit" && input !== "q") {
if( input === "list") {
    console.log("**********")
for (let i = 0; i < todos.length; i++) {
    console.log(`${i}: ${todos[i]}`);
}
    console.log("**********")
} else if (input === "new") {
    const newTodo = prompt("OK, what is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list`)
} else if (input === "delete") {
    const index = prompt("OK, what do you want to delete?")
}
 input = prompt("What would you like to do?");
}
console.log("OK, quit the app")