//radix Sort
    //faster than quick and merge sort because of the way it does comparisoins, but it only works for a list of numbers. It makes n number of comparisons with n being then number of digits in the largest number...
    //Helper functions sort the numbers into buckets n times, into base m number of buckets (if m is base ten, then we sort into 10 buckest 0-9)
        //Start with the right most number and put into buckets 0-9. If there is no number put into 0. This is how the numbers get sorted.

//First need a helper getDigit, which takes in a num and a position and returns the value at that opposite position in the num.
//input 102,0 => 2

function getDigit(num,pos){
    return Math.floor(Math.abs(num)/Math.pow(10,pos)) %10
}
//Math.pow(exponent, base) gives base^exp. 
    //Divide abs value by its base ten placeholder value
//modulo 10 gives us the remainder after dividing.
//dividing module by ten always gives us the value of the ones place. 



//Still need to find digitCount of all numbers, and then a function to determine which one of those has the most digits.



//Easiest way is to use the Math.log10(num) which returns the exponent of 10^x to become the num given. 10 would be 1, 100 be 2, etc. Therefore the find how many digits there are we need to +1. Remeber log of 0 or less is NaN, so we need to add a conditional to handle just the 0, the NaN for negative numbers can be handles with a Math.abs().
function digitCount(num){
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) +1
}




//Now lets find out which number has the most digits!



function mostDigits(arr){
    let maxDigits = 0;
    for(let i = 0; i<arr.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(arr[i]))
    }
    return maxDigits
}




function radixSort(arr){
    let maxDigitCount = mostDigits(arr);
    for(let i = 0; i<maxDigitCount; i++){
        let digitBuckets = Array.from({length: 10}, () => [])
        //two arguments, length of the array as an object, and the second a function that return empty arrays.
        for(let j = 0; j<arr.length; j++){
            let digit = getDigit(arr[j],i)
            digitBuckets[digit].push(arr[j])
        }
        arr = [].concat(...digitBuckets)
    }
    return arr
}
console.log(radixSort([10,1,100]))

//Now lets implement them all together
//accepts an array of numbers
//find out how many loops are in a single number (number of digits)
//Create buckets for each digit and place each number in the corresponding bucket with forEach loop x2. One loop for making the buckets and another for placing the numbers.
//Replace our existing array with the bucket values 
//return list


