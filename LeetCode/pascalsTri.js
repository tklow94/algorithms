//Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

//    1
//   1 1
//  1 2 1
// 1 3 3 1

// first and last is always 1, when we reach the num = 1 we return array of 1. When we reach row of zero we return our triangle arrays
    //How do we get the other arrays to print?
        //create a variable triangle that initiates a nested array [[1]].
        //loop time... or maybe recursion? lets try a loop first.
            //loop through and create arrays starting with row = 1 and incrementing to the limit of numRows.
            //Assume the pattern that the offset of the previous row equals the next row.
                //   1 2 1 0
              //   + 0 1 2 1
            //       -------
             //      1 3 3 1




             function generate(numRows){
                if (numRows === 0) return [];
                let triangle = [[1]]
                for(let i = 1; i<numRows; i++){
                    let prev = triangle[triangle.length -1];
                    let lShift = [...prev, 0]; 
                    let rShift = [0, ...prev];
            
                    let current = lShift.map((r,i) =>r + rShift[i]); // current row of lShift + rShift
                    triangle.push(current);
                 
                }
                
                
                return triangle
            }
            
            console.log(generate(5))
            
            //Time is O(n^2)
            //Space is O(n^2) b/c 2-d array.