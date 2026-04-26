# 📌 useState Initialization (Value vs Function)

## 🔹 Concept Overview

In React, `useState` can accept:
1. A direct value  
2. A function (lazy initialization) ⭐  

Understanding the difference is important for **performance optimization**.

---

## 🔹 1. Direct Value Initialization

~~~js
const [count, setCount] = useState(0);
~~~

- Simple and common usage
- Initial value is set directly

---

## 🔹 2. Function Initialization (Lazy Initialization) ✅

~~~js
const [count, setCount] = useState(() => {
  console.log("runs once");
  return 0;
});
~~~

👉 React will:
- Call this function **only once (initial render)**
- Not on every re-render

---

## 🔥 Important Difference

### ❌ Wrong (Common Mistake)

~~~js
useState(someFunction());
~~~

- Executes function **immediately**
- Runs on **every render**
- Bad for performance ❌

---

### ✅ Correct (Function Reference)

~~~js
useState(someFunction);
~~~

- Passes function reference
- React calls it **only once**
- Efficient ✅

---

## 🔥 One-line Memory Trick

👉 **Pass function, not function call**

---