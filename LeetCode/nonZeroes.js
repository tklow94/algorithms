// move all zeroes while keeping the array in place
// [0,1,0,2,3] => [1,2,3,0,0]
//bubble sort won't work because if we encounter another zero, it fails in it's swap.



function swap (arr,a,b){
    [arr[a],arr[b]] = [arr[b],arr[a]] 
}

// multiple pointers, one to keep track of index of the last nonzero, and one that moves to find nonzeroes
    //loop through and find nonZero elements and place them at index+1, while incrementing nonZeroIndex


function zeros(arr){
    let nonZeroIndex = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]!=0){
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++
        }
    }
    for(let i = nonZeroIndex; i<arr.length; i++){
        arr[i] = 0
    }
    return arr
}

var moveZeroes = function(nums) {
    // i is fast pointer
    for (let i = 0, lastNonZero = 0; i < nums.length; i++) {
        // lastNonZero is slow pointer and tracks where next non zero num should go
        if (nums[i] !== 0) {
            let temp = nums[lastNonZero];
            // # operations will be lastNonZero, zeros will be swapped to the end
            nums[lastNonZero] = nums[i];
            nums[i] = temp;
            // move snow pointer
            lastNonZero++;
            
			// example: [0, 1, 0, 2]
            // [*0/, 1, 0, 2]
            // [1, *0/, 0, 2]
            // [1, *0, 0/, 2]
            // [1, 2, *0, 0/]
            // "*" is where lastNonZero tracks
            // "/" is where fast pointer is
        }
    }
};



//This one is the same as above and optimizes for less operations.
function zero(arr){
    for(let i =0, j = 0; i<arr.length; i++){
        if(arr[i]!== 0){
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            j++
        }
    }

}




console.log(zero([1,3,0,0,12]))
                          
                     


//Time is O(n)
//Space if O(1)
                   
                     
                   
                   
                   
                 
                    

            
                    
                