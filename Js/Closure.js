

function outer(){

    let count = 0;

    return function inner(){
        count++;
        console.log(count);
    }
}

let a = outer();
a();
a();
a();


// SCOPE
function a(){
    let age = 18; //Global scope
    function b(){
        console.log(age); // thats why we access age
    }
    b();
}

a();

// Closure

function outer2(){
    let age = 23; 
    return function inner2(){
        age++;
        console.log(age);
    }
}

let res = outer2();

res();
res();
res();


