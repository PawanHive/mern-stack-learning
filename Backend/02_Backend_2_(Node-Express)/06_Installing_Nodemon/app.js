/*
======================= Installing Nodemon ====================

## Main Express file location: \Backend\02_Backend_2_(Node-Express)\02_Getting_started_with_Express\Express>

1. ## How to Install & Run Nodemon LOCALLY (Best Practice ✅)  ##

📍 What is Local Installation?
==> Nodemon is installed inside a specific project and 
used only for that project.

🟢 Step 1: Go to your project folder
=> (make sure package.json exists)

🟢 Step 2: Install nodemon locally

  -> Install nodemon as a dev dependency:
  -> Run: npm install nodemon


📌 Nodemon will be stored in:
=> project-folder/node_modules/nodemon

🟢 Step 3: Add script in package.json
=> Open package.json and add:

"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}

🟢 Step 4: Run nodemon

    -> Use npm script: npm run dev

✅ Server starts
✅ Auto-restarts on file change

-----------------------------------------------------------

✅ Alternative (Optional)- to run nodemon.

    - You can also run nodemon using:
    - npx nodemon index.js

📌 Works, but npm scripts are preferred

------------------------------------------------------------

❌ Important Note

    This will NOT work for local nodemon:
    Running: nodemon index.js ❌

Because local packages are not added to system PATH.

⭐ Why Local Installation is Recommended?

    - Project-specific
    - No version conflict
    - Industry best practice
    - Clean & professional setup

=====================================================================

2. ## How to Install & Run Nodemon GLOBALLY ##

📍 What is Global Installation?
==> Nodemon is installed system-wide and can be used 
from anywhere.

🟡 Step 1: Install nodemon globally

-> Run: npm install -g nodemon


📌 Nodemon is stored in:
C:\Users\<username>\AppData\Roaming\npm\node_modules\nodemon

🟡 Step 2: Check installation (version)
-> Run: nodemon -v


If version shows → ✅ installed correctly

🟡 Step 3: Run nodemon
-> Run: nodemon index.js

✅ Works directly
✅ No npm script required

-------------------------------------------------------------------

⚠️ Drawbacks of Global Installation

    - Same version used for all projects
    - Can cause conflicts
    - Not recommended for real projects
*/