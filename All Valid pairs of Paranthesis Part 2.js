
function calcParanthesis(n,index,retarr,paranthesis,open,close){
    if(index >= n*2)
    {
        retarr.push(paranthesis);
        return;
    }
    else{
        if(open>=close && open<n) calcParanthesis(n,index+1,retarr,paranthesis+"(",open+1,close);
        if(open>close) calcParanthesis(n,index+1,retarr,paranthesis+")",open,close+1);
    }
}


function noOfParanthesis(n){
    let retarr = [];
    calcParanthesis(n,0,retarr,"",0,0);
    return retarr;
}