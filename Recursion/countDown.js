function countDown(n){
    if(n <= 0){ 
      console.log("All done!")
      return;//return stops the call
    }
    console.log(n)
    n-- //n is now 4
    countDown(n) //countDown with 4 (diff call each time)
  }
  
  
  countDown(5)