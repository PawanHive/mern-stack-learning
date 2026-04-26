# 📌 React Learning Summary (Events → State → Closure → Rendering)

---

# 🔹 1. Event Handling in React

## ✔ Basic Idea
- React uses **camelCase events** → `onClick`, `onChange`
- Events take **function reference**, not function call

~~~jsx
<button onClick={handleClick}>Click</button>
~~~

---

## 🔹 Important Rules

- ✅ `onClick={handleClick}` → correct  
- ❌ `onClick={handleClick()}` → runs immediately  

- `on` prefix is **mandatory**
  - `onClick`, `onMouseOver`, `onSubmit`

---

## 🔹 Multiple Events

~~~jsx
<p onMouseOver={handleHover}>Hover</p>
<button onDoubleClick={handleDblClick}>Double</button>
~~~

---

# 🔹 2. Event Object

- Automatically passed to handler

~~~js
function handleClick(e) {
  console.log(e.target);
}
~~~

---

## 🔹 Important Methods

~~~js
e.preventDefault();   // stop default behavior
e.stopPropagation();  // stop bubbling
~~~

---

## 🔹 Form Handling

~~~jsx
<form onSubmit={handleSubmit}>
~~~

~~~js
function handleSubmit(e) {
  e.preventDefault(); // stop page reload
}
~~~

---

# 🔹 3. useState Hook

~~~js
const [state, setState] = useState(initialValue);
~~~

- `state` → value  
- `setState` → update function  

---

## 🔹 Important Rules

- ❌ Don’t update directly:
~~~js
state = 10;
~~~

- ✅ Use setter:
~~~js
setState(10);
~~~

---

# 🔹 4. State Update & Re-render

- State change → triggers **re-render**

~~~js
setCount(count + 1);
~~~

---

## 🔹 Key Behavior

- State update is **asynchronous**
- Inside function → old value  
- After render → new value  

---

# 🔹 5. Functional Update (Very Important)

## ❌ Problem

~~~js
setCount(count + 1);
setCount(count + 1);
~~~

👉 may not work correctly

---

## ✅ Solution

~~~js
setCount(prev => prev + 1);
~~~

👉 always uses latest state

---

# 🔹 6. Multiple State Variables

~~~js
const [isLiked, setIsLiked] = useState(false);
const [clicks, setClicks] = useState(0);
~~~

👉 Each state works independently

---

# 🔹 7. Toggle Logic

~~~js
setIsLiked(!isLiked);
~~~

- `true ↔ false`
- Used for like/unlike

---

# 🔹 8. Conditional Rendering

~~~jsx
isLiked 
  ? <FilledHeart /> 
  : <EmptyHeart />
~~~

---

# 🔹 9. Re-render Triggers

## ✅ Happens when:
- State changes
- Props change
- Parent re-renders
- Context changes

## ❌ Does NOT happen when:
~~~js
let x = 10;
x = 20;
~~~

---

# 🔹 10. useState Initialization

## ✅ Normal

~~~js
useState(0);
~~~

---

## ✅ Lazy Initialization
##  Good practice
~~~js
useState(init);
~~~

👉 runs only once

---

## ❌ Wrong practice

~~~js
useState(init());
~~~

👉 runs every render

---

# 🔹 11. Closure Concept

~~~js
function outer() {
  let b = 10;
  function inner() {
    console.log(b);
  }
  return inner;
}
~~~

---

## 🔹 Definition

👉 Closure =  function + outer variables memory

---

## 🔹 Key Idea

- Inner function remembers outer variables
- Even after outer function ends

---

# 🔹 12. Scope Rules

- Inner function is **not accessible globally**

~~~js
inner(); ❌ error
~~~

---

## ✅ Correct

~~~js
const fn = outer();
fn();
~~~

---

# 🔹 13. Function Reference vs Call

| Code | Meaning |
|------|--------|
| `fn` | reference |
| `fn()` | execution |

---

# 🔹 14. React Rendering Flow

### Step-by-step:

1. Render → state initialized  
2. Click → event runs  
3. setState called  
4. React schedules update  
5. Component re-renders  
6. UI updates  

---

# 🔥 Final Key Takeaways

- Use **function reference in events**
- Always update state using **setter**
- Use **functional update** when depending on previous state
- React re-renders on **state/props/context change**
- Closures help React remember values
- `useState(init)` is better than `useState(init())`

---

# 🚀 One-line Summary

👉 **React = State + Re-render + Closure working together**

---