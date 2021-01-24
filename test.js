function countingValleys(steps, path) {
    ar = path.split("")
    let count = 0;
    let valleys = 0;
    for(let i = 0; i<steps; i++) {
        if(path[i] === "U"){
            count++;
        }else{
            count--;
        }
        if(count === 0 && path[i] === "U"){
            valleys++
        }
    }
    return valleys;

}

console.log(countingValleys(8,'UDDDUDUU'))