// // // Practice Essential Modern Javascript Concepts for React

// Regual Conditional
const age = 20;

if(age >= 18){
    console.log('You can vote');
}else {
    console.log("You can't vote");
}

// Ternary Conditional
// condition ? true : false

age >= 18 ? console.log("You can vote") : console.log("You can't vote");

const result = age >= 18 ? "You can vote" : "You can't vote";
console.log(result);

// logical AND operator "&&"
const result1 = age >= 18 && "You can vote";
console.log(result1);

const result2 = age >= 18 && age === 19 && "You can vote";
console.log(result2);

// logical OR operator ||
const result3 = age >= 17 || "You can vote";
console.log(result3);


