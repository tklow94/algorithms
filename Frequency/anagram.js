// Check to see if same length
// Create two objects for storing letter freq
  //Two independent loops for freq of each char
// Last loop to check to see if letters are in each objects


function anagram(string1, string2) {
    if (string1.length !== string2.length){
      return false
    }
    let obj = {}
    for (let i = 0; i< string1.length; i++) {
      let letter = string1[i]
      obj[letter] ? obj[letter] += 1 : obj[letter] = 1
    }
  
  
   for (let i = 0; i<string2.length; i++){
     let letter = string2[i]
    if (!obj[letter]){
      return false
    }else{
      obj[letter] -= 1
    }
   
   }
   return true
  }
  
  
  
  
  
  console.log(anagram("trevor", "rovett"))