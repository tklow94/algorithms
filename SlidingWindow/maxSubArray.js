//Find the highest sum of n consecutive integers in the array
//Create window of n
//Sum the window
  //store in var
//Slide window one down
  //sum new window
  //if new window > old repalce if not keep sliding



  function maxSubArraySum(arr, num){
    let maxSum = 0
    let tempSum = 0
    if (arr.length < num) return null
  
    for (let i = 0; i < num; i++){
      maxSum += arr[i]
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++){
      tempSum = tempSum - arr[i - num] + arr[i]
      max = Math.max(maxSum, tempSum)
  
    }
    return max
  }
  
  
  console.log(maxSubArraySum([1,2,3,4,5,6], 3))