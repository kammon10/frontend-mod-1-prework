// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//here we have created a function, named it and assigned 5 perameters.
function buildABear(name, age, fur, clothes, specialPower) {
  //we have defined the first variable and assigned it at string using interpolation to insert the first perameter in the array.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // the second variable we have assigned to the first two perameters of the function.
  var demographics = [name, age];
  //this variable is assigned to a string using concatenation to insert the "specialPower" perameter.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //this variable is assigned to an object with 4 key-value pairs.
  var builtBear = {
    //this k-v-p pair calls the demographics variable which calls the first two perameters of the function.
    basicInfo: demographics,
    //this k-v-p is assigned to the 3rd position of the function peerameter array
    clothes: clothes,
    //this k-v-p is assigned to the 2nd position of the function peerameter array
    exterior: fur,
    //this k-v-p is assigned to an int value.
    cost: 49.99,
    //this key-value pair is assigned to an array that calls two variables and prints a string.
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //this key value pair is assigned to a boolean.
    isCuddly: true,
  };
//this line will print the function "builtBear"
  return builtBear
}
//the syntax here appears to be wrong, however, this is attempting to assign values to the perameters
//listed in the function.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');

buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//here we have named a function and assigned it 3 perameters
function fizzBuzz(num1, num2, range) {
  //this is the for loop for the perameters
  for (var i = 0; i <= range; i++) {
    //this line says that if num1 and num2 are even numbers, print "fizzbuzz"
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      //this says if just num1 is an even number, then print 'fizz'
    } else if (i % num1 === 0) {
      console.log('fizz');
      //if just num2 is even(0 remainder), then pring buzz
    } else if (i % num2 === 0) {
      console.log('buzz');
      //if both are odd, just  print "i".
    } else {
      console.log(i);
    }
  }
}
//this line is assigning values to the perameters of the function.
fizzBuzz(3, 5, 100);
//this line is assigning values to the perameters of the function.
fizzbuzz(5, 8, 400);
