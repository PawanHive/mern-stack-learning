# 📌 React Rendering Behavior with useState (Before & After Re-render)

## 🔹 Concept Overview

This example shows how React:
- Updates state using `useState`
- Re-renders the component
- Executes code before and after re-render

---

## 🔹 Example Code

~~~jsx
import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  console.log("Component is rendered!");
  console.log(`count = ${count}`); // after re-render

  function incCount() {
    setCount(count + 1);
    console.log(`inside incCount, count = ${count}`); // before re-render
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  )
}

export default Counter;
~~~

---

## 🔹 Key Concept: React Rendering Cycle

React component runs in **two phases**:

### 🟢 1. Initial Render
- Component runs for the first time
- State is initialized

- count = 0  
- Component is rendered!  
- count = 0  

---

### 🟡 2. Before Re-render (Inside Event Function)

When button is clicked:

~~~js
setCount(count + 1);
~~~

👉 Important:
- State is NOT updated immediately
- React schedules the update

So this line:

~~~js
console.log(count);
~~~

shows **old value**

---

### 🔵 3. After Re-render

After `setCount`:

- React re-renders component
- New state value is used

Now:

- count = 1  
- Component is rendered!  
- count = 1  

---

## 🔥 Important Observation

### Inside event handler:

~~~js
console.log(`inside incCount, count = ${count}`);
~~~

👉 Shows **old value (stale state)**

Because:
- React updates state **asynchronously**
- Re-render happens after function finishes

---

## 🔹 Flow of Execution

### Step-by-step:

1. Component renders  
   → count = 0  

2. User clicks button  
   → `incCount()` runs  
   → `setCount(count + 1)` called  

3. Inside function  
   → logs old count (0)  

4. React re-renders component  
   → count becomes 1  

5. Component runs again  
   → logs updated count (1)

---

## 🔹 Important Concepts

### 1. State Update is Asynchronous ⚠️
- `setCount()` does NOT update immediately

---

### 2. Re-render happens after state update
- UI refresh happens automatically

---

### 3. Function scope vs render scope
- Inside function → old state
- After re-render → new state

---

## 🔹 Simple Analogy 💡

- `setCount()` = placing order 🍕  
- React re-render = pizza delivered 🍕  
- Inside function log = before delivery  
- After render log = after delivery  
