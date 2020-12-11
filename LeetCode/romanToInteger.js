// Given a roman numeral, convert it to an integer.


//because things like IV = 4, IX = 9 
// XL = 40, XC = 90
// CD = 400, CM = 900

//We need to establish an algorithm that says something like if I is before V or X then subtract 1, 10, and 100 for the others.


//without the cases mentioned above, we could just loop through the string and add up the values.

//with the cases above, we would need to add an if statement for each where if you get IV, IX you subtract 2, 20, 200 respectively

//lets try a multiple pointer. Add i unless one of the cases show up, then we add j and subtract 1,10,100 respectively.

//both of these approaches have too many rules.
    //Since roman numerals go from greatest to smallest unless in the above cases, create an if statement such that if the roman numeral next to it is equal or greter than to itself then we can add, if it is less than the next one, we subtract them then add.
    

    const dict = {
        I:1, V:5, X:10, L:50, C:100, D:500, M:1000
    }
    
    function romanToInt(str){
        let total = 0;
        for(let i = 0; i<str.length; i++){
            let char = str[i];
            let next = str[i+1];
            if(dict[char]<dict[next]){
                total -= dict[char]
            }else{
                total += dict[char];
            }
            
        }
        return total
    
    }
    console.log(romanToInt('MCMXCIV'))
    
    //Time is O(n);
    //Space is O(n);
                            
    
    
    