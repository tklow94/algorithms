//jump on anyt cloud +1 or +2
//only clouds labelded 1 are bad, 0 are good
//alays possible to win
//return minimum number of jumps


function clouds(ar) {
    let i = 0;
    let j = 1
    let jumps = 0;
    while(j<ar.length){
        if(ar[j] != 0){
            i += 2;
            j += 2;
            jumps++;
        }else {
           if(ar[j+1]==0){
            i += 2;
            j += 2;
            jumps++;
           }else {
               i++;
               j++;
               jumps++
           }
        }
    }
    return jumps

}

console.log(clouds([0,1,0,0,0,1,0])) //should be 3 jumps
                            