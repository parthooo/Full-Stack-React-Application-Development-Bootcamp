// // // Practice Essential Modern Javascript Concepts for React

// // Destructuring operator: mane jeta gothon kora ase setake venge fela.

const person = {
    firstName : 'Partho',
    lastName : 'Rahman',
    ages: 30,
}
//regular data show from object
console.log('Show firstname from an object :', person.firstName);

// destructuring method works like this with the same object
const {firstName, ages} = person
console.log('destructuring on object firstName: ', firstName)
console.log('destructuring on object ages: ', ages)

const arr = [1,2,3,4]
const [num1, num2, , num4] = arr
console.log('Destructure on array', num1, num2, num4);

// rest operator
const person1 = {
    surName : 'Rahman',
    id: 007,
    location: 'Uttara'
}
const {surName, ...restValues} = person1
console.log('Rest operator on object', surName);
console.log('Rest operator on object', restValues);

const newArr = [10, 20, 30, 40]
const [arr1, arr2, ...restArr] = newArr
console.log('Rest operator on array', arr1, arr2);
console.log('Rest operator on array', restArr);


// Spread operator
const newPerson = {
    ...person1,
    profession: 'Programmer'
}
console.log('Spread', newPerson);

const newArr2 = [...newArr, 50]
console.log('Spread operator on Array with previous rest array', newArr2);


//destructuring inside function
function viewBike({model, brand, breaks}){
    console.log(model, brand, breaks);
}
const bike = {
    model: '4v',
    brand : 'Apache',
    breaks: 'ABS'
}
viewBike(bike) 