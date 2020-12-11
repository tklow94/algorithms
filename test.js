//Given an array of integers, find if the array contains any duplicates.

//Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

//create a set and loop the array into the set.
    //if the set has less length than the array, it contains duplicates.


function containsDuplicate (arr) {
    let set = new Set;
    for(let i = 0; i<arr.length; i++){
        set.add(arr[i])
    }
    if(set.size !== arr.length){
        return true
    }
    return false
}

console.log(containsDuplicate([1,2,3,1]))

//time is O(n)
//space is O(n)