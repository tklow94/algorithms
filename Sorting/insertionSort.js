//pick first number as sorted, next number as unsorted and compare and swap. Once swap, added to the sorted section and we move on.


function insertionSort(arr){
    let current;
    for(let i = 1; i<arr.length; i++){
        current = arr[i];
        for( j = i-1; j>=0 && arr[j]>current;j--){
            arr[j+1] = arr[j]
            console.log(arr)
        }
        arr[j+1] = current
    }

}

console.log(insertionSort([5,1,10,2,4,3]))