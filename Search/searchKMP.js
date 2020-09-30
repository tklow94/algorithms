//We need to create a prefix-suffix table to find where the LPS repeats. We need to LPS to help determine how far to move the counter on the string.


function makeTable(pattern){
    let table = [0]
    let i = 0
    let j = 1
    while(j<pattern.length){
      if(pattern[i] === pattern[j]){
        table[j] = i + 1;
        i++
        j++
      }else if(i===0){
        table[j] = 0
        j++
      }else{
        i = table[i - 1]
      }
    }
    return table
    }
    
    
    makeTable('abcdabcf')
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // function makeTable(word) {
    //   const patternTable = [0];
    //   let i = 0;
    //   let j = 1;
    
    //   while (j < word.length) {
    //     if (word[i] === word[j]) {
    //       patternTable[j] = i + 1;
    //       j += 1;
    //       i += 1;
    //     } else if (i === 0) {
    //       patternTable[j] = 0;
    //       j += 1;
    //     } else {
    //       i = 0;
    //     }
    //   }
    
    //   return patternTable;
    // }
    
                    
    // makeTable('abcdabcfabc')
              