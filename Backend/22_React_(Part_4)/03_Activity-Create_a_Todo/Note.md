# Why callback form is best in setState

When you update state like this:

~~~js
setTodos([...todos, { task: newTodo, id: uuidv4()} ]);
~~~

React may use an **old (stale) value of `todos`**, because state updates are async.

So it can cause bugs when multiple updates happen quickly.

---

## ✔️ Best practice

Use callback form:

~~~js
setTodos((prevTodos) => [...prevTodos, newTodo]);
~~~

---

## 🧠 Why it is better

- Always uses the latest state  
- Avoids stale (outdated) values  
- Works correctly with multiple updates  
- Prevents bugs in React batching  

---

## 🚀 Rule

👉 If new state depends on previous state, always use callback form.