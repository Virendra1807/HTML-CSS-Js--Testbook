
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
