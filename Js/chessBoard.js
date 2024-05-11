

function chessBoard(n){
    for(var i=1; i<=n; i++){
        var row = "";
        for(var j=1; j<=n; j++){
            if((i+j)%2==0){
                row += "X";
            }else{
                row += " ";
            }
        }
        console.log(row);
    }
}

chessBoard(8);