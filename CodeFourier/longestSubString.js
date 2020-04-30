function lengthOfLongestSubstring(str) {
    let counts = [];
    let run = [];
    let splits = str.split('')
    if(!str.length) return 0
    while (splits.length){
        let letter;
        for(let i = 0; i < splits.length; i++) {
            if(!run.includes(splits[i])) {
                run.push(splits[i]);
                
            } else {
                debugger
                letter = splits[i]
                // run.push(splits[i]);
                break;
            }
        }
        debugger
        if (run.length) {
            
            debugger
            counts.push(run.length);
            splits = splits.slice(1)
            run = [] 
        }
    }
    return Math.max.apply(null, counts)
};

console.log(lengthOfLongestSubstring('dvdf'))