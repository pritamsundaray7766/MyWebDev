// Question 1 - add a string with a number
let str = "The Codex Web";
let num = 2;

let add = str + num;
document.write(add + " ");
// Question 2 - find the type of operator in question 1
document.write( typeof add);
// Question 3 - add a new element to the const object
const a1 ={
    name: "Codex",
    programs : 550,
    good : true
}
a1['competitor'] = "GeeksforGeeks";
console.log(a1);
// Question 4 - create a word-meaning dictionary of 3 words
const dictionary = {
    "Bramha" : "Generator",
    "Vishnu" : "Operator",
    "Maheswar" : "Destroyer"
}
console.log(dictionary.Vishnu);
