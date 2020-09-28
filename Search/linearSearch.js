//Linear search is looking at each element and checking if it is what we are looking for...indexOf, .includes are doing this.
// basic search methods in JS all use Linear Search

//function accepts an array and a value
//loop through array and check if current is equal to value passed in and return index
// if not found return -1



function linearSearch(array,num) {
    for(let i = 0; i<array.length; i++){
      if(array[i] === num){
        return i
      }
      
    
    }
      return -1
  
  }
  
  
  linearSearch([2,5,3,4,7], 3)
  
  //time is O(n) b/c for loop
  //space is O(1) returning value
  
  
  