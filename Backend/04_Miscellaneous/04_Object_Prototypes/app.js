/*
================== Object Prototypes =======================

==> Prototype are the mechanism by which JavaScript objects
inherit features from one another.

==> It is like a single template object that all objects
inherit methods and properties from without having their
own copy.

arr.__proto__ = (reference)
Array.prototype = (actual object)
String.prototype

-------------------------------------------------------------------------

1.  What is an Object Prototype in JavaScript?
==> A prototype is an object that another object can 
inherit properties and methods from.

---------------------------------------------------------------

📚 Library Analogy

Prototype → library
Object → student
Student doesn’t own every book
Student borrows from library when needed
*/

let str1 = 'abc'
let str2 = 'xyz'

let arr = [1, 2, 3]
arr.sayHello = () => {                          // created new function inside array.
    console.log("hello, i am array")        
}

let arr1 = [1, 2, 3]
arr1.sayHello = () => {                          // created new function inside array.
    console.log("hello, i am array1")        
}

let arr2 = [1, 2, 3]
arr2.sayHello = () => {                          // created new function inside array.
    console.log("hello, i am array2")        
}

console.log(arr);           // [1, 2, 3, sayHello: ƒ]               // REMEMBER- this 'sayHello' function is not a part of 'prototype'. 
arr.push(4);
console.log(arr);           // (4) [1, 2, 3, 4, sayHello: ƒ]        // function inside 'prototype' will be applicable to every ARRAY.

console.log(arr.__proto__);     // [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
console.log(arr.__proto__.pop);     // ƒ pop() { [native code] }

// # suppose we want to change the definition of push() function:

arr.__proto__.push = (n) => {console.log("pushing no.", n)}

console.log(arr.__proto__.push)       // new definition of push()          //(n) => {console.log("pushing no.", n)}

arr.push(5);                        // pushing no. 5        // our new push() definition just print this
console.log(arr);                   // (4) [1, 2, 3, 4, sayHello: ƒ]        // nothing changed in actual arr

//----------------------------------------------------------------------------------------------------------------

console.log(arr.__proto__);         // // prototype of this specific array

console.log(Array.prototype)        // actual prototype     // This is the prototype object defined by the Array constructor        //ouput: [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
console.log(String.prototype)       // String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}

console.log(arr.__proto__ === Array.prototype)   // true     // They point to the same object.

//----------------------------------------------------------------------------------------------------------------

console.log(arr1.sayHello === arr2.sayHello)                // false       .. because both func shares the different location

console.log('abc'.toUpperCase === 'xyz'.toUpperCase)        // true     Because toUpperCase lives on String.prototype, not on each string.  (String.prototype.toUpperCase)

console.log(str1.toUpperCase === str2.toUpperCase)        // true

'abc'.__proto__.toUpperCase === String.prototype.toUpperCase    
    /*
    - 'abc' and 'xyz' are different values
    - BUT both inherit toUpperCase from the same prototype
    - So both reference the same function in memory

        ✔ Same function
        ✔ Same memory location
    */
