
const arr = [10,20,30,40,50];

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

