/*
===================== New Operator =====================


*/

// ## Factory function Exmaple:

// function PersonMaker(name, age) {             
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`)
//         }
//     }
//     return person;
// }

// let p1 = PersonMaker("adam", 25)
// console.log(p1);                    
// console.log(p1.talk());             

// let p2 = PersonMaker("eve", 32);
// console.log(p2);                 
// console.log(p2.talk());             

//-----------------------------------------------------------------------------------------

// ## Constructor function:- doesn't return anything & start with capital letter

function Person(name, age) {             
    this.name = name;
    this.age = age;
}

Person.prototype.talk =  function () {                  // method
    console.log(`Hi, my name is ${this.name}`)
}

let p1 = new Person("adam", 25);
let p2 = new Person("eve", 25);

console.log(p1)
console.log(p2)

console.log(p1.talk())
console.log(p2.talk())

console.log(p1.talk === p2.talk)

//-------------------------------------------------------------------------------------

// ## Understand Above Constructor function:

// Person is a CONSTRUCTOR FUNCTION
// It is used to create multiple person objects
function Person(name, age) {             
    // 'this' refers to the new object created by 'new'
    this.name = name;    // add name property to the object
    this.age = age;     // add age property to the object
}

// Adding talk() method to Person's prototype
// This function is created ONLY ONCE and shared by all Person objects
Person.prototype.talk = function () {
    // 'this' refers to the object which is calling talk()
    console.log(`Hi, my name is ${this.name}`)
}

// 'new' keyword creates a new object and links it to Person.prototype
let p3 = new Person("sonu", 20);   // creates first Person object
let p4 = new Person("monu", 27);    // creates second Person object

// Logs the objects (note: talk() is NOT inside the object, it's in prototype)
console.log(p3)
console.log(p4)

// Calling talk() method
// JS first checks inside the object
// If not found, it looks in the prototype
console.log(p3.talk())   // Hi, my name is adam
console.log(p4.talk())   // Hi, my name is eve

// Both objects use the SAME talk() function from prototype
// So this returns true
console.log(p3.talk === p4.talk)
