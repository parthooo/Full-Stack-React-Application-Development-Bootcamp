// // // Practice Essential Modern Javascript Concepts for React

// // Template string / literal

// Regular string 
const firstname = "Partho";
const lastname = "Rahman";

const fullname = firstname + ' ' + lastname;
console.log('Regular string : ', fullname);

// Template string - Javascript expression can be written inside in Curly Braces
const firstname1 = "Partho";
const lastname1 = "Rahman";

const fullname1 = `My First name is "${firstname1.toUpperCase()}" and Last name is "${lastname1.toLowerCase()}"`;
console.log("Template string : ", fullname1);
