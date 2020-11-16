//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//[2,2,1] => 1

//Easiest is nested for loops, but lets truy a hash.


//here we have Time On and space On

function singleNumber(nums){
    let set = new Set();
    for(var i = 0; i<nums.length; i++){
        if(!set[nums[i]]){
            set[nums[i]] = 1
        }else{
            set[nums[i]] += 1
        }        
    }
    for(key in set){
        if(set[key] === 1){
            return key
        }
    }
}

console.log(singleNumber([4,1,2,1,2]))

//Could you implement a solution with a linear runtime complexity and without using extra memory

//for(key in object) is for looping over keys.

