
const arr = [1,2,3,4,5];
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

let mulAll = arr.reduce(function(accumulator, currValue){
    return accumulator * currValue;
}, 1);// 1 is assigned to accumulator
console.log(mulAll);

let filterMul = arr.filter((i)=> i%2!=0);
console.log(filterMul);

