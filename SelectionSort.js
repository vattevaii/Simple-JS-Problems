function SelSort(arr){
    // Enter code below
    for(let i=0; i<arr.length; i++){
        let min = i;
        for(let j = i+1; j<arr.length; j++)
            min = (arr[min] > arr[j])? j : min;
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
return arr;
}