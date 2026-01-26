/*
====================== Factory Functions ==================
=> A function that creates objects

1. factory function:
==> A factory function is a function that create and 
returns a new object without using `new` or `class`.
*/

// # here we create function which create Objects about 'person'

function PersonMaker(name, age) {               // this is factory function
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`)
        }
    }
    return person;
}

let p1 = PersonMaker("adam", 25)
console.log(p1);                    // {name: 'adam', age: 25, talk: ƒ}
console.log(p1.talk());             // Hi, my name is adam

let p2 = PersonMaker("eve", 32);
console.log(p2);                    // {name: 'eve', age: 32, talk: ƒ}
console.log(p2.talk());             // Hi, my name is eve


//-----------------------------------------------------------------

console.log(p1.talk === p2.talk)        // false        ... means Every time you call PersonMaker, a new talk() function is created. (Same logic, different memory location)

//Disadvantage of Factory function:

    /*
1️⃣ Function duplication (memory waste)

==> Every time you call PersonMaker, a new talk()
function is created.

p1.talk === p2.talk   // false

➡ Same logic, different memory location
➡ Bad for performance when creating many objects
    */