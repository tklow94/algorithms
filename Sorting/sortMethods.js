// javascript .sort method, converts all values into strings, and sorts them by their unicode. Which is why sorting numbers doesn't work too well. [10,15,2,3] is how that array would be sorted.
//To get numerical order correct, create second function, telling it how we want it sorted.
  //neg is after a, positive is before a, 0 is same
//We can do the same with character length.


function sort(a,b){
    return a-b
  }
  
  [6,4,15,10].sort(sort)//[4,6,10,15]
  