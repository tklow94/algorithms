//radix sort is often used for sorting numbers. It is better in time complexity than the other two because of the lack of comparisons present in the other two.
    //The general way to tackle radix sort is to sort the numbers digits into buckets.
    //We only have to loop through the numbers m number of times where m is the number of digits in the largest one.
    //The buckets are 0-9 base 10. 
    //Once the numbers are sorted into buckets, we can then concat the buckets to create the sorted array.

    //We will need three helper methods, one to get the digit in the number
    //One to find the maxDigits
    //and one to find count the number of digits in a number. Lets start withn the main function



    function getDigits(num,pos){
        //To find the digit value, we need to
        return Math.floor(Math.abs(num)/Math.pow(10,pos))%10
       
    }
   
    function digitCount(num){
        //123 => 3
        //Math.log10(num) returns the exponent which needs to be applied to reach the num
        if(num === 0 )return 1;
        return Math.floor(Math.log10(Math.abs(num))) +1
    }

    function maxDigits(arr){
        let maxDigits = 0;
        for(let i = 0; i<arr.length; i++){
            maxDigits = Math.max(maxDigits, digitCount(arr[i]))
        }
        return maxDigits
    }


    function radixSort(arr){
        let maxDigit = maxDigits(arr);
        for(let i = 0; i<maxDigit; i++){
            let buckets = Array.from({length:10}, () => [])
            for(let j = 0; j<arr.length; j++){
                let digit = getDigits(arr[j],i)
                buckets[digit].push(arr[j])
            }
            console.log(buckets)
            arr = [].concat(...buckets)

        }
        return arr
        //get maxDigits
        //set first loop to only loop maxDigits
            //create buckets here
        //inner loop will loop through and// place the digits in the buckets
        //exit inner loop to concat
        //return arr
    }

    console.log(radixSort([100,1,10]))
   