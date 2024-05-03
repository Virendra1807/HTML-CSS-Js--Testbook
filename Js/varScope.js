var data = 200;

function varScope(value){
    if(true){
        var data = value;
        console.log(`This is inside if condition ${data}`)
    }
    console.log(`This is outside of if condition ${data}`);    
}

console.log(`This is outside of function Global variable : ${data}`);

varScope(800);