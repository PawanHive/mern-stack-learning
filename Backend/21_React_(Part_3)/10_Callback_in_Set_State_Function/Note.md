## Callback in Updater Function
- How to change state when it depends on the current value

# 📌 useState Callback Form (Functional Update in React)

## 🔹 Concept Overview

In React, `setState` (like `setCount`) can be used in **two ways**:
1. Direct value update
2. Functional update (callback form) ⭐

This explains why callback form is important when updating state multiple times.

---

## 🔹 Example Code

~~~jsx
import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function incCount() {

    // ❌ FIRST WAY (Direct update)
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // 👉 React batches updates, so result may not be +4

    // ✅ SECOND WAY (Functional update / Callback form)
    setCount((currCount) => {
      return currCount + 1;
    });

    setCount((currCount) => {
      return currCount + 1;
    });

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

## 🔥 Key Concepts

## 🔹 1. Direct State Update ❌

~~~js
setCount(count + 1);
~~~

### Problem:
- Uses **old (stale) value of count**
- React batches updates
- Multiple calls may override each other

Example:
~~~js
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
~~~

👉 Result may still be:
- ❌ +1 instead of +4

---

## 🔹 2. Functional Update (Callback Form) ✅

~~~js
setCount((currCount) => currCount + 1);
~~~

### Why it works:

- React passes **latest state automatically**
- Each update uses updated value

---

## 🔥 Step-by-step execution

Initial:
~~~js
count = 0
~~~

### First update:
~~~js
currCount = 0 → 1
~~~

### Second update:
~~~js
currCount = 1 → 2
~~~

👉 Final result:
~~~js
count = 2
~~~

---

## 🔹 Why callback form is better

✔ Uses latest state  
✔ Avoids stale value problem  
✔ Works correctly with multiple updates  
✔ Safe with React batching  

---

## 🔥 Important Concept: React batching

React groups multiple state updates together for performance.

---

## 🔹 Comparison

| Method | Behavior |
|--------|----------|
| `setCount(count + 1)` | may use old value |
| `setCount(prev => prev + 1)` | always uses latest value |
