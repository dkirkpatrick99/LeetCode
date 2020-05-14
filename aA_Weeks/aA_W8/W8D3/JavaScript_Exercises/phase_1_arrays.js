Array.prototype.uniq = function() {
    let uniqArray = [];

    for (let i = 0; i < this.length; i++) {
        if (uniqArray.indexOf(this[i]) === -1) {
            uniqArray.push(this[i]);
        }
    }
    return uniqArray;
};
  console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].uniq());

  Array.prototype.uniq2 = function() {
    let uniqArray = []

    this.forEach(function (el) {
        if (uniqArray.includes(el)) {
            uniqArray.push(el);
        }
    });
    return uniqArray;
  }


  Array.prototype.twoSum = function() {
      let posArray = [];
      for (let i = 0; i < this.length; i++) {
          for (let j = 0; j < this.length; j++) {
              if (this[i] + this[j] === 0) {
                  posArray.push([i,j]);
              }
          }
      }
      return posArray;
  };


  Array.prototype.transpose = function() {
      let transArray = [];

      for (let i = 0; i < this[0].length; i++) {
          let groupArray = [];
          for (let j = 0; j < this.length; j++) {
              groupArray.push([this[j][i]]);
          }
          transArray.push(groupArray);
      }
      return transArray;
  };


  

