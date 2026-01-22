/*
******************** Export in Directories ***********************

1. What is Export in Directories?
==> Export in directories means exporting modules from a 
folder instead of a single file.

👉 Node automatically looks for a special file (index.js) when a 
directory is required.

-------------------------------------------------------------------

2. Main Rule (MOST IMPORTANT):
    => When you do:
    require('./Fruits')

    => Node looks for (in this order):
    ./Fruits/index.js

-------------------------------------------------------------------

3. Default Keyword: 'index.js':

    => 'index.js' is the ENTRY FILE of a directory

    => the directory which we want to EXPORT, there should one
    file with the name (index.js)

    => and in index.js we will first IMPORT all remaining 
    files of directory using require() 
*/

const info = require("./Fruits");

console.log(info)

/*
output:

[
  { name: 'apple', color: 'red' },    
  { name: 'banana', color: 'yellow' },
  { name: 'mango', color: 'green' }   
]
*/