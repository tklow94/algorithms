// Check to see if the two integers have the same frequency of digits.
 //split integers into array
// if lengths aren't equal return false
// create an object
//Loop through int1 and push into object
//Loop though int2, check if exists -1, else return false



function sameFrequency(int1, int2){
    let arr1 = int1.toString()
    let arr2 = int2.toString()
    let obj = {}
    if (arr1.length != arr2.length){
      return false
    }
    for (let i = 0; i< arr1.length; i++){
      obj[arr1[i]] ? obj[arr1[i]] += 1 : obj[arr1[i]] = 1
    }
    for (let i = 0; i< arr2.length; i++){
      if (!(obj[arr2[i]])){
        return false
      }else {
        obj[arr2[i]] -= 1
      }
      
    }
    return true
  }
  
  
  console.log(sameFrequency(182, 281))