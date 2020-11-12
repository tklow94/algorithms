//radix Sort
    //faster than quick and merge sort because of the way it does comparisoins, but it only works for a list of numbers. It makes n number of comparisons with n being then number of digits in the largest number...
    //Helper functions sort the numbers into buckets n times, into base m number of buckets (if m is base ten, then we sort into 10 buckest 0-9)
        //Start with the right most number and put into buckets 0-9. If there is no number put into 0. This is how the numbers get sorted.

//First need a helper getDigit, which takes in a num and a position and returns the value at that opposite position in the num.
//input 102,0 => 1

function getDigit(num,pos){
    return Math.floor(Math.abs(num)/Math.pow(10,pos)) %10
}

console.log(getDigit(1234,0))

