function findLongestSubstring(str) {
    let start = 0
    let end = 0
    let count = 0
    let set = new Set()
  
    
    while(start < str.length && end < str.length){
      let char = str.charAt(end)
      if(!set.has(char)){
        set.add(char)
        console.log(set)
        end++
        count = Math.max(count, end - start)
      }else{
        set.delete(str.charAt(start))
        console.log(set)
        start++
      }
    }
    return count
  }
  
  
  console.log(findLongestSubstring('thisisawesome'))