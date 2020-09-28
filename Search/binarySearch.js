//Binary search eliminates half of the remaining elements at a time.
//Only works for sorted arrays.
//faster form of search


//accepts a sorted array of numbers and a value
//create left and right pointer at beg and end of array respectively
//while left comes before right...
  //create middle pointer
  //if find value return index
  // if less than move right down
  //if greater than move left up
//return -1 if don't find value





function binarySearch(arr, num){
    let start = 0
    let end = arr.length - 1
    let mid = Math.floor((end - start)/2)
    
    while(arr[mid] !== num && start <= end){
      if(num < arr[mid]) end = mid - 1
      else start = mid + 1
     mid = Math.floor((end - start)/2)
    }
    return arr[mid] === num ? mid : -1
    
    }
    
    
    binarySearch([1,2,3,4,5], 2) //return 3
    
    
    
    //Time complexity best case is O(1) if we find it right away, if not average and worst case are the same, O(log(n)) b.c on average, it will eventually find or not find and reach a peak, since we are halving each time we look, it will look like log(n) graph not n. Or in reality log base 2 of n, meaning the max time it will take to find the correct value in an array of 32 elements is 5, since 2^5 is 32.
    
    
    
    
    
    