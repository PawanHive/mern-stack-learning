# #1: What is React:

React lets you **break the UI into small reusable pieces called components**.
- A component has it's own `JS`, `CSS` and `HTML`;

# --------------------------------------------------------------------------------------------------------

# #2: What is JSX:
**JSX**(JavaScript Extension Syntax) = It lets us write **HTML directly inside JS**
- JSX is not understood by **browsers** directly.
- so **Babel** transpile JSX into JS.

# --------------------------------------------------------------------------------------------------------

# #3: Step to setup the local Environment for react: 

## 🧰 Prerequisites

Make sure you have installed:

- `Node.js` (LTS version)
- `npm` (comes with Node.js)

Check versions:
```bash
node -v
npm -v
```

---

## 🚀 Step 1: Create React Project using Vite

Run this command:

```bash
npm create vite@latest
```

---

## 🧾 Step 2: Project Setup Questions

You will be asked:

- Project name → (your choice)
- Framework → **React**
- Variant → **JavaScript** (or TypeScript if you want)

Example:
```
✔ Project name: my-app
✔ Framework: React
✔ Variant: JavaScript
```

---

## 📂 Step 3: Move into Project Folder

```bash
cd my-app
```

---

## 📦 Step 4: Install Dependencies

```bash
npm install
```

---

## ▶️ Step 5: Run Development Server

```bash
npm run dev
```

---

## 🌐 Step 6: Open in Browser

After running, you will see something like:

```
http://localhost:5173/
```

Open it in your browser.

# --------------------------------------------------------------------------------------------------------

# #4: Understanding our React App:

## Important files: 

### 1.  `src/App.css` 
CSS specifically for `App.jsx` (for **component-specific-stling**)

### 2. `src/App.jsx`  
Main house where all rooms **(components)** live

### 3. `src/index.css` 
Applies styles to **entire application** ( for `index.html`)

### 4. `src/main.jsx`  - *(DON'T TOUCH IT)*
Mount the `App.jsx` component into the `index.html` page 

### 5. `index.html`  - *(DON'T TOUCH IT)*
**Root HTML file:**  Single HTML page of your entire React app, React injects everything inside this `root`.

# --------------------------------------------------------------------------------------------------------

# #6: How to create and render Component:

Component is a reusable & independent piece of code.

## Creating a component

```jsx
function Title() {
  return ( 
    <h1>Hello World! </h1>
  );
}
```

## Rendering a Component (Two Ways)
1. `<Title></Title>`
or
2. `<Title />`

# --------------------------------------------------------------------------------------------------------
# #7: Import and Export (Component / Files):

## 1. (Default) Export and Import:

### Default Export: 
```jsx
export default Title;
```
A file can have **only one default export**

### Import: 
```jsx
import Title from "./components/Title";
```
No `{}` needed, and you can rename it


## 2. (Named) Export and import:

### Named Export:
```jsx
export {Title};
```
We can export **multiple things** from a file.

### Import: 
```jsx
import {Title} from "./conponents/Title.jsx";
```
We must use **same name inside curly braces `{}`**

# -------------------------------------------------------------------------------------------------------

# #8: Writing Markup in JSX:

**RULE 1:**  
Return a sing root element, Use Fragment (`<> </>`) to avoid extra div 

**RULE 2:**  
Always close all the tags properly.

**RULE 3:**  
camelCase most of the things - `class` → `className`.

# #9: React Fragment:

Fragments let you group a list of children without adding extra nodes to the DOM.
If you don’t want extra `<div>` in HTML:

~~~jsx
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
~~~

# #10: JSX with Curly Braces:

In React, JSX allows you to write **JavaScript inside HTML-like code** using **curly braces `{}`**.
- Curly braces let you **embed JavaScript expressions inside JSX**.

## Basic Example

~~~jsx
const name = "Pawan";

function App() {
  return <h1>Hello {name}</h1>;
}
~~~

👉 Output: `Hello Pawan`
