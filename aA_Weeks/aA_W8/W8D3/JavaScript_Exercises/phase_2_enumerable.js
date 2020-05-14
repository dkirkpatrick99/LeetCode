
Array.prototype.myEach = function (func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i]);
    }
};

NUMS.myEach((num) => {
    console.log(`this is a ${num}`);
});


Array.prototype.myMap = function (func) {
    let cbArray = [];
    
    for (let i = 0; i < this.length; i++) {
        cbArray.push(func(this[i]));
    }
    
    return cbArray;
};

Array.prototype.myMap = function (func) {
    cont mappedArray = [];
    
    this.myEach(ele => mappedArray.push(func(ele)));
    
    return mappedArray;
};

console.log(NUMS.myMap(num => `boobs`));


const NUMS = [5, 2, 4, 1, 5 ,3, 1, 2, 6, 1];
Array.prototype.myReduce = function (func, [initialVal]) {
    let arr = this;
    
    if (initialVal === undefined) {
        initialVal = arr[0];
        arr = arr.slice(1);
    }
    
    let result = initialVal;
    
    arr.myEach(ele => result = func(result, ele));
    return result;
    // return arr;
    // return initialVal;
};

console.log(NUMS.myReduce( (total, num) => total + num));