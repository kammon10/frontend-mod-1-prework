// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Tuck";
var specialAbility = "Hiding"
// Declare two variables - greeting AND catchphrase

//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = ("hello" + " " + heroName);
var chatchPhrase = `fast as a fox, I'm good at ${specialAbility}`;
// Declare two variables - power AND energy - set to integers

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = 5*500;
var fullEnergy = 100+150;
// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = false;
// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["duck", "squarls", "fish"];

var sideKicks = ["dog", "lama", "lego"];

// Print the first sidekick to your console
console.log(sideKicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("mouse");
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);

// Remove the first sidekick from the sidekicks array
sideKicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sideKicks);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
function assessSituation(dangerLevel, saveTheDay, badExcuse){
  dangerLevel = 80;
  saveTheDay = "I'll always save you";
  badExcuse = "Sorry!!, gotta live to fight another day!"
  if (dangerLevel  > 50) {
    console.log(badExcuse);
  }
  else if (dangerLevel >= 10) {
    console.log(saveTheDay);
  }

  else  if (dangerLevel < 10) {
    console.log("Meh. Hard pass");
  }
};
console.log(assessSituation());

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Lizard Man",
  smell: "gut wrenching",
  weight: "500 lbs",
  citiesDestroyed: ["San Antonio", "Dallas", "Indianapolis"],
  luckyNumbers: [2, 42, 72],
  address: {
    number:  36,
    street:  "River Run dr",
    state:  "UT",
    zip:  47201,
  }
}
console.log(scaryMonster);
// Create a new class called SuperHero


// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50
class SuperHero {
  archNemesis = "The Syntax Error";
  powerLevel = 100;
  energyLevel = 50;
  constructor(name, superpower, age,) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
  }
  sayName() {
    console.log("Sandy");
  }
  maximizeEnergy(){
    energyLevel = 1000;
  }
  gainPower(){

  }
}
var non = new SuperHero("Luis", "Kicking", 28);
var con = new SuperHero("Sandy", "Flying", 32);
con.gainPower();
console.log(con);
console.log(non);
// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class


// Reflection
// What parts were most difficult about this exerise?
// I wasn't able to create the gainPower method. I'm struggling to understand how methods interact with values in an object or class.


// What parts felt most comfortable to you?
//I feel really good about making and calling variables, objects and classes.

// What skills do you need to continue to practice before starting Mod 1?
// Interacting methods and functions with values and variables. Memorizing the syntax for concatenation and interpolation as well as
//syntax for loops and functions.
