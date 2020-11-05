// larger values bubble to the top one at a time by comparing pairs one at a time and swapping them so the highest gets further to the top. Takes multiple passes through the array. Each time loop through, have less items to swap.


//loop from the end to the beggining with var i
//inner loop j from beg to i-1
//if arr[j] > arr[j+1] swap the two
//return sorted array

//optimize for a nearly sorted array, if in the last pass there was no swap, stop the loop and return the array



function bubbleSort(arr){
    let noSwaps 
    for(let i = arr.length; i>0; i--){
      noSwaps = true
      for(let j= 0; j<i-1; j++){
        if(arr[j] > arr[j+1]){
          [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
          noSwaps = false
        }
      }
      if(noSwaps) break;
      console.log(arr)
    }
  return arr
  }
  
  bubbleSort([1,5,3,7,-1])
  
            // (1,3,5,-1,7)
            // (1,3,-1,5,7)
            // (1,-1,3,5,7)
            // (-1,1,3,5,7)
  
  //Time is O(n^2) worst case, O(n) is best case.