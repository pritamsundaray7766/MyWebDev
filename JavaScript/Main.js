// Exponential Operator
let a = 2;
let b = 5;
let abc = 2**5;
document.write(abc);

// Exponential equal to Operator
let num = 2;
num**=10;
document.write(" "+ num);

//typeof Operator
"use strict";
var ab = 45;
document.write(" " + typeof ab);

let adcg = 10;
document.write(adcg++);

// Functions

//Objects
class Car{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    display(){
        document.write(this.make+ this.model+ this.year);
    };
}

let car1 = new Car("Hyundai", "i20", 2014);
let car2 = new Car("Honda", "city", 2005);
let car3 = new Car("Tata", "Nano", 2012);

for(let prop in car1){
    document.write(prop + ":" + car1[prop] + "<br>");
}


// map() method
"use strict";

let numbers = [1,2,3,4,5];
let squares = numbers.map(x => x * x);

squares.forEach(function(element){
    document.write(element + " ");
});