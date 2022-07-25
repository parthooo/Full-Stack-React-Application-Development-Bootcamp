// // // Practice Essential Modern Javascript Concepts for React

// // Function

// Function Statement = Statement is a command 
function sum(num1, num2) {
    return num1 + num2
}
console.log("sum funtion output: ", sum(10, 20)); 

// Function Expression = Expression is a value. Or the things we write after equal sign(=) that is called Expression. 
const sum1 = function (num1, num2) {
    return num1 + num2
}
console.log("sum1 funtion output: ", sum1(10, 20));

// Arrow function 
const sum2 = (num1, num2) => {
    return num1 + num2
}
console.log("sum2 Arrow funtion output: ", sum2(10, 20));

// Single line Arrow function
const sum3 = (num1, num2) =>  num1 + num2
console.log("sum3 Single line Arrow funtion output: ", sum3(10, 20));


const multiply = num1 =>  num1 * 20
console.log("multiply Single line Arrow funtion output: ", multiply(10, 20));