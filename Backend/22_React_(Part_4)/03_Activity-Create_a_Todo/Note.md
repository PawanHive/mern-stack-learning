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

# -------------------------------------------------------------------------------------------------------

## Updating Arrays in State

When dealing with arrays inside React state, avoid the methods in the left column,
and instead prefer the methods in the right column:

| Operation  | ❌ Avoid (mutates the array)       | ✅ Prefer (returns a new array)          |
|------------|-----------------------------------|------------------------------------------|
| adding     | `push`, `unshift`                 | `concat`, `[...arr]` spread syntax       |
| removing   | `pop`, `shift`, `splice`          | `filter`, `slice`                        |
| replacing  | `splice`, `arr[i] = ...`assignment| `map`                                    |
| sorting    | `reverse`, `sort`                 | copy the array first                     |

> Alternatively, you can use **Immer** which lets you use methods from both columns.