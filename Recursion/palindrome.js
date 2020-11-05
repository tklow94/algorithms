// if str.length is less than one char return false
//recurse at next char iff first and last are the same.
//else false



function isPalindrome(str) {
  
    if(str.length <= 1) return false
    
    if(str[0] === str.slice(-1)){
      isPalindrome(str.slice(1,-1))
      return true
    }
    return false
    }
    
    
    
    
    
    
    
    
    
    isPalindrome('rr')
