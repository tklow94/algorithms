//Write a function that reverses a string. The input string is given as an array of characters char[].

//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

//You may assume all the characters consist of printable ascii characters.

//Input: ["H","a","n","n","a","h"]
//Output: ["h","a","n","n","a","H"]


function swap(arr, i, j){
    [arr[i],arr[j]] = [arr[j],arr[i]]
}

function reverseString(arr){
    //multiple pointer
        //if start !==end
        //start one pointer at start and one at end
        //swap values
    let start = 0
    let end = arr.length-1

   while(start < end){
       swap(arr,start,end);
       start++;
       end--
   }
   return arr

}

console.log(reverseString(["H","a","n","n","a","h"]))