// Enter code below
for(let i=1;i<arr.length;i++){
    let el = i;
    while(el>0){  
        if(arr[el-1]>arr[el]){
        let temp = arr[el];
        arr[el] = arr[el-1];
        arr[el-1] = temp;
        el--;
        }
        else break;
    }
}
console.log(arr);
return arr;
