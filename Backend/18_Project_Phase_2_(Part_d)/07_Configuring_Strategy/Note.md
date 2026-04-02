# Sigma Note:

## Configuring Strategy

### `passport.initialize()`
A middleware what initialize passport.

### `passport.session()`
```text
A web application needs the ability to identify users as they browse from page to page. This series of requests and responses, each associated with the same user, is known as a session.
```

### `passport.use(new LocalStrategy(User.authenticate()))`

```js
const passport = require("passport"); 
// Import Passport (main authentication library)

const LocalStrategy = require("passport-local"); 
// Import Local Strategy (username + password authentication)

const User = require("./models/user.js"); 
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
```

# 🧠 One-Line Understanding (Very Important)

- `initialize()` → start passport  

- `session()` → keep user logged in  

- `LocalStrategy` → login using username/password  

- `serializeUser` → save user ID in session  

- `deserializeUser` → get user from DB using ID  
