function reverse(x) {
    let newX = x.toString().split('')
    let rev = [];
    if (newX[0] === "-"){
        newX.shift()
        rev.push("-")
    }
    let i = newX.length
    while(i >= 0){
        rev.push(newX[i])
        i--
    }
    let ans = parseInt(rev.join(''))
    if (ans > 2147483647 || ans < -2147483647){
        return 0
    } else {
        return ans
    }
};

console.log(reverse(-1534236469))
