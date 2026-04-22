# 🧩 React Component Notes (Beginner Guide)

---

# 📌 What is a React Component?

A component is:

> A reusable piece of UI made using HTML + JavaScript (React logic)

---

## 📌 Examples of Components:

- Navbar  
- Button  
- Card  
- Footer  
- Sidebar  

---

# 🚀 How to Create Your First Component

## 📁 Step 1: Create a folder

Inside `src/`:

src/components/

👉 This keeps project clean and organized.

---

## 📄 Step 2: Create a file

Example:

`src/components/Hello.jsx`



## ✍️ Step 3: Write Component Code
```jsx
function Hello() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default Hello;
```


## 📥 Step 4: Use Component in `App.jsx` (Import & Render it)

### Render Component in Two ways:
1.  `<Hello></Hello>`  
or 
2.  `<Hello />`
```jsx
import Hello from "./components/Hello";

function App() {
  return (
    <div>
      <Hello />  // 'Hello' component rendering here, remember syntax: backslash used after 'Hello'
    </div>
  );
}

export default App;
```


# 🧠 Naming Conventions

## ✅ Component Naming Rules

✔ Always use **PascalCase**:

HelloWorld  
Navbar  
UserCard  
  

---

## 📁 File Naming Convention

**Match file name with component name:**

Hello.jsx  
Navbar.jsx  
UserCard.jsx  

---

# 🧩 Component Structure (Standard Format)
```jsx
function ComponentName() {
  return (
    <div>
      {/* UI goes here */}
    </div>
  );
}

export default ComponentName;
```


# ⚡ Modern Arrow Function Style
```jsx
const ComponentName = () => {
  return <div>Hello</div>;
};

export default ComponentName;
```


# 📦 Recommended Folder Structure
```bash
src/
  components/
    Navbar.jsx
    Footer.jsx
    Button.jsx
  pages/
  App.jsx
  main.jsx
```

# 🚨 Important Rules

✔ One component per file  
✔ Use PascalCase naming  
✔ Always export component  
✔ Keep components small  
✔ Reuse components instead of duplicating code  
✔ Don’t write full UI inside App.jsx  
