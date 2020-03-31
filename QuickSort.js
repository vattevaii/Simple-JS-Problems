//Not Correct upto now

function QuickSort(arr){
    sort(arr,0,arr.length - 1);
    return arr;
}

// Enter code below
function sort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            sort(items, left, index - 1);
        }
        if (index+1 < right) { //more elements on the right side of the pivot
            sort(items, index+1, right);
        }
    }
    return items;
}

function partition(items, left, right) {
    var pivot   = items[left], //first element
        i       = left+1, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot && i<j) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    swap(items,left,j);
    return i;
}

function swap(arr, lI, rI){
   let temp = arr[lI];
   arr[lI] = arr[rI];
   arr[rI] = temp;
}