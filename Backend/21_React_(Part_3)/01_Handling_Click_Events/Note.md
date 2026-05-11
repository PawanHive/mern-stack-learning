

### 1. Event Handler Functions
- `printHello` and `printBye` are **event handler functions**
- They define what should happen when an event occurs

---

### 3. Function Reference (Important ⚠️)

✔ Correct:
~~~jsx
onClick={printHello}
~~~

❌ Wrong:
~~~jsx
onClick={printHello()}
~~~

- Passing `printHello()` will execute immediately (not on click)
- Always pass **function reference**


### 3. Why `on` is Important ⚠️

- In React, all event attributes **must start with `on`**
- It tells React: 👉 "this is an event listener"

Examples:
- `onClick` → click event
- `onChange` → input change
- `onSubmit` → form submit
- `onMouseEnter` → mouse hover