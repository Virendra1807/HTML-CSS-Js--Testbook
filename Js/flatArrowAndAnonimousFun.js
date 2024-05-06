
// Anonymous Function ( Before flat arrow function )
let greet = function(name){
    console.log("Hello " + name + ", I'm anonymous function");
};
greet("viren");


// Flat Arrow Function
let greeting = (nm) =>{
    console.log("Hello "+ nm + ", I'm flat arrow function")
};
greeting("Viren Mali");


// arrow function
let add = (x, y) =>{
    return x+y;
};
console.log(add(20, 20));

// flat arrow function returns without return keyword, Here don't use Curly brackets.
let sum = (a, b) => a+b;
console.log(sum(20, 20));

