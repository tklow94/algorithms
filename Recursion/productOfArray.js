//returns product of all values in the array
//base case, when array length is empty return newArray
//slice(1)



function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3]))