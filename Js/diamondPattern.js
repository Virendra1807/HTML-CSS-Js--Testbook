// Diamond pattern 
let n = 20;

for(let i=0; i<=n; i++){
    let row = "";

    // Spaces
    for(let j=0; j<=n-i; j++){
        row += "  "
    }

    // Stars
    for(let k=0; k<i*2+1; k++){
        row += "* "
    }
    console.log(row);
}


for(let i=n-1; i>=0; i--){
    let row = "";

    // Spaces
    for(let j=0; j<=n-i; j++){
        row += "  ";
    }

    // Stars
    for(let k=0; k<i*2+1; k++){
        row += "* "
    }
    console.log(row);
}
