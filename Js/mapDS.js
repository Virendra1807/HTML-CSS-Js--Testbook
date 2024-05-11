
let stud1 = new Map();

stud1.set('name', 'viren');
stud1.set('marks', 86);
stud1.set('class', 'B');
stud1.set('gender', 'M');
stud1.set('status', 'Fail');

console.log(stud1);

console.log(stud1.get('name'));

stud1.delete('status');
console.log(stud1);
stud1.set('status', 'pass');
console.log(stud1);


console.log(stud1.size);

stud1.forEach(function(value, key){
    console.log(key+ " : "+ value);
});


console.log(stud1.keys());
console.log(stud1.values());