// Lab 1 Exercise
// Name: Daniel Lipari
// Student No.: 101404810
// Class: COMP 3123 18346

var prompt = require("prompt-sync")({ sigint: true });

// 1. Write a JavaScript program to capitalize the first letter of each word of a given string.

var inputCapitalize = prompt("Please input a string to capitalize: ");
var outputCapitalize = inputCapitalize.split(" ").map(sentence => {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
}).join(" ");
console.log("Your string capitalized is:", outputCapitalize);

// 2. Write a JavaScript program to find the largest of three given integers.

var int1 = parseInt(prompt("Please enter your first integer: "))
var int2 = parseInt(prompt("Please enter your second integer: "))
var int3 = parseInt(prompt("Please enter your third integer: "))
var max = (int1 > int2 && int1 > int3) ? int1 : (int2 > int3) ? int2 : int3;
console.log("The largest integer is:", max);

// 3. Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.

var inputThreeChars = prompt("Please enter a string that is at least 3 characters long: ");
if (inputThreeChars.length >= 3) {
    var outputThreeChars = inputThreeChars.slice(-3) + inputThreeChars.slice(0, -3);
    console.log(outputThreeChars);
} else { console.log(inputThreeChars); }

// 4. Write a JavaScript program to find the types of a given angle.
function angle_Type(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle";
    }
}
// Samples
console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));