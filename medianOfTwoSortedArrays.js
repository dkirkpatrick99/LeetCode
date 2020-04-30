function findMedianSortedArrays(nums1, nums2) {
    let newArr = []
    let negFlag = false
    nums1.forEach((num) => {
        if(num < 0 ) negFlag = true
        newArr.push(num)
    })
    nums2.forEach((num) => {
        if(num < 0 ) negFlag = true
        newArr.push(num)
    })
    if(negFlag){
        newArr = newArr.sort(function(a, b){return b-a});
    } else {
        newArr = newArr.sort(function(a, b){return a-b});
    }
    let mid = Math.floor(newArr.length / 2) 

    if(newArr.length % 2 === 0) {
        let sum = (newArr[mid] + newArr[mid - 1]) / 2
        return sum
    }
    return newArr[mid]

};
console.log(findMedianSortedArrays([1], [2,3,4,5,6,7,8,9,10]))