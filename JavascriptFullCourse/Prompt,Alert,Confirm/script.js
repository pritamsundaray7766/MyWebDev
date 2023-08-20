
alert("Welcome to The Codex Web") 

/* 
you can add two  parameters in prompt function  
like prompt("Message you want as alert in the website" , "The default parameter you want to see on the website")
*/
let num = prompt("Enter a value : ");
num = Number.parseInt(num); // the prompt function only take the input as string so Number.parseInt() is required to convert the string to the number
let write = confirm("Do you want the number to be printed on the website");
if(write){
    document.write(" " + num + " ");
}else{
    document.write("Please allow me to print the number!");
}
