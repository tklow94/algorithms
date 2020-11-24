//Given two strings s and t , write a function to determine if t is an anagram of s.
//only lowercase letters
//output true or false

//condition if not same length return false
//create an object to store letters and their frequencies
//create for loop to put first string characters inside
//create for loop to subtract characters inside. If it cannot subtract return false, if it completes the loop return true



// function validAnagram(s,t){
//     let set = {}
//     if(s.length !== t.length) return false
//     for(let i=0; i<s.length; i++){
//         let char = s[i];
//         if(set[char]){
//             set[char] +=1
//         }else{
//             set[char] = 1
//         }  
//     }
//     for (let i = 0; i<t.length; i++){
//         let char = t[i];
//         if(!set[char] || set[char] === 0){
//             return false
//         }else{
//             set[char] -= 1;
//         }  
//     }
//     return true  

// }

// console.log(validAnagram('trevor','roverr'))

//time for this one is O(n). Space is O(1) because table size is constant because there are only 26 letters in the alpahbet. 


//what if inputs contain unicode characters


//Lets DRY this code

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const map = {};
    
    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
    }
    
    for (let i = 0; i < t.length; i++) {
        if (map[t[i]]) map[t[i]]--;
        else return false;    
    }

    return true;
};
    
    console.log(validAnagram('trevor','roverr'))