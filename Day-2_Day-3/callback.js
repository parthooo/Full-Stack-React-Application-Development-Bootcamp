// // // Practice Essential Modern Javascript Concepts for React

// // Async
const getVar = () => {
    setTimeout(function() {
       console.log('A Function that takes some time');
    }, 3000)
 }
 
 const printSomething = () => {
    console.log('Another Function');
 }
 
 getVar();
 printSomething();

// // Callback function
const getVarC = (callback) => {
    setTimeout(function() {
       console.log('A Function that takes some time');
       callback();
    }, 3000)
 }
 
 const printSomethingC = () => {
    console.log('Another Function');
 }
 
 getVarC(printSomethingC);