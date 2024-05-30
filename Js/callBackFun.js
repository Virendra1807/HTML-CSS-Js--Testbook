
// CallBack Function are the function that take a another function as a parameter 
// Method 1
const calculate = (a, b, operation)=>{
        return operation(a, b);
};

const add = (a, b)=> a+b;

const result = calculate(10, 20, add);

console.log(result);


// Method 2
// Anonymous function
const res = calculate(30, 20, function(num1, num2){
    return num1 + num2
});

console.log(res);

// ======================================================

// Find First negative number in array and also find index of the number
const arr = [10, 5, 70, -2, 40, -68, -30];

const firstNegativeNum = (num)=>{
    return num < 0;
};

console.log(arr.find(firstNegativeNum));
console.log(arr.findIndex(firstNegativeNum));

// forEach() is also a callback function
arr.forEach((num, index, a)=>{
    console.log("Array element at index "+ index + " : "+ num);
    console.log(a[6]);
});