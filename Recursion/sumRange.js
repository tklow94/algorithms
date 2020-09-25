function sumRange(num){
    if(num === 1) return 1 //base case
    return num + sumRange(num -1) //call changes to give us 3 + 2 +1
    
  }
  
  console.log(sumRange(3))

    // return 3 + sumRange(2)
    //   sumRange(2) 
    //     return 2 + sumRange(1)
    //       return 1