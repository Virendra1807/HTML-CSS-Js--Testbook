
// // Triangle 1
for(var i = 0; i < 5; i++){
    var row = "";
    for(var j = 0; j < i+1; j++){
        row += "* ";
    }
    console.log(row);
}

console.log("");

// // Triangle 2
let n = 5;

for(i = 1; i<=n; i++){
    let row = "";

    //spaces
    for( var j=0; j <= n-i; j++){
        row += "  ";
    }

    // stars
    for(var k=1; k <= i ; k++){
        row += "* ";
    }
    console.log(row);
}

console.log("");



