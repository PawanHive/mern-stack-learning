/*
****************** Export in Files *****************

1. What is Export(node.js)?
==> Export is used to share code (variables, functions, objects) 
from one file to another in Node.js.

--------------------------------------------------------------------

1. module.exports
=> module.exports is an object used to export code from a 
Node.js file so it can be used in another file.

👉 Every Node file has its own module.exports.

Example: 
        // math.js
        function add(a, b) {
        return a + b
        }

        module.exports = add

-------------------------------------------------------------------- 

2. require('./filename') 
=> require() is a function used to import code from another 
file or module.

Example:
        // index.js
        const add = require('./math')
        add(2, 3)
*/

//===================================================================


let math = require('./math')           // REMEMBER SYNTAX: this is how we import files

//console.log(math);             //output: 123       ... these output comes from './math.js' file as 'module.exports' exporting '123' in it value.
console.log(math.sum(4, 5))
console.log(math.mul(4, 5))
console.log(math.PI)