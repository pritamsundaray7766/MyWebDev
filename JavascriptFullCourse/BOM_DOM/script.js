// Question 1 
// const prompt = require("prompt-sync")();
// let age = prompt("Enter your age here : ");
// age = Number.parseInt(age);

let runAgain = true;

while(runAgain){
    let age = prompt("Enter your age here : ");
    age = Number.parseInt(age);

    if(age<0){
        console.error("You entered a negative number");
    }else if(age>= 4){
        alert("You can drive because your age is " + age);
        break;
        location.href = "https://www.w3schools.com/js/js_if_else.asp";
        
    }else{
        alert("You can't drive because you are under age just " + age );
    }
   

    runAgain = confirm("Do you want to do it again");
}


/*
    change the colour according to the user input
*/

//approach 1
let color = prompt("Enter any color" , "Red/Yellow/Blue");
switch (color) {
    case "red":
        document.body.style.backgroundColor = "red";
        break;
    case "yellow":
        document.body.style.backgroundColor = "yellow";
        break;
    case "blue":
        document.body.style.backgroundColor = "blue";
        break;
    default:
        alert("Enter color from Red/Yellow/Blue");
}
//approach 2
let colour = prompt("Enter any color");
document.body.style.backgroundColor = colour;
