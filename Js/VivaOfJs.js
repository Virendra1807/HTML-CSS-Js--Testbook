
// Diff bet Async and Sync
async function viva2() {
    setTimeout(() => {
        console.log('Viren Viva');
    }, 2000);
}

function viva3() {
    console.log("Second Function");
}

viva2();
viva3();

// Change Content Dynamically on Webpage
let divCon = document.getElementById('my-div');
divCon.innerText = "Viren";


// Closure in Js
let age = 20;
function first(){
    let age2 = 40;
    console.log("In First Function" + age);

    function second(){
        let age3 = 60;
        console.log(age);
        console.log(age2)
        console.log(age3);
    }
    second();
    console.log(age3); // We cant access it 
}
first();


// Hoisting in Js
HoistingEx();

function HoistingEx(){
    console.log("How Hoisting works");
}




// Print pyramid Pattern 
let n = 5;
for (let i = 0; i <= n; i++) {
    // Spaces
    let row = "";
    for (let j = 0; j <= n - i; j++) {
        row += "  ";
    }

    // Stars
    for (let k = 0; k < i * 2 + 1; k++) {
        row += "* ";
    }
    console.log(row);
}

// Lower triangle logic Pattern 
for (let i = n-1; i >= 0; i--) {
    // Spaces
    let row = "";
    for (let j = 0; j <= n - i; j++) {
        row += "  ";
    }

    // Stars
    for (let k = 0; k < i * 2 + 1; k++) {
        row += "* ";
    }
    console.log(row);
}
