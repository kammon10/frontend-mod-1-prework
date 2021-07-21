/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dogs {
}

  var small = new Dogs();
  var short_dogs = new Dogs();


console.log(small);
console.log(short_dogs);
// Prompt 2: Snack

class Snacks {
  }

  var sweet = new Snacks();
  var salty = new Snacks();

  console.log(sweet);
  console.log(salty);

// Prompt 3: Shirt
class Shirt{

}
var longSleeve = new Shirt();
var shortSleeve = new Shirt();

console.log(longSleeve);
console.log(shortSleeve);
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Dog {
  constructor(name, type, size) {
    this.name = name;
    this.type = type;
    this.size = size;
  }
}
var myDog = new Dog("sandy", "german Shepherd", "Large");
console.log(myDog);

// Prompt 2: Snack
class FaveSnacks {
  constructor(name, type, amt){
    this.name = name;
    this.type = type;
    this.amount = amt;
  }
}
var sweet = new FaveSnacks();
var salty = new FaveSnacks();

console.log(sweet);
console.log(salty);

// Prompt 3: Shirt
class Shirt2{
  constructor(length, size, season){
    this.length = length;
    this.size = size;
    this.season = season;
  }
}
var faveShirt = new Shirt2();
console.log(faveShirt);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class MyDogs {
  constructor(name, age, breed){
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
}
var lucy = new MyDogs("Lucy", 21, "mini Doxin");
var sheese = new MyDogs("sheese", 4, "German Shepherd");

console.log(lucy);
console.log(sheese);

// Prompt 2: Snack
class Snack {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

var sweet = new Snack("Skittles", "Sour", "green");
var salty = new Snack("Pretzels", "Sourdough", "Brown");
console.log(sweet);
console.log(salty);

// Prompt 3: Shirt
class NewShirt {
  constructor(length, size, season){
    this.length = length;
    this.size = size;
    this.season = season;
  }
}
var tank = new NewShirt("sleevless", "Medium", "Summer");
var sweater = new NewShirt('Long', 'Large', 'Winter');

console.log(tank);
console.log(sweater);
