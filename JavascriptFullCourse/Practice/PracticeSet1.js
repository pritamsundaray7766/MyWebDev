/*
Q1. Create a variable of type string and try to add a number to it
*/
const prompt = require("prompt-sync")();
let str = prompt("Enter a String: ");
let result = str + 3;
console.log(str + 3);

/*
Q2. Use typeOf operator to find the data type of the string in last question
*/
console.log(typeof result); // String

/*
Q3. Create a constant object in js can you change it to hold a number later
*/
const student = {
    name: "Krish",
    RollNo : 21,
    Sec : 'A'
}

/*
Q4. Try to add a key to the const object in problem 3 were you able to to do it.
*/
student['Enemy'] = "Kansh";
console.log(student);

/*
Q5. Try to add a key to the const object in problem 3 were you able to to do it.
*/
const dictionary = {
    "Bramha" : "Generator",
    "Vishnu" : "Operator",
    "Maheswar" : "Destroyer"
}
console.log(dictionary.Vishnu);

