
var emp = {
    name : "viren",
    gender : "Male",
    marks : 96
};

console.log(emp);
// Adding property
emp.education = 'Btech';
console.log(emp);

// Updating property value
emp.name = 'Virendra Mali';
console.log(emp);

// Deleting property
delete emp.gender;
delete emp['marks'];
console.log(emp);


//Iterating over object
for(let key in emp){
    console.log(key+ ': '+emp[key]);
}



