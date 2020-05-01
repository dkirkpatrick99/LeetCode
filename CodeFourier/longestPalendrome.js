function longestPalindrome(s) {
    let pals = {};
    if(!s.length) return "";
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < s.length; j++){
            let word = s.slice(i,j + 1);
            let rev = word.split('').reverse().join('');
            if(word === rev){
                let newWord = s.slice(i, j + 1)
                pals[newWord] = newWord.length
            }
        }
    }
    let maxLength = Math.max.apply(null, Object.values(pals)) 
    let idx = Object.values(pals).indexOf(maxLength)
return pals;
    return Object.keys(pals)[idx]
};

console.log(longestPalindrome("jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel"))