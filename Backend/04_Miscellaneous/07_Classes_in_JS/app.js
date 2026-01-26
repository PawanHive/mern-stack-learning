/*
===================== Classes in JS =====================


*/


// ## Constructor function:- doesn't return anything & start with capital letter

// function Person(name, age) {             
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk =  function () {               // method
//     console.log(`Hi, my name is ${this.name}`)
// }

// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 25);

// console.log(p1)
// console.log(p2)

// console.log(p1.talk())
// console.log(p2.talk())

// console.log(p1.talk === p2.talk)

//-------------------------------------------------------------------------------------

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk(){                             // method
        console.log(`Hi, my name is ${this.name}`)
    }
}

let p1 = new Person("shravasti", 20);
let p2 = new Person("shruti", 25);

console.log(p1)
console.log(p2)

console.log(p1.talk())
console.log(p2.talk())

console.log(p1.talk === p2.talk)

//-------------------------------------------------------------------------------------

// ## Understand above Class with comment: 

// Person is a CLASS (modern and cleaner way to write constructor + prototype)
class Person {

    // constructor runs automatically when we create an object using 'new'
    constructor(name, age) {
        // 'this' refers to the newly created object
        this.name = name;   // store name in object
        this.age = age;    // store age in object
    }

    // talk() is a METHOD of the class
    // Behind the scenes, JS stores this method in Person.prototype
    // So it is shared by all Person objects
    talk() {                             
        console.log(`Hi, my name is ${this.name}`)
    }
}

// Creating objects using the class
// 'new' creates a new object and links it to Person.prototype
let p3 = new Person("shravasti", 20);
let p4 = new Person("shruti", 25);

// Logging the objects
// Note: talk() is NOT inside the object itself, it comes from prototype
console.log(p3)
console.log(p4)

// Calling the shared talk() method
// 'this' points to the object calling the method
console.log(p3.talk())   // Hi, my name is shravasti
console.log(p4.talk())   // Hi, my name is shruti

// Both objects use the SAME talk() function from prototype
// So this comparison returns true
console.log(p3.talk === p4.talk)
