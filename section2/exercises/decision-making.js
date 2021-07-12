/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 2 ;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "pants";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
// The 'if else' statement is giving us two options of clothing the bear can be wearing based on the door we go through.
// If the doorChoice is strict equal to 1, the bear will be wearing pants, the bear will be wearing pants in any other door that is chosen.

2. What variable has a new value assigned to it after the first if statement executes?
// The variable 'bearClothing' will have a new value assigned to it after the first if statement executes.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// The bearClothing value would be a scarf if any door other than door 1 is chosen.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
// On line 27, an if command is giving four dialog options based on the value given to the variable 'bearChoice'.
// The first three lines have dialog responses based on exact values, the last 'else' command however, asignes a  standered dialog
// to any value imput other than 1,2, or 3.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
// That would direct you to the 3rd outcome which would end with you in a room full of snakes.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
// The pants are to small and it starts to cry!

7. What is your favorite ending?
// the last ending is my favorite. You stay with the bear and become its best friend!
*/
