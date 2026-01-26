// class Person{                       //- parent/base class
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, am ${this.name}`)
//     }
// }


// class Student {
//     constructor(name, age , marks) {
//         this.name = name;               // common
//         this.age = age;                 // common
//         this.marks = marks;
//     }
//     talk() {
//         console.log(`Hi, am ${this.name}`)
//     }
// }

// let stu1 = new Student("Elon", 23, 95);
// console.log(stu1)

// class Teacher {
//     constructor(name, age , subject) {
//         this.name = name;                   // common
//         this.age = age;                     // common
//         this.subject = subject;
//     }
//     talk() {
//         console.log(`Hi, am ${this.name}`)
//     }
// }

//--------------------------------------------------------------------------------------------

// ## Refactoring Above Code using 'extends' & 'super'

class Person{                       //- parent/base class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, am ${this.name}`)
    }
}


class Student extends Person{
    constructor(name, age , marks) {
        super(name, age)                // name & age will inherit from 'Person' constructor class
        this.marks = marks;
    }
    talk() {
        console.log(`Hi, am ${this.name}`)
    }
}

let stu2 = new Student("Elon", 23, 95);
console.log(stu2)

class Teacher extends Person{
    constructor(name, age , subject) {
        super(name, age)                // name & age will inherit from 'Person' constructor class
        this.subject = subject;
    }
}

let Tea2 = new Teacher("Justing", 43, "English")
console.log(Tea2)

//--------------------------------------------------------------------------------------------

// ## Understand Above Code of 'extends' & 'super'

// // Person is the PARENT / BASE class
// // Student and Teacher will inherit from this class
// class Person {                       
//     constructor(name, age) {
//         // common properties for all persons
//         this.name = name;
//         this.age = age;
//     }

//     // common method for all child classes
//     talk() {
//         console.log(`Hi, am ${this.name}`)
//     }
// }

// // Student is a CHILD class of Person
// // It inherits properties and methods from Person
// class Student extends Person {

//     constructor(name, age, marks) {
//         // super() calls the constructor of the parent class (Person)
//         // It sets name and age using Person's constructor
//         super(name, age)

//         // property specific to Student
//         this.marks = marks;
//     }
// }

// // Creating a Student object
// // Student gets name & age from Person
// // marks comes from Student
// let stu3 = new Student("Elon", 23, 95);
// console.log(stu3)


// // Teacher is another CHILD class of Person
// class Teacher extends Person {

//     constructor(name, age, subject) {
//         // call parent constructor first
//         super(name, age)

//         // property specific to Teacher
//         this.subject = subject;
//     }
// }

// // Creating a Teacher object
// let Tea3 = new Teacher("Justing", 43, "English")
// console.log(Tea3)


//=================== Another Similar Example: ========================================

class Mammal{
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }
    eat() {
        console.log("I am eating");
    }
}

class Dog extends Mammal{
    constructor(name) {
        super(name);
    }
    bark() {
        console.log("wooff..");
    }
    eat() {
        console.log("Dog is Eating")
    }
}

class Cat extends Mammal{
    constructor(name) {
        super(name);
    }
    meow(){
        console.log("meow")
    }
}


let dog1 = new Dog("tuffie");
console.log(dog1)

console.log(dog1.name)     // tuffie
console.log(dog1.type)     // warm-blooded 
console.log(dog1.eat())     // Dog is Eating
console.log(dog1.bark())    // wooff..

// ## Understand above code of 'Mammal', 'Dog' & 'Cat' which used 'extends' & 'super':

// // Mammal is the PARENT / BASE class
// // It contains properties and methods common to all mammals
// class Mammal {
//     constructor(name) {
//         this.name = name;           // name of the mammal
//         this.type = "warm-blooded"; // common property for all mammals
//     }

//     // common method for all mammals
//     eat() {
//         console.log("I am eating");
//     }
// }

// // Dog is a CHILD class of Mammal
// // It inherits properties and methods from Mammal
// class Dog extends Mammal {

//     constructor(name) {
//         // super() calls Mammal's constructor
//         // and sets name and type
//         super(name);
//     }

//     // method specific to Dog
//     bark() {
//         console.log("wooff..");
//     }

//     // overriding Mammal's eat() method
//     // Dog will use this instead of Mammal's eat()
//     eat() {
//         console.log("Dog is Eating");
//     }
// }

// // Cat is another CHILD class of Mammal
// class Cat extends Mammal {

//     constructor(name) {
//         // call parent constructor
//         super(name);
//     }

//     // method specific to Cat
//     meow() {
//         console.log("meow");
//     }
// }

// // Creating a Dog object
// let dog2 = new Dog("tuffie");
// console.log(dog2)

// // Accessing inherited and own properties
// console.log(dog2.name)     // tuffie (from Mammal)
// console.log(dog2.type)     // warm-blooded (from Mammal)

// // Calling methods
// // eat() is taken from Dog (overridden version)
// console.log(dog2.eat())    // Dog is Eating

// // bark() exists only in Dog class
// console.log(dog2.bark())   // wooff..
