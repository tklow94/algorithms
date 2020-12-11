// Basic Hash table class...

class HashTable {
    constructor(size=53){
        this.keyMap = new Array(size);//create a new array of that size
    }
    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i< Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total
    }
}


//set method will set a key and a value to an index.
    //hash the key
    //store the key-value pair in the hash table array via separate chaining (nested if there is a collision)
    
