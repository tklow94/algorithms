function countFrom(string,end){
    let total = 0;
  for(let i = 0; i < end; i++) {
    if(string[i] === "a") total++
    
  }
  return total;
}

function repeatedString(s,n){
    let count = countFrom(s,s.length);
    let repeat = Math.floor(n/s.length)
    let remainder = n % s.length
    let numRem = countFrom(s,remainder)
  
   console.log([count,repeat,numRem])
    return count*repeat + numRem
}

console.log(repeatedString('aba',10))//return 7 aba aba aba a