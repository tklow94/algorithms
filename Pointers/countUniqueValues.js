
// create two pointers
// p2 must not exceed array length
// move p1 only when p2 != p1
  // replace array[p1] with the unique value
// return the new position of p1 +1


function countUniqueValues(array) {
    let p1 = 0
    let p2 = 1
   
    for (p2; p2< array.length; p2++){
      if(array[p1] !== array[p2]){
        p1 ++
        array[p1] = array[p2]
      }
      else {
        console.log("undefined")
      }
    
    }
      return p1 + 1
  }
   
  
  
  console.log(countUniqueValues([1,1,1,1,1,2]))