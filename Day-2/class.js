// // // Practice Essential Modern Javascript Concepts for React

// // class 

// Blueprint / instruction
class Person {
    //filed / Property
    name = 'partho'
    age = 30

    constructor(mName, mAge){
        console.log('class constructor data passing from new object peramitar inside class :', mName, mAge);
        this.name = mName
        this.age = mAge
    }

    //method
    showInfo(){
        return this.name + ' ' + this.age
    }
}

// real object / when we use "new" keyword before class it will build the main object
const personClass = new Person('Rahman', 35)
console.log(personClass);
console.log(personClass.name);
console.log(personClass.age);
console.log(personClass.showInfo());


class Student extends Person{
    constructor(name, age, course){
        super(name, age)
        this.course = course
    }

    showCoursesInfo(){
        return super.showInfo() + this.course
    }
}

const student = new Student ('anis', 25, 'react course')
console.log(student);
console.log(student.showCoursesInfo());