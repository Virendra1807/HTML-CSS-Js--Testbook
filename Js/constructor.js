
const prompt = require("prompt-sync")();

class Stud{
    constructor(name, gender, age, grade){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.grade = grade;
    }
}


const arr = new Array();

function info(n){
    for(let i=1; i<=n; i++){
        console.log("Enter deatails for student : "+ i);
        let name = prompt("Enter student name : ");
        let gender = prompt("Enter gender(M/F) : ")
        let age = Number(prompt("Enter student Age : "));
        let grade = prompt("Enter Student grade : ")

        arr.push(new Stud(name, gender, age, grade));
    }
}

info(3);

// Printing information of students
arr.forEach((value)=>{
    console.log(value)
});

// Here we filter the students by their Age
let filterMul = arr.filter((Stud)=> Stud.age>20);
console.log(filterMul);



