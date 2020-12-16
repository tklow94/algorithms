// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1. 
    //Assume string only contains lowercase letters
    //input: "trevor" => 0

    //since it wants to return the index, we possibly need to store the index of char somewhere.

    //we could go through and put one pointer at the first char then the other pointer loops through until it finds a duplicate. Once we find a letter without a duplicate we can return it. The problem with this approach is if there are no non repeating or if it is at the end the time complexity will be pretty trash.

    //we could create a hash to store frequency of values. This would be time complexity of O(n). Then we can do another separate loop through the string and compare to our hash. Let's try this one then see if we can refractor later.

    function firstUniqChar(string){
        var freq = {};
        for (let i=0; i<string.length;i++) {
            let character = string[i];
            if (freq[character]) {
               freq[character]++;
            } else {
               freq[character] = 1;
            }
        }
        for (let j = 0; j<string.length; j++){
            if(freq[string[j]] === 1){
                return j
            }
        }
        
      return -1
    }

    console.log(firstUniqChar('loveleetcode'));

    //Time O(n)
    //Space O(1) (Alphabet is only 26 letters)




