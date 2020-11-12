//like merge sort, quick sort relies on the fact that arrays are already sorted for 1 and 0 length. Overarching theme of this sort method is that we declare a value to be a pivot point. Determine where the pivot point should be, and move all values lower than it to the left and all values higher than it to the right. Repeat the process recursively on the left and right side.

//Pivot Helper takes in an array and a start and end index. Returns the index in which the pivot needs to be swapped with. Basically create a for loop to swap values to move smaller ones to the left and larger ones to the right. If pivot value is greater than that i value, we will swap it with our swapIdx and i.
//Out of the loop we can swap the pivot to its rightful spot.

//Best is O(nlogn) worst is O(n^2)
    //decomposition is log(n) to get to 1 element array (best case)
        //Each decomposition we make O(n) comparisons
    //If our data is already sorted and we picked the first element in the array as the pivot, each decomposition is only 1 item pivoting on so the decomposition becomes O(n). And overall time is O(n^2) time.
    //Best to pick a median value if possible.




function pivot(arr, start = 0, end = arr.length -1){
    function swap(arr,i,j){
        [arr[i],arr[j]] = [arr[j],arr[i]]
      }
    let pivot = arr[start];
    let swapIdx = start;
    for(let i = start + 1; i<=end; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr,swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

//Assign recusive breakpoint when subarray is 1, when left and right are equal.

function quickSort(arr, left = 0, right = arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex -1);
        quickSort(arr, pivotIndex +1, right);
    }
    return arr
}