
var fizzBuzzNaive = function(n) {
    let result = [];
    for(let i = 1; i <= n; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            result.push("FizzBuzz");
        } else if(i % 3 == 0) {
            result.push("Fizz");
        } else if(i % 5 == 0) {
            result.push("Buzz");
        } else {
            result.push(String(i));
        }
    }
    return result;
};

//naive approach Time is  O(n), space is O(1)

//hash approach is better because if we change the constraints, add, delete etc. different scenarios, we would have to change the code everytime, just the hash. Time and space are the same. Remeber to look up in a has=h we find a key which is looking up a value without searching through all so O(1)
//concatonate to a string, then push into array.

var fizzBuzz = function(n) {
    let result = []
    let map = {
        3: 'Fizz',
        5: 'Buzz'
    }
    
    for(let i = 1; i <= n; i++){
        let innerResult = ""
        
        for(let key in map){
            if(i % key === 0){
                innerResult += map[key]
            }
        }
       
        if(innerResult === ""){
            innerResult = `${i}` 
        }
        

        result.push(innerResult)
    }
    return result
};

console.log(fizzBuzz(15))