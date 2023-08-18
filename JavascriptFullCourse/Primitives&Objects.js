/*
In this lesson we learn about Primitive datatypes.
 There are 7 types of primitive datatypes
    N - Null
    N - Number
    S - Symbol
    S - String
    B - Boolean
    B - Bigint
    U - Undefined

*/

let a = null;
let b = 25;
let c = true; // It can be false
let d = BigInt(7890);
let e = "The Codex Web";
let f = Symbol("I am a nice symbol");
let g = undefined;

document.write(a);
document.write(b);
document.write(c);
document.write(d);
document.write(e);
document.write(f);
document.write(g);
document.write(typeof f);


/*
Objects in JS
*/
const God = {
    "Bramha" : true,
    "Vishnu" : true,
    "Maheswar" : true
}
document.write(God["Vishnu"]);
console.log(God["Vishnu"]);
document.write("Hello");