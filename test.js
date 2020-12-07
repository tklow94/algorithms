//Say you have an array prices for which the ith element is the price of a given stock on day i.

//Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

//Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

//input [7,1,5,3,6,4] => 7
    //buy on day 2 then sell on  day 3, buy on day 4 and sell on day 5.


//   [7,1,5,3,6,4]
    
  
//assign three variables, first, second, and sum
//try multiple pointer, if difference is a negative number, move j. If not, store as first and keept moving j. once j is equal to array legnth, move i and reset j to i+ 1. Repeat loop but store new value as second, and put an if statement that if second > first, first = second and second = first.

    //isn't working too well with multiple pointers... might be possible but since it is taking way too long for each scenario, lets try thinking another way.

    //Lets picture it as a graph. Plot the points and see what you see.
    //we are trying to get max profit, on the graph i see the max profit as the max.
    //The max profit will just be the combined height of the positive slope.

function stock (arr){
    let max = 0;
   for(let i = 1; i <arr.length; i++){
       if(arr[i] > arr[i-1]){
           max += arr[i] - arr[i-1]
       }
   }
   return max;

}

console.log(stock([1,2,3,4,5]))

//Time is O(n)
//Space is O(1)
          
                   
