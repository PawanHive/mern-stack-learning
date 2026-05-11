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

# ------------------------------------------------------------------------------------------------------
# ------------------------------------------------------------------------------------------------------
# ------------------------------------------------------------------------------------------------------

# 🚀 React Learning Notes — Day: Todo App (Arrays, Objects & State)

Today I built and improved a **complete Todo application in React** while learning core concepts of **state management, arrays, objects, and CRUD operations**.

This note contains everything learned step-by-step from start to end.

---

# 📌 1. Objects in State

In React, state can store **objects** when data is related.

### Example:
~~~js
{
  name: "Pawan",
  age: 20
}
~~~

---

## Why objects in state?

Instead of multiple states:

~~~js
let [name, setName] = useState("");
let [age, setAge] = useState(0);
~~~

We can use:

~~~js
let [person, setPerson] = useState({
  name: "",
  age: 0
});
~~~

✔ Cleaner  
✔ Organized  
✔ Real-world structure  

---

## ⚠️ Important Rule

Never modify state directly:

~~~js
person.age = 21; ❌
~~~

React will NOT detect it.

---

## ✔ Correct Way

~~~js
setPerson({
  ...person,
  age: 21
});
~~~

### Spread operator:
- copies old object
- updates only required field
- creates NEW object

---

# 📌 2. Arrays in State

Arrays are used for:
- Todo list
- users
- posts
- products

---

## Example:

~~~js
let [fruits, setFruits] = useState(["apple", "banana"]);
~~~

---

## Rendering arrays

~~~jsx
fruits.map((fruit) => (
  <h1>{fruit}</h1>
))
~~~

✔ map is used to display arrays in UI

---

## ⚠️ Rule

Never modify array directly:

~~~js
fruits.push("orange"); ❌
~~~

---

## ✔ Correct Way

~~~js
setFruits([...fruits, "orange"]);
~~~

---

# 📌 3. Building Todo App (Main Activity)

We created a working Todo App.

---

## State used:

~~~js
let [todos, setTodos] = useState([
  { task: "sample", id: uuidv4(), isDone: false }
]);

let [newTodo, setNewTodo] = useState("");
~~~

---

## Features implemented:

✔ Add Todo  
✔ Display Todos  
✔ Delete Todo  
✔ Update all Todos  
✔ Update one Todo  
✔ Mark as Done  

---

# 📌 4. Controlled Input

Input is controlled using state:

~~~jsx
<input
  value={newTodo}
  onChange={updateTodoValue}
/>
~~~

---

## Input update logic:

~~~js
let updateTodoValue = (event) => {
  setNewTodo(event.target.value);
};
~~~

---

# 📌 5. Adding Todo

~~~js
setTodos((prev) => [
  ...prev,
  { task: newTodo, id: uuidv4(), isDone: false }
]);
~~~

✔ Uses functional update  
✔ Ensures latest state  

---

# 📌 6. Deleting Element from Array

We used **filter()**

---

## Logic:

~~~js
setTodos((prevTodos) =>
  prevTodos.filter((todo) => todo.id !== id)
);
~~~

---

## How it works:

Before:
~~~js
[{id: 1}, {id: 2}, {id: 3}]
~~~

Delete id = 2

After:
~~~js
[{id: 1}, {id: 3}]
~~~

✔ filter returns new array  
✔ original array NOT modified  

---

# 📌 7. Update ALL Elements in Array

Convert all tasks to uppercase:

~~~js
setTodos((prevTodos) =>
  prevTodos.map((todo) => ({
    ...todo,
    task: todo.task.toUpperCase()
  }))
);
~~~

---

✔ map updates every element  
✔ spread keeps other properties  

---

# 📌 8. Update ONE Element in Array

Update specific todo by id:

~~~js
setTodos((prevTodos) =>
  prevTodos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        task: todo.task.toUpperCase()
      };
    }
    return todo;
  })
);
~~~

---

✔ Only selected item updates  
✔ Others remain unchanged  

---

# 📌 9. Mark as Done Feature

We added:

~~~js
isDone: false
~~~

---

## Mark one todo:

~~~js
setTodos((prevTodos) =>
  prevTodos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        isDone: true
      };
    }
    return todo;
  })
);
~~~

---

## Mark all todos:

~~~js
setTodos((prevTodos) =>
  prevTodos.map((todo) => ({
    ...todo,
    isDone: true
  }))
);
~~~

---

## UI effect:

~~~jsx
style={
  todo.isDone
    ? { textDecorationLine: "line-through" }
    : {}
}
~~~

---

# 📌 10. Unique Key in React

We used:

~~~jsx
<li key={todo.id}>
~~~

✔ Helps React identify elements  
✔ Prevents rendering bugs  

---

# 📌 11. Key React Concepts Learned Today

## 🔥 Core Concepts

✔ useState  
✔ Objects in state  
✔ Arrays in state  
✔ Controlled input  
✔ map() rendering  
✔ filter() deletion  
✔ immutability  

---

## 🔥 React Patterns

✔ Add item → spread operator  
✔ Delete item → filter  
✔ Update all → map  
✔ Update one → map + condition  
✔ UI sync → state drives UI  

---

# 📌 12. Mental Model Learned

React works like this:

~~~txt
STATE → UI
USER ACTION → STATE CHANGE → RE-RENDER
~~~

---

# 📌 13. Big Learning Outcome

Today I built a real mini system:

✔ CRUD Todo App  
(Create, Read, Update, Delete)

✔ With proper state structure  
✔ With unique IDs  
✔ With real React patterns  

---

# 📌 14. Final Understanding

### React rule I learned today:

❌ Never mutate state  
✔ Always create new state  

---

# 🚀 Conclusion

Today’s learning is the **foundation of React development**.

This Todo app now includes:
- real-world structure
- proper state management
- scalable logic
- industry-level patterns

---

# 🔥 Next Topics (Future Learning)

- Update input (Edit Todo)
- Toggle Mark Done (true/false)
- Local Storage
- Component splitting
- Performance optimization

---
```
