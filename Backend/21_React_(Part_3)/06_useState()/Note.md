# useState()

- useState is a React Hook that lets you add a state variable to your component.

```jsx
const [state, setState] = useState(initialState);
```

`useState` returns an array with exactly two values:

1. The current state. During the first render, it will match the `initialState` you have passed.
2. The `set` function that lets you update the state to a different value and trigger a re-render.

## 🔹 Key Concepts

### 1. useState Hook

~~~jsx
let [count, setCount] = useState(0);
~~~

- `count` → current state value
- `setCount` → function to update state
- `0` → initial value

👉 `useState` returns an array:
- `[state, setState]`

---

### 2. Updating State

~~~jsx
setCount(count + 1);
~~~

- Updates the state value
- Triggers **re-render**
- UI updates automatically

---

### 3. Event Handling with State

~~~jsx
<button onClick={handleclick}>Increase Count</button>
~~~

- When button is clicked → `handleclick()` runs
- Inside it → state is updated using `setCount`

---

### 4. Re-rendering

- When state changes:
  - React **re-renders the component**
  - Updated value is shown in UI

~~~jsx
<h3>Count = {count}</h3>
~~~

---

### 5. Important ⚠️ (State Update Behavior)

~~~jsx
console.log(count);
~~~

👉 This may print the **old value**, not the updated one

Reason:
- State updates are **asynchronous**
- React updates state after the function finishes
