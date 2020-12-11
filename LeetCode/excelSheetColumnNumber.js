//Given a column title as appear in an Excel sheet, return its corresponding column number.

//input "A" => 1
//input "AB" => 28

//only uppercase letters


//first I want to see what the pattern is with this.
    //Each letter is assigned a number based on their place in the alphabet.
    //However, if there is more than one letter present it changes, the key is how this changes, is there a formula we can create? Or will it just be some form of recursion?

    const dict = {
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14,
        O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
      }
    
      function titleToNumber(str){
          let num = 0;
          let power = 0;
          if(str.length === 0) return null;
          for(let i = str.length-1; i>=0; i--){
              num += Math.pow(26, power)*dict[str[i]];
              power ++;
          }
          return num
      }
    
      console.log(titleToNumber(''))
    
      //Time is O(n)
      //Space is O(1)
    
    
    