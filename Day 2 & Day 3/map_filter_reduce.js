// // // Practice Essential Modern Javascript Concepts for React

// Imperative coding
const nums = [1,2,3,4];
function double(nums){
    const dblArr = [];
    for (let i=0; i < nums.length; i++){
        dblArr.push(nums[i] *2);
    }
    return dblArr;
}
console.log('Double number of arraye elements by regular loop Imperative coding', double(nums));

// Declarative coding
const nums1 = [5, 7, 2, 8];
function double1(nums1){
    const dblArr = [];
    for (let num of nums1){
        dblArr.push(num * 2)
    }
    return dblArr;
}
console.log('Double number of arraye elements by Declarative coding ', double1(nums1));


// Map
const nums3 = [5, 7, 2, 8];
function dbl(nums3){
    return nums3.map(num => {
        return num * 2
    })
}
console.log('Double number of arraye elements by Declarative coding ', dbl(nums3));