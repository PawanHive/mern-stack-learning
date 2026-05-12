# ⚛️ React Forms & useEffect() — Final Notes

---

# #1: Forms in React

## 📌 What are Forms?

Forms are used to collect user input.

Examples:
- Login Form
- Signup Form
- Search Bar
- Comment Form

React forms are usually handled using:
- `useState()`
- Event handling
- Controlled components

---

# 🎯 Controlled Components

In React:

~~~txt
State stores the form data
~~~

Input fields only display the state value.

This is called a:

# ✅ Controlled Component

Example:

~~~jsx
<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
~~~

Here:
- `value` → gets data from state
- `onChange` → updates state

---

# 🔄 Form Flow

~~~txt
User types
   ↓
onChange runs
   ↓
State updates
   ↓
React re-renders
   ↓
Input gets updated value
~~~

---

# 🚀 Form Submission

~~~jsx
function handleSubmit(event) {
  event.preventDefault();
}
~~~

`preventDefault()` stops page reload after form submit.

---

# 📍 Important Form Events

| Event | Purpose |
|---|---|
| `onChange` | Detect typing |
| `onSubmit` | Detect form submit |
| `onFocus` | Input selected |
| `onBlur` | Input loses focus |

---

# #2: Labels in React

## 📌 Purpose of Labels

Labels describe input fields.

Examples:
- Username
- Email
- Password

---

# ⚠️ htmlFor in React

In HTML:

~~~html
<label for="username">
~~~

In React:

~~~jsx
<label htmlFor="username">
~~~

Reason:
- `for` is reserved keyword in JavaScript.

---

# 🔗 Label Connection

~~~jsx
<label htmlFor="username">
<input id="username" />
~~~

Connection works like:

~~~txt
htmlFor ↔ id
~~~

Both values must match.

---

# ✨ Benefits of Labels

✔ Better accessibility  
✔ Better user experience  
✔ Clicking label focuses input  

---

# #3: Handling Multiple Inputs

## 📌 Main Idea

Instead of multiple states:

~~~jsx
const [username, setUsername]
const [email, setEmail]
~~~

React commonly uses:

~~~jsx
const [formData, setFormData] = useState({
  username: "",
  email: "",
});
~~~

One object stores all form data.

---

# 🧠 Important Concepts

## 1️⃣ `name` Attribute

~~~jsx
name="username"
~~~

Used to identify which input changed.

---

## 2️⃣ `event.target.name`

Gets changed field name.

~~~jsx
const field = event.target.name;
~~~

---

## 3️⃣ `event.target.value`

Gets input value.

~~~jsx
const value = event.target.value;
~~~

---

## 4️⃣ Computed Property Names

~~~jsx
[field]: value
~~~

Dynamically updates matching field.

---

## 5️⃣ Spread Operator

~~~jsx
...currData
~~~

Keeps old data safe while updating one field.

---

# 🔄 Multiple Input Flow

~~~txt
User types
   ↓
onChange runs
   ↓
Get field name
   ↓
Get value
   ↓
Update matching state field
   ↓
React re-renders
~~~

---

# ✅ Common Pattern

~~~jsx
let handleInputChange = (event) => {
  setFormData((currData) => {
    return {
      ...currData,
      [event.target.name]: event.target.value,
    };
  });
};
~~~

---

# #4: Comments Form

A comments form is a real-world example of React forms.

Usually includes:
- username
- comment text
- rating

Concept:
- Take user input
- Store in state
- Submit data
- Reset form

---

# 📢 Show Comments

After submission:
- comments are stored inside array state

Example:

~~~jsx
const [comments, setComments] = useState([]);
~~~

New comment added using:

~~~jsx
setComments((prev) => [...prev, newComment]);
~~~

Then displayed using:

~~~jsx
comments.map()
~~~

---

# #5: Validations in React

## 📌 What is Validation?

Validation checks whether user input is correct before submission.

Examples:
- Required field
- Email format
- Password length

---

# 📦 Formik

:contentReference[oaicite:0]{index=0} is a library used for:
- form handling
- validation
- submission

Installation:

~~~bash
npm install formik
~~~

---

# 🧱 Formik Main Components

| Component | Purpose |
|---|---|
| `Formik` | Form wrapper |
| `Form` | Replaces `<form>` |
| `Field` | Replaces `<input>` |
| `ErrorMessage` | Shows errors |

---

#  Validation Flow

~~~txt
User submits form
      ↓
validate() runs
      ↓
Errors found?
   ↓        ↓
 Yes        No
 ↓          ↓
Show error  Submit form
~~~

---

# ✍️ Example Validation

~~~jsx
validate={(values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Username required";
  }

  return errors;
}}
~~~

---

# #7: useEffect() in React

## 📌 What is useEffect?

:contentReference[oaicite:1]{index=1} provides a Hook called:

~~~jsx
useEffect()
~~~

Used for:
> Side effects after rendering.

---

# 🌍 What are Side Effects?

Tasks outside UI rendering.

Examples:
- API calls
- Timers
- localStorage
- document title updates
- event listeners

---

# 🧩 Basic Syntax

~~~jsx
useEffect(() => {
  // side effect code
});
~~~

---

# 🔁 Default Behavior

~~~txt
Runs after every render
~~~

---

# #8: Dependencies in useEffect()

## 1️⃣ No Dependency Array

~~~jsx
useEffect(() => {
  console.log("Runs every render");
});
~~~

Runs after every render.

---

## 2️⃣ Empty Dependency Array

~~~jsx
useEffect(() => {
  console.log("Runs once");
}, []);
~~~

Runs only once when component mounts.

---

## 3️⃣ Specific Dependencies

~~~jsx
useEffect(() => {
  console.log("Runs when count changes");
}, [count]);
~~~

Runs only when dependency changes.

---

# 📋 Dependency Rules

| Dependency Type | Behavior |
|---|---|
| No dependency | Runs every render |
| `[]` | Runs once |
| `[value]` | Runs when value changes |

---

# 🧹 Cleanup Function

~~~jsx
useEffect(() => {
  const timer = setInterval(() => {}, 1000);

  return () => clearInterval(timer);
}, []);
~~~

Cleanup runs:
- before next effect
- before component unmount

---

# 🔄 useEffect() Flow

~~~txt
Component renders
      ↓
UI updates
      ↓
useEffect runs
      ↓
(optional cleanup)
~~~

---

# #9: Use Cases of useEffect()

## 1️⃣ API Calls

Example:
- fetching jokes
- loading users
- weather apps

~~~jsx
useEffect(() => {
  fetchData();
}, []);
~~~

---

# 2️⃣ Document Title Updates

~~~jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
~~~

---

# 3️⃣ Timers / Intervals

~~~jsx
useEffect(() => {
  const timer = setInterval(() => {}, 1000);

  return () => clearInterval(timer);
}, []);
~~~

---

# 4️⃣ Event Listeners

~~~jsx
useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
~~~

---

# 5️⃣ localStorage

~~~jsx
useEffect(() => {
  localStorage.setItem("theme", theme);
}, [theme]);
~~~

---

# 6️⃣ State Change Reactions

~~~jsx
useEffect(() => {
  console.log("Username changed");
}, [username]);
~~~

---

# 😂 Joke API Example (Real Use Case)

~~~jsx
useEffect(() => {
  getNewJoke();
}, []);
~~~

Purpose:
- fetch first joke automatically on component mount

Flow:

~~~txt
Component loads
      ↓
useEffect runs
      ↓
API fetch happens
      ↓
State updates
      ↓
UI re-renders with joke
~~~

---

# ⭐ Important Concepts to Remember

---

# ⚛️ React Forms

~~~txt
Input does NOT store data
State stores data
~~~

---

# 🧩 Multiple Inputs

~~~txt
One handler can manage all inputs
~~~

using:
- object state
- name attribute
- computed property names

---

# ⚡ useEffect

~~~txt
Render UI first
Then run side effects
~~~

---

# 🧠 Final Mental Models

## 📌 Forms

~~~txt
Input ↔ State Synchronization
~~~

---

## 📌 useEffect

~~~txt
Render → UI shown
useEffect → background work
~~~

---

# 📚 Final Quick Summary

| Topic | Core Idea |
|---|---|
| Forms | React controls input using state |
| Labels | `htmlFor` connects label with input |
| Multiple Inputs | One state object + one handler |
| Comments Form | Real form handling example |
| Show Comments | Store comments in array state |
| Validation | Check user input correctness |
| Formik | Simplifies forms & validation |
| useEffect | Handles side effects |
| Dependencies | Control when effect runs |
| Use Cases | API, timers, events, localStorage |

---