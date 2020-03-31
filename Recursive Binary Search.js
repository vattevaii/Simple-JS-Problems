function rBinarySearch(arr, num, start, end){
    
    if(start === undefined){
        start = 0;
    }
    if(end === undefined){
        end = arr.length-1;
    }
    
    // Enter code below
    let check = (start+end)%2 == 0? (start+end)/2 : (start+end-1)/2;
    if(arr[check] == num) return true;
    if(start >= end) return false;
    if(arr[check] > num) return rBinarySearch(arr, num, start, check-1);
    if(arr[check] < num) return rBinarySearch(arr, num, check+1, end);
}