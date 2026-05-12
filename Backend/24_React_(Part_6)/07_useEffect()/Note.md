# useEffect()
- The Effect Hook lets you perform side effects in function components

- Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.

# -------------------------------------------------------------------------------------------------------

# useEffect() in React

## What is useEffect?

:contentReference[oaicite:0]{index=0} provides a Hook called **useEffect()**.

> `useEffect()` is used to handle **side effects** in functional components.

---

# What are Side Effects?

Side effects are tasks that happen **outside rendering UI**, such as:

- Fetching data from API
- Updating document title
- Using timers (setTimeout, setInterval)
- Working with localStorage
- Event listeners / subscriptions

👉 Simple meaning:
> Anything that affects something outside the component rendering process.

---

# Basic Syntax

```jsx
useEffect(() => {
  // side effect logic
}, [dependencies]);
```

---

# Default Behavior

```txt
Runs after every render
```

That means:
- initial render
- every state update
- every re-render

---

# Dependency Array (VERY IMPORTANT)

## 1. No dependency array

```jsx
useEffect(() => {
  console.log("Runs after every render");
});
```

👉 Runs every time component renders.

---

## 2. Empty dependency array []

```jsx
useEffect(() => {
  console.log("Runs only once");
}, []);
```

👉 Runs only once when component loads (mounts).

---

## 3. With dependency values

```jsx
useEffect(() => {
  console.log("Runs when count changes");
}, [count]); // '[count]' is dependencies
```

👉 Runs only when `count` changes.

---

# Real Example: Counter

```jsx
import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
```

---

# Common Use Cases

## 1. API Calls (Data Fetching)

```jsx
useEffect(() => {
  fetch("https://api.example.com/data")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
```

👉 Runs once when page loads.

---

## 2. Update Document Title

```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

---

## 3. Timers

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => clearInterval(timer);
}, []);
```

---

## 4. Cleanup Function

```jsx
useEffect(() => {
  console.log("Component mounted");

  return () => {
    console.log("Component unmounted");
  };
}, []);
```

👉 Cleanup runs when component is removed.

---

# Lifecycle Flow

```txt
Component renders
      ↓
UI updates
      ↓
useEffect runs
      ↓
(Optional cleanup before next effect)
```

---

# Dependency Rules

| Type | Behavior |
|---|---|
| No dependency | Runs after every render |
| [] | Runs once on mount |
| [value] | Runs when value changes |

---

# Important Concept

```txt
useEffect = run code after UI is rendered
```

---

# Real-Life Analogy

- React render = building house walls
- useEffect = installing electricity, plumbing, etc.

👉 It happens AFTER UI is ready.

---

# Common Mistakes

## 1. Missing dependency

```jsx
useEffect(() => {
  console.log(count);
}, []);
```

❌ Wrong if `count` is used

---

## 2. Infinite loop

```jsx
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

⚠️ Causes continuous re-render loop

---

## 3. Not cleaning up timers

If using `setInterval`, always clear it.

---

# Mental Model

```txt
Render → UI shown
useEffect → background work
```

---

# Quick Summary

| Concept | Meaning |
|---|---|
| useEffect | Handles side effects |
| Runs | After render |
| [] | Run once |
| [value] | Run on change |
| Cleanup | Runs on unmount |
| Use cases | API, timers, DOM updates |

---