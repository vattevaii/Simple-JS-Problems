// Enter code below  {{}}{{}} this not found in this code
function calcParanthesis(n){
    if(n == 1) return ["()"];
    else{
        let ret = [];
        let one = calcParanthesis(n-1);
        //let two = "()"+calcParanthesis(n-1,retarr);
        for(t of one){
            ret.push("()"+t);
            ret.push(t+"()");
            ret.push("("+t+")");
        }
        return [...new Set(ret)];
        //console.log(one +"   "+ two)
    }
    return;
}

// For n number of paranthesis 