//check to see if variable passed in has duplicates. Returns true or false

function areThereDuplicates(){
    if(new Set(arguments).size !== arguments.length){
      return true
    }
    return false
  }
  
  console.log(areThereDuplicates(1,2,3,3))