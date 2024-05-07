

const animal = {
    name : "Lion",
    color : " Yellow",
    print : function (){
        console.log(this.name + this.color);
    }
}


const bird = {
    name:"Parrot",
    color: " Green" 
}


animal.print();

let birdBind = animal.print.bind(bird); 
birdBind();

// // By using Bind we can use function of another object

// When we use setTimeout it is necessary to bind the function otherwise it will give wrong output
//There are 2 solutions : 
// 1) Don't use Var bcoz Var is global variable instead of that use Let which has Local Scope

for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log("printing " + i + " after " + i + " seconds")
        }, i * 1000);
}
// 2) Or we can use immediate invoked function expression (Function Closure )

for (var i = 1; i <= 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log("printing " + i + " after " + i + " seconds")
        }, i * 1000);
    })(i);
}

