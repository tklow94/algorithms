

function sockMerchant(n,ar) {
 

  let hash = {}
  
  for(i = 0; i<n; i++ ) {
    if(!hash[ar[i]]){
        hash[ar[i]] = 1;
    }else{
        hash[ar[i]] += 1
    }
  }

  let pairs = n;

  for(j=0; j<Object.keys(hash).length; j++){
    if(Object.values(hash)[j] % 2 != 0){
        pairs--
    }
  }
  
  return Math.floor(pairs/2)
   
}

console.log(sockMerchant(9,[10,20,20,10,10,30,50,10,20]))


