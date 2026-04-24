# React Conditionals (Different Ways)

---

## 🔥 1. `if-else` (outside JSX)

Used when logic is complex.

~~~jsx
function Message({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome Back!</h1>;
  } else {
    return <h1>Please Login</h1>;
  }
}
~~~

✔ Best for full component decisions

---

## 🔥 2. Ternary Operator (`? :`) (most common)

Used inside JSX.

~~~jsx
function Message({ isLoggedIn }) {
  return (
    <h1>
      {isLoggedIn ? "Welcome Back!" : "Please Login"}
    </h1>
  );
}
~~~

✔ Clean  
✔ Most used in React

---

## 🔥 3. Logical AND (`&&`) Operator

Used when you want to show something only if condition is true.

~~~jsx
function Message({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn && <h1>Welcome Back!</h1>}
    </div>
  );
}
~~~

👉 If `isLoggedIn = false` → nothing is shown

---

## 🔥 4. Variable-based Condition

Store JSX or values in a variable.

~~~jsx
function Message({ isLoggedIn }) {
  let text;

  if (isLoggedIn) {
    text = "Welcome Back!";
  } else {
    text = "Please Login";
  }

  return <h1>{text}</h1>;
}
~~~

✔ Improves readability for medium logic

---

## 🔥 5. Immediately Invoked Function (IIFE)

Rare but useful for complex inline logic.

~~~jsx
function Message({ isLoggedIn }) {
  return (
    <h1>
      {(() => {
        if (isLoggedIn) return "Welcome Back!";
        return "Please Login";
      })()}
    </h1>
  );
}
~~~

---

## 🧠 Summary

- `if-else` → best for full component logic
- `? :` → best for UI switching
- `&&` → best for simple show/hide
- variable → clean intermediate logic
- IIFE → advanced inline logic

---

## 🔥 One-line memory

👉 React conditionals = different ways to decide **what UI to render based on state**