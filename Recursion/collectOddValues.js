function collectOddValues(array){
    let result = [] //Outside the helper so it doesn't reset everytime recusive is called
  
    function helper(helperInput){
      if(helperInput.length === 0){ // base case
        return;
      }
      if(helperInput[0]%2 !== 0){
        result.push(helperInput[0])
      }
      helper(helperInput.slice(1)) //call input changes each time.
    }
    helper(array)
    return result
  
  }
  
  console.log(collectOddValues([1,2,3,4,5]))