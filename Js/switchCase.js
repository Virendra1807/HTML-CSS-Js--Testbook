

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number : "));

switch(num){
    case 10:
        console.log("Number is 10");
        break;

    case 20:
        console.log(`Number is ${num}`);
        break;
    
    default:
        console.log("neither a 10 nor 20");
}