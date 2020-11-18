// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

//You may assume that the array is non-empty and the majority element always exist in the array.

//[3,2,3] => 3

//create hash that stores keys as numbver of times something appears.
    //for key in hash loop through to find the value that is the greatest. 
    //return key[value] of that number


    function majorityElement(arr){
        let hash = {}
        let majority = Math.floor(arr.length/2)
        for(let i = 0; i<arr.length; i++){
            // if(!hash[arr[i]]){
            //     hash[arr[i]] = 1
            // }else{
            //     hash[arr[i]] += 1
            // }
            !hash[arr[i]] ? hash[arr[i]] = 1 : hash[arr[i]] += 1
            for(let key in hash){
                if(hash[key] > majority) return key
            //   if(hash[key] > max){
            //     max = hash[key];
            //     maxKey = key;
            //   }  
            }
        
            
        }
     
        
    }
   
    
    console.log(majorityElement([3,2,3,3]))

    //Time is O(n), space is O(n)
     //shorten code with ternary
     //optimize code by saying if the value is greater than or equal to our majority n/2 then we can stop looking.


     //How to optimize Time while sacrificing space?
     //Use .sort method which uses logic that the majority element will always take up half the space and therefore always exist at n/2 location

     var majorityElement = function(nums) {
        if(nums.length<3) return nums[0]; //conditional if we have 2 or less elements in the array
        let sorted = nums.sort((a,b)=>{return a-b}); // so the numbers if equal to or greater than 10 sort correctly
        console.log(sorted);
        let mid = Math.floor(nums.length/2);
        return nums[mid];
    };
    console.log(majorityElement([3,2,3,3,10,10,10,10]))
 
//Can we assume there is only one majorityElement?


function sort(a,b){
    return a - b
}

function mElement(arr){
    if(arr.length < 3) return arr[0];
    let mid = Math.floor(arr.length/2);
    return arr.sort(sort)[mid]
}
console.log(mElement([1,2,10,10]))

//Time is greater than O(n), different depending on browser and language.
//space is O(1) because sorted arr in place.