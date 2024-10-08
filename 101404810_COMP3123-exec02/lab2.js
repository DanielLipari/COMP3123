// Lab 2
// Name: Daniel Lipari
// Student ID: 101404810
// Course: COMP3123 18346


// 1. Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals and for...of

const greeter = (myArray, counter) => {
  const greetText = 'Hello';
  for (const name of myArray) {
    console.log(`${greetText} ${name}`);
  }
};

greeter(['Randy Savage', 'Rick Flair', 'Hulk Hogan'], 3);


// 2. Using destructuring assignment syntax and the spread operator, write a function will capitalize the first letter of a string.

const capitalize = (str) => {
  const [first, ...rest] = str;
  return first.toUpperCase() + rest.join('').toLowerCase();
};

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));


// 3. Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case the first character of each Color in the following array:

const colours = ['red', 'green', 'blue'];

const capitalizedColours = colours.map(capitalize);

console.log(capitalizedColours);


// 4. Using array.proto.filter create a function that will filter out all the values of the array that are less than twenty.

const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20);


// 5. Using array.proto.reduce create calculate the sum and product of a given array.

const array = [1, 2, 3, 4];

const calculateSum = array.reduce((acc, current) => acc + current, 0);

const calculateProduct = array.reduce((acc, current) => acc * current, 1);

console.log(calculateSum);
console.log(calculateProduct);


// 6. Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives from Car Class. The parameters for the Car class is the model and year.
// The parameters for the subclass is the model, year and balance. Use the super key word in the Sedan subclass to set the model and name in base Car constructor.

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  details() {
    return `Model: ${this.model} Engine ${this.year}`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }

  get info() {
    return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
  }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info);