//searching substrings within strings
// parameters are two strings
//loop over longer string
//loop over shorter string
//if char don't match break out of inner loop
// if they do match keep going
//if inner loop completes and find  match increment counter by 1
//return count


function naiveSearch(long, short){
    let count = 0
    for(let i = 0; i<long.length; i++){
      for(let j=0; j<long.length; j++){
        if(short[j] !== long[i+j]) break;
        if(j === short.length -1) count++
      }
    }
    return count
  
  }
  
  
  naiveSearch('racecar is a car', 'car')
  
  
  //Time is O(n^2), we can minimize to O(n + m ) with KMP approach.