// 1 - Make negative
function makeNegative(num) {
    if(num < 0) {
      return num;
    }
    else {
      return -num;
    }
  }
// 2 - Messi Goals
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    if(laLigaGoals >= 0 && copaDelReyGoals >= 0 && championsLeagueGoals >= 0) {
      return (laLigaGoals + copaDelReyGoals + championsLeagueGoals);
    }
    else {
      return 'Incorrect values';
    }
  }

// 3 - Game Move
function move (position, roll) {
    if(position >= 0 && (roll >=1 && roll <=6)) {
      return (position + roll*2);
    }
  }

// 4 - Personalized Message
function greet (name, owner) {
    if(name === owner) {
      return 'Hello boss';
    }
    else {
      return 'Hello guest';
    }
  }

// 5 - Keep Hydrated
function litres(time) {
    return Math.floor(time/2);
  }

// 6 - Opposites Attract 
function lovefunc(flower1, flower2){
    const firstFlowerPetals = flower1/2 - Math.floor(flower1/2);
    const secondFlowerPetals = flower2/2 - Math.floor(flower2/2);
    // const secondFlowerPetals = flower2 % 2;
    if((firstFlowerPetals === 0 && secondFlowerPetals !== 0) || (firstFlowerPetals !== 0 && secondFlowerPetals === 0)) {
      return true;
    }
    else {
      return false;
    }
  } 
