// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// input: [0,1,2] => missing 3

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

// find a formula that can add all numbers up to and including n 
// sum all the numbers in the array
//subtract the two and that is the number.
    //edge case is zero, check for zero. If not there return 0.
        //check for zero by the length of the array being equal to the sum.
    //edge case arr.length = 1, check if 0 is in it if not return 1, check if 0 is in it, if not return 0.

 


    function missingNumber(arr){
        let length = arr.length;
        let target = (length/2)*(length + 1)
        let sum = 0;
       
        for(let i = 0; i<length; i++){
            sum += arr[i]
        }
        if(target !== sum && length !== 0){
            return target - sum
        }
        if(length === 0 && arr[0]===0){
            return 1
        }else{
            return 0
        }
    
    }
    
    console.log(missingNumber([9,6,4,2,3,5,7,8,1]))
    
    //Time O(n)
    //Space O(1)
    
    