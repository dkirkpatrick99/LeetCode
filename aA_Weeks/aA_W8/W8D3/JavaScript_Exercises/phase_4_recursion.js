function range(start, end) {
    if (end === start){
        return [start];
    };

    let result = range(start, end - 1);
    result.push(end);
    return result;
};
console.log(`range(3, 10) = ${range(3, 10)}`);


function sumRec(arr) {
    if (arr.length < 2){
        return arr[0];
    };

    let result = sumRec(arr.slice(0, arr.length - 1));
    result = result + arr[arr.length - 1];
    return result;
};
console.log(`sumRec([1, 3, 5]) = ${sumRec([1, 3, 5])}`);


function exponent(base, exp) {
    if (exp === 0){
        return 1;
    };
    let result = exponent(base, exp - 1) * base;
    return result;
};
console.log(`exponent(2, 4) = ${exponent(2, 4)}`);

function fib(n) {
    if (n === 2){
        return [0, 1];
    };
    
    if (n === 0){
        return [];
    };

    let result = fib(n - 1)
    result.push(result[result.length - 2] + result[result.length - 1]);
    return result;
};
console.log(`fib(5) = ${fib(5)}`);


// function deepDup(arr) {
//     let dupArray = [];

//     for (let i = 0; i < arr.length; i++){
//         if (arr[i].isArray){
//             deepDup(arr[i]);
//         } else {
//             dupArray.push(arr[i]);
//         }
//     }
//     return dupArray;
// }
// console.log(`deepDup([[4,2], [1], [3,7,[9]]) = ${deepDup([[4,2], [1], [3,7,[9]]])}`);


function bsearch(nums, target) {
    if (nums.length === 0){
        return -1;
    }
    const mid = Math.floor(nums.length / 2)
    if (nums[mid] === target){
        return mid;
    } else if (target < nums[mid]) {
        const left = nums.slice(0, mid);
        return bsearch(left, target);
    } else {
        const right = nums.slice(mid + 1);
        const sub = bsearch(right, target);
        return sub === -1 ? -1 : sub + mid + 1;
    }
}
console.log(`bsearch([1, 2, 3, 4], 3) = ${bsearch([1, 2, 3, 4], 3)}`);


function mergeSort(arr) {
    
}