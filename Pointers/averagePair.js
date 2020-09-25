// Find if there is a pair that gives the average
  //declare two pointers one at 0 one at 1
  //Add the values together and divide by 2 and see if it equals avg. 
    //If not, increment pointer @ 1 by 1 
    //If yes, return true


    function averagePair(array, avg) {
        let start = 0
        let end = array.length -1
        while(start < end){
          let average = (array[start] + array[end]) / 2
          if(average === avg){
            return true
          }else if (average < avg){
            start++
          }else end--
        }
        return false
        }
        
        
        console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))