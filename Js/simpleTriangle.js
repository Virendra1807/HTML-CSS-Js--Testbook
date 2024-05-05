
let n = 5;
for(let i=0; i<=4; i++){
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