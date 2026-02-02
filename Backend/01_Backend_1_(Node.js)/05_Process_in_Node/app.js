/* ************************* Process in Node ******************** 
1. process: ==> This object provides information about, and 
control over, the current Node.js process. 

2. process.argv: ==> returns and array containing the 
command-line arguments passed when the Node.js process was 
launched. 

*/

//===================================================================

console.log(process.argv);
/*
output:
[
  "D:\\NodeJs\\Main Nodejs File (don't touch)\\node.exe",
  'G:\\SIGMA PRIME\\03-MERN-stack-learning\\Backend\\01_Backend_1_(Node.js)\\05_Process_in_Node\\app.js'
]
*/

//--------------------------------------------------------------------------------------------------------

// passing arguments to file like (node app.js hello bye) in terminal:

/*
output:
[
  "D:\\NodeJs\\Main Nodejs File (don't touch)\\node.exe",
  'G:\\SIGMA PRIME\\03-MERN-stack-learning\\Backend\\01_Backend_1_(Node.js)\\05_Process_in_Node\\app.js',
  'hello',
  'bye'
]
*/

//-------------------------------------------------------------------------------------------------------

// # how to use (process.argv) files arguments in our code:
// let soppose we have to say 'hello to' every whose name is pass as an file argument in terminal
//passing arguments to file like (node app.js mohan sohan suraj sonu monu ) in terminal:

let args = process.argv;

for (let i = 2; i < args.length; i++) {
    console.log("hello to", args[i])
}

/*output:
hello to mohan
hello to sohan
hello to suraj
hello to sonu
hello to monu
 */



/*
+++++++++++++++ Additional Information on this topic ++++++++++++++

1. What is process?
==> A global object that provides information and control over 
the currently running Node.js program.

2. Why Do We Need process?
We use process to:

- Get system info
- Read environment variables
- Handle command-line arguments
- Exit the program
- Know where our app is running

3. Important Properties:

a. process.pid
    Returns process ID of Node app
    Used by OS to track the process

b. process.cwd()
    Returns current working directory
    Depends on where Node command is run

c. process.argv
    Returns command-line arguments as an array
    Used in CLI apps

d. process.env
    Stores environment variables
    Used for secrets & configuration
    Example: process.env.NODE_ENV

e. process.platform
    Returns OS platform (win32, linux, darwin)

4. Important Methods:

a. process.exit()
    ==> Terminates the Node process
    Example:
        process.exit(0) // success
        process.exit(1) // error

b. process.on(event, callback)
    ==> Listens for process events

    Common events:
        - 'exit'
        - 'uncaughtException'

    Example: 
        process.on('exit', () => {
        console.log('Process ended')
        })
*/


console.log(process.pid)
console.log(process.platform)
console.log(process.cwd())