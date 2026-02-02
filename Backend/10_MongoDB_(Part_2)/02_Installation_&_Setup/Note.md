Official Website: [mongoose](https://mongoosejs.com/)

Doc Link: [mongoose Quick Start](https://mongoosejs.com/docs/index.html)

# #1: Installation & Setup of Mongoose

### STEP 1: Install Mongoose

```bash
npm i mongoose
```
**Check install:**
```bash
npm list mongoose
```
print version of it.

### STEP 2: Import Mongoose

```js
const mongoose = require("mongoose");
```

### STEP 3: Start MongoDB Server (THIS STEP IS NOT REQUIRED FOR ME)
Because in my case, MongoDB server always running because it a part of window service

1. **We can check:**   
`Win + R → services.msc`

2. **then find:**  
`MongoDB Server (MongoDB)`

3. **Check status:**  
- **Status**: Running ✅  
- **Startup type**: Automatic
That’s your “always working” server

**Otherwise we can run:** 
> mongod --dbpath C:\data\db   

Or 
> mongod

### STEP 4: Start Shell

```bash
mongosh
```

### STEP 5: Connect to Mongodb (Local)

```js
const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test"); 

}
```

### STEP 6: Run `node index.js` in terminal

**Output should:**
```bash
connection successful
```
it means Node.js application successfully connected to MongoDB database

# #2: `index.js` Code Snippet Explained

```js
// Import mongoose library
// Mongoose helps us connect Node.js with MongoDB
const mongoose = require("mongoose");

// Call the main() function which handles DB connection
main()
  .then(() => {
    // This runs ONLY if the connection is successful
    console.log("connection successful");
  })
  .catch((err) => {
    // This runs if there is any error while connecting
    console.log(err);
  });

// Async function to connect to MongoDB
async function main() {
  // mongoose.connect() creates a connection between
  // Node.js application and MongoDB database
  // 
  // mongodb://127.0.0.1:27017/test
  // └─ MongoDB local server address
  // └─ 27017 → default MongoDB port
  // └─ test → database name (auto-created if it doesn't exist)
  //
  // await ensures that the connection completes
  // before moving to the next line
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

```