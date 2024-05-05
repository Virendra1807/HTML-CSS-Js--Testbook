// Rectangle shape

let n = 6;

for(let i=1; i<=n; i++){
    let row = "";
    for(let j=1; j<=n; j++){
        if(i==1 || j==1 || j==n || i==n){
            row += "* ";
        }else{
            row += "  ";
        }
    }
    console.log(row);
}