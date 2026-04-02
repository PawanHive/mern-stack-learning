# Important Link:

**`passportjs` Packages**[https://www.passportjs.org/packages/](https://www.passportjs.org/packages/)
**`passport` npm packages** [https://www.npmjs.com/package/passport](https://www.npmjs.com/package/passport)
**`passport-local` package**[https://www.npmjs.com/package/passport-local](https://www.npmjs.com/package/passport-local)
**`passport-local-mongoose` package**[https://www.npmjs.com/package/passport-local-mongoose](https://www.npmjs.com/package/passport-local-mongoose)


## What is `passport` package:

Passport is **Express-compatible athentication middleware for Node.js.**

## Install All three Package:

- `npm i passport`  
- `npm i passport-local`  
- `npm i passport-local-mongoose`  


# #2: Configure `passport` strategies (`app.js`)
```js
const passport = require("passport"); 
// Import Passport (main authentication library)

const LocalStrategy = require("passport-local"); 
// Import Local Strategy (username + password authentication)

const User = require("./models/user/.js"); 
// Import User model (which uses passport-local-mongoose plugin)

const usersRoute = require("./routes/users.js"); 
// Import user routes (signup, login, logout)


// ---------------- PASSPORT CONFIGURATION ----------------

// NOTE: These lines must come AFTER express-session middleware
// because Passport uses session to store login info

app.use(passport.initialize()); 
// Initialize Passport (required for every request)

app.use(passport.session()); 
// Enable persistent login sessions (keeps user logged in)


// Configure Local Strategy
passport.use(new LocalStrategy(User.authenticate())); 
/*
- Tells Passport to use "local strategy"
- User.authenticate() is provided by passport-local-mongoose
- It automatically checks username + password
*/


// Serialize User (store user info in session)
passport.serializeUser(User.serializeUser()); 
/*
- Decides what data to store in session
- Usually stores user ID
*/


// Deserialize User (get user from session)
passport.deserializeUser(User.deserializeUser()); 
/*
- Takes user ID from session
- Fetches full user data from database
- Makes it available as req.user
*/

app.use("/", usersRoute);
```
# 🧠 One-Line Understanding (Very Important)

- `initialize()` → start passport  

- `session()` → keep user logged in  

- `LocalStrategy` → login using username/password  

- `serializeUser` → save user ID in session  

- `deserializeUser` → get user from DB using ID  

# #3: `./models/user.js` code snippet explained

```js
// ---------------- USER MODEL (Authentication Schema) ----------------

const mongoose = require("mongoose"); 
// Import mongoose for MongoDB interaction

const Schema = mongoose.Schema; 
// Create Schema reference

const passportLocalMongoose = require("passport-local-mongoose").default; 
// Import plugin that simplifies authentication (adds username + password handling)


// Define User Schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});


// Apply passport-local-mongoose plugin
userSchema.plugin(passportLocalMongoose);
/*
- Automatically adds fields:
  - username
  - hash (hashed password)
  - salt

- Adds useful methods:
  - User.register() → create user + hash password
  - User.authenticate() → verify login credentials
  - serializeUser() / deserializeUser()

- Removes need to manually handle password hashing
*/


// Export User model
module.exports = mongoose.model("User", userSchema);
// Creates "User" collection in MongoDB
```

# #4: `/views/users/signup.ejs` code snippet explained
```js
<% layout("/layouts/boilerplate.ejs") %>
<!-- Use main layout (boilerplate.ejs) -->

<div class="row mt-3">
  <!-- Bootstrap row with top margin -->

  <h1 class="col-6 offset-3">SignUp for Wanderlust</h1>
  <!-- Centered heading (6 columns wide, offset by 3) -->

  <div class="col-6 offset-3">
    <!-- Centered form container -->

    <form action="/signup" method="POST" class="needs-validation" novalidate>
      <!-- 
        action="/signup" → sends data to POST /signup route
        method="POST" → used to send form data securely
        needs-validation → Bootstrap validation class
        novalidate → disables default browser validation
      -->

      <!-- Username Field -->
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <!-- label linked with input via id -->

        <input
          type="text"
          class="form-control"
          name="username"
          id="username"
          required
        />
        <!-- 
          name="username" → key used in req.body
          id="username" → used by label
          required → makes field mandatory
        -->

        <div class="valid-feedback">Looks Good!</div>
        <!-- Bootstrap success message -->
      </div>

      <!-- Email Field -->
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>

        <input
          type="email"
          id="email"
          class="form-control"
          name="email"
          required
        />
        <!-- 
          type="email" → ensures valid email format
          name="email" → accessible in backend via req.body.email
        -->
      </div>

      <!-- Password Field -->
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>

        <input
          type="password"
          id="password"
          class="form-control"
          name="password"
          required
        />
        <!-- 
          type="password" → hides typed characters
          name="password" → used in backend for registration
        -->
      </div>

      <!-- Submit Button -->
      <button class="btn btn-success mb-3">SignUp</button>
      <!-- Sends form data to server -->

    </form>
  </div>
</div>
```

# #5: `/views/users/login.ejs` code snippet explained
```js
<% layout("/layouts/boilerplate.ejs") %>
<!-- Use main layout (boilerplate.ejs) -->

<div class="row mt-3">
  <!-- Bootstrap row with top margin -->

  <h1 class="col-6 offset-3">SignUp for Wanderlust</h1>
  <!-- ⚠️ This should be "Login" instead of "SignUp" -->

  <div class="col-6 offset-3">
    <!-- Centered form container -->

    <form action="/login" method="POST" class="needs-validation" novalidate>
      <!-- 
        action="/login" → sends data to POST /login route
        method="POST" → used to send login credentials
        needs-validation → Bootstrap validation
        novalidate → disables default browser validation
      -->

      <!-- Username Field -->
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>

        <input
          type="text"
          class="form-control"
          name="username"
          id="username"
          required
        />
        <!-- 
          name="username" → used in req.body.username
          required → field is mandatory
        -->
      </div>

      <!-- Password Field -->
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>

        <input
          type="password"
          id="password"
          class="form-control"
          name="password"
          required
        />
        <!-- 
          type="password" → hides input
          name="password" → used for authentication
        -->
      </div>

      <!-- Submit Button -->
      <button class="btn btn-success mb-3">Login</button>
      <!-- Submits form to server -->

    </form>
  </div>
</div>
```