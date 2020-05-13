Array.prototype.bubbleSort = function() {
    let sorted = false;

    while (sorted === false) {
        sorted = true;

        for (let i = 0; i < this.length - 1; i++){
            if (this[i] > this[i + 1]){
                this[i], this[i + 1] = this[i + 1], this[i];
                sorted = false;
            }
        }
    }
    return this;
};


String.prototype.subStrings = function() {
    let subsArray = [];
    let arr = this;
    for (let i = 0; i <= this.length ; i++){
        for (let j = i + 1 ; j <= this.length; j++){
            subsArray.push(arr.slice(i, j));
        }
    }
    return subsArray;

};
console.log("apple".subStrings());

