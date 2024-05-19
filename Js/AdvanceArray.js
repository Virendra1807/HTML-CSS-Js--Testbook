// // Array.of() - Creating Array instance using elements
const arr = Array.of(10,20,'30',40,50);

console.log(arr);


for(let i of arr){
    console.log(typeof i);
}



// // Array.from - creating an array from an iterrable object
const arr1 = Array.from("Hello");
console.log(arr1);

// // Array of objects
const arr2 = Array.of( {name : "viren", role: "fresher"});
console.log(arr2);  


//find() - Returns value of first element that satisfy the test/condition
const arr3 = [-10,-20,30,40];

let firstPositiveValue = arr3.find(i => i>0);
console.log(firstPositiveValue);


//findIndex() - Returns index of first element that satisfy the test 
const arr4 = [-1,-7,9,10,-4,-5];

let firstPositiveIndex = arr4.findIndex(j => j>0);
console.log(firstPositiveIndex);

//Check all elements satisfy the condition - it gives True or False
const arr5 = [1,7,9,10,4,5];

let checkPositive = arr5.every(k => k>0);
console.log(checkPositive);


//Some() - Check at least a single elements satisfy the condition
const arr6 = [-1,-7,-9,-10,4,-5];

let checkAtLeast = arr6.some(o => o>0);
console.log(checkAtLeast);


// Join() - 
const arr7 = ['h', 'e', 'l', 'l', 'o'];
console.log(arr7.join(''));


// fill() method - (valueToFill, start-index, end-index) - it is used to fill the specific value in array
const arr8 = [-1,-7,-9,-10,4,-5];

arr8.fill(5, 1, arr8.length-1);
console.log(arr8);