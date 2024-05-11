
// Here we swap 3 and 5 
const arr = [1,2,3,4,5];

[arr[2], arr[4]] = [arr[4], arr[2]];
console.log("Here we swaped 3 and 5 : " + arr);

// there are 4 ways to convert String to number 
let data = "50.2";

let  num =+ data;
console.log(typeof num);

let num2 = Number(data);
console.log(typeof num2);

let num3 = parseInt(data);
console.log(typeof num3);

let num4 = parseFloat(data);
console.log( typeof num4);