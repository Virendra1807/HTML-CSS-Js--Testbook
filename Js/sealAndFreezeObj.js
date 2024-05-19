
var emp = {
    name : "viren",
    gender : "Male",
    marks : 96
};


console.log(emp);
// We can freeze object after freezing we can't change values and also not able to add new property
emp.marks = 97;
Object.freeze(emp);
emp.marks = 98;// this will not give any error but the value can't be assign to marks
console.log(emp)

// We can seal object so if we seal obj then we can't delete and add property but we can update value of property
Object.seal(emp);
