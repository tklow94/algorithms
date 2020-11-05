//Compare pairs of values to find the minimum. Compare index. 0, 1 if 1 is the min, compare 1 and 2, etc until reach the end. The min number is swapped with the first index number.

// store first element as smalled value
//compare this item to next in the array until find smaller number
//if smaller is found designate (index) it to be the new minimum and continue
//swap at end
//repeat
function selectionSort(arr) {
    const swap = (arr, idx1, idx2) =>
      ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  
    for (let i = 0; i < arr.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[lowest] > arr[j]) {
          lowest = j;
        }
      }
      if (i !== lowest) swap(arr, i, lowest);
    }
  
    return arr;
  }



//Time is O(n^2)
//Use over bubble sort if we want to minimize the number of swaps. Otherwise, bubble sort could be at best O(n).