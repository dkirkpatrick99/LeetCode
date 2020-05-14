function myAtoi(str) {
    let newArr = [];
    let testString = str.split('');
    let string = str.split('');
    let i = 0;
    let j = 0;
    let k = 0;
    let flag = false;
    let alph = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '
    let accepted = "0123456789-+"
    let signs = "-+"
    let spaceFlag = false
    testString = testString.filter(char => (char !== ' '))
    if (!accepted.includes(testString[0]) || str === '-' || str === '+') return 0

    
    while (i < string.length){

        if (string[i] === ' ' && accepted.includes(string[i + 1])){
            flag = true
            i++
            continue;
        } else if(accepted.includes(string[0])) {
            flag = true
        }

        if(!alph.includes(string[i]) && flag === true && accepted.includes(string[i])){
            
            newArr.push(string[i])
        } else if(!accepted.includes(string[i]) && string[i] !== ' '){
            flag = false
            spaceFlag = true
        }
        
        if (accepted.includes(string[i]) && string[i + 1] === ' '){
            flag = false
            spaceFlag = true
            
        }

        if (!flag && spaceFlag) break;
        i++
    }
    let rev = newArr.reverse()

    if (newArr.length === 1 && (newArr[0] === '-' || newArr[0] === '+')) return 0
    let unwanted = false;
    let startIdx;
    while(j < rev.length -1){
        
        if (signs.includes(newArr[j]) && signs.includes(newArr[j + 1])){
            rev = rev.slice(j + 2)
        }
        j++
    }
    newArr = rev.reverse()
    if (newArr.length === 1 && (newArr[0] === '-' || newArr[0] === '+')) return 0
    if(newArr.length === 0) return 0

    while(k <= newArr.length -1){
        
        if (signs.includes(newArr[k]) && signs.includes(newArr[k + 1])){
            return 0
        }
        k++
    }

    if(newArr[0] === '+') newArr.shift()

    let ans = parseInt(newArr.join(''))
    if (ans > 2147483648 || ans < -2147483648){
        if(ans > 0){
            return 2147483647
        } else {
            return -2147483647
        }
    } else {
        return ans
    }
    
};

// console.log(myAtoi("  +--+-+-+++1a.123++"))