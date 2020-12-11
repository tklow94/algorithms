//converts keys into valid array indices.
//allows us to pass in data of any size, and receive an output of a fixed size, meaning the size of the data output no matter the size of the input is the same.
    //"hello" => 12
    //"Trevor is the best" => 13


//a good hash function is fast, constant time O(1)

//Distributes keys uniformly, meaning random assignment amd/or evenly spread. Doesn't return the same output for different inputs.

//Same input results in the same output everytime. It is deterministic.


//every character has a numeric value associated with it accesssed with 97, and if you subtract 96 from the charCodeAt then we get the position in the alphabet.

//though process is to add up all the character codes unicodes to get the unique numerical identifier for that string.


//for hash that works on strings only!
//Not constant Time, it is linear!
// Not very random, data is highly clustered.

function Hash(key, arrayLen){
    let total = 0;
    for(let char of key){
        // map "a" to 1, "b" to 2, etc.
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen;
    }
    return total;
}

//returns an index that fits into our arrayLen that is a constraint.



// lets try to increase to constant time and increase the randomness.

//going to be using prime numbners to increase the randomness
//going to be adding a Math.min(key.length, 100) so that our loop only goes through a constant number of times.

function Hash2(key, arrayLen){
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i< Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}
//Prime number for a very complex reason improves the randomness.
//Math.min constraint allows for constant time.




