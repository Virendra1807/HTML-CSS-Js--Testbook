
// Addding digits of number

const prompt = require("prompt-sync")();

var num = prompt("Enter a number : ");
var sum = 0;
while(num != 0){
    var digit = num % 10;
    console.log(digit);
    sum += digit
    num = Math.trunc(num/ 10);
}

console.log(sum);