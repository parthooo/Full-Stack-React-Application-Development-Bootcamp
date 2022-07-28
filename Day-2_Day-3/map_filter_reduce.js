// // // Practice Essential Modern Javascript Concepts for React

// // Map

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

const nums4 = [2, 5, 7, 12];
function dbbl(nums4){
    return nums4.map(num => num * 2)
}
console.log('Double number of arraye elements by Declarative coding ', dbbl(nums4));


// // Find

// regular
const nums5 = [1,2,3,4];
function findElm(recArr, searchElm) {
    return recArr.find((elm) => {
        // condition
        if (elm === searchElm){
        return true
        }
        // or
        // return elm === searchElm
    })
}
console.log('Find element from array is: ', findElm(nums5, 2));

// Single line
const nums6 = [1,2,3,4];
function findElm2(recArr) {
    return recArr.find(elm => elm > 2)
}
console.log('Find bigger element then 2 from array is: ', findElm2(nums6));

// // Filter
const nums7 = [1,2,3,4];
function filterElm3(recArr) {
    return recArr.filter(elm => elm > 2)
}
console.log('Filter bigger element then 2 from array is: ', filterElm3(nums7));