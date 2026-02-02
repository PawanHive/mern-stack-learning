// ## 1st Way to EXPORT ##

// const sum = (a, b) => a + b;
// const mul = (a, b) => a * b;
// const g = 9.8;
// const PI = 3.14;

module.exports = 123;                // suppose when module.exports, exports nothing, and we called require() in then in that case output will be empty object: {}
module.exports = 'hello';               // we can give any kind of values like, (string, number, array, bojects)... but ingeneral module.exports has OBJECT kind of value.

//--------------------------------------------------------------
// ## 1st Way to EXPORT ##

// # but suppose we have to send the, sum, mul, g, PI to script.js:

const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const g = 9.8;
const PI = 3.14;

let obj = {
    sum: sum,
    mul: mul,
    g: g, 
    PI: PI
};

module.exports = obj

        // we can refactor above let obj ={} code:

module.exports = {          // here we directly assigned object as a value to module.exports
    sum: sum,
    mul: mul,
    g: g, 
    PI: PI
};

//-----------------------------------------------------------------------
//## 2nd Way to EXPORT ##

// # we can also EXPORTS like this: 

// module.exports.sum = (a, b) => a + b;
// module.exports.mul = (a, b) => a * b;
// module.exports.g = 9.8;
// module.exports.PI = 3.14;

// # we can also EXPORT using just 'exports' keyword:

exports.sum = (a, b) => a + b;
exports.mul = (a, b) => a * b;
exports.g = 9.8;
exports.PI = 3.14;

        /*
        but REMEMBER:

        if we just write:
        export = 5;

        then this will not EXPORT because 'export' here behave 
        like a variable which store value 5.
        */


