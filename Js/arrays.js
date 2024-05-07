
const arr = [10,25,3,40,50];

console.log(arr.length);

arr.push(60);// Add element at last position
console.log(arr);
arr.unshift(5);// Add element at first position
console.log(arr);

arr.shift();// Delete first element
arr.pop();// Delete last element
arr.shift();// Delete first element
arr.pop();// Delete last element
console.log(arr);

let addReturn = arr.map((i)=>i+10); 
console.log(addReturn);

let sum = arr.reduce((sum, i)=> sum+i);
console.log(sum);

let filterMul = arr.filter((i)=> i%2!=0);
console.log(filterMul);

