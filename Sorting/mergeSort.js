//Merge Sort is a faster sorting algorithm. It is O(nlogn) (split is logn and merge is n) Slice is O(n)
    //split up the larger array into arrays of 0 or 1. Then compare them to each other to get them sorted.
    //Need a helper function to handles the merge
        //Merge basically want to say while we have values still in our arrays,
            //if one is smaller than the other it is pushed into the array and that value is incremented.
            //when the while statement is no longer true, we can push all the other values in there as long as there are still values left.
            //All of this will need a results array, and counter values i and j declared outside the while loops.
//For the sort part, it will take in the arr
    //if arr length is less than or equal to 1 return the arr.
    //declare a mid point to create a left and right half to plug into our merge function.


    function merge(arr1, arr2){
        let result = [];
        let i = 0;
        let j = 0;
        while(i<arr1.length && j<arr2.length){
            if(arr1[i]< arr2[j]){
                result.push(arr1[i]);
                i++;
            }else{
                result.push(arr2[j]);
                j++;
            }
        }
        while(i<arr1.length){
            result.push(arr1[i]);
            i++;
        }
        while(j<arr2.length){
            result.push(arr2[j]);
            j++
        }
        return result
    }
    
    function mergeSort(arr){
        if(arr.length <= 1)return arr;
        let mid = Math.floor(arr.length/2)
        let left = mergeSort(arr.slice(0,mid))
        let right = mergeSort(arr.slice(mid))
    
        return merge(left,right)
    }
    
    console.log(merge([1,2,3],[0,1,5]))
    console.log(mergeSort([1,10,2,3]))
    
    //left side sorts first and the merge(left,right) is called. Then right side is done and merge is called to get a sorted right side.
    //Finally mergeSort is called on the sorted left and right sides to merge into one sorted array.
    