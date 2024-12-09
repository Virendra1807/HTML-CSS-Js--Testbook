

function CheckBracketClosing(exp){

    let stack = []

    for(let i=0; i < exp.length; i++){

        if(exp[i]=='('){
            stack.push(exp[i]);
        }else{
            if(stack.length == 0){
                return false;
            }
            stack.pop();
        }
    }

    if(stack.length != 0){
        return false
    }else{
        return true
    }

}


let res = CheckBracketClosing("()(())())");

console.log(res==true ? "True" : "False");

