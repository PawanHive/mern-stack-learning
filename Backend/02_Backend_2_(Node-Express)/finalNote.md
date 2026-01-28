## How to setup & create Express Server?

1. STEP: Create project directory

2. STEP: `npm init`
    => creates 'package.json' file

3. STEP: `touch index.js` or create manually
    => create index.js

4. STEP: `npm install express`
    => install 'express' packages

5. STEP: `npm install nodemon`
    => install nodemon package

6. STEP: open `'package.json'` and add
```js
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

7. STEP: Create basic Express server (index.js):
```js
const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

```
8. STEP: `npm run dev` or `nodemon index.js`
    => start server
