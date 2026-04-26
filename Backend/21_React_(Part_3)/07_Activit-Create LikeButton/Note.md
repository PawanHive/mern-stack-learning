# 📌 Like Button with Multiple State (React)

## 🔹 Key Concepts

### 1. useState Hook

~~~jsx
let [isLiked, setIsLiked] = useState(false);
let [clicks, setClicks] = useState(0);
~~~

- `useState` is a React Hook used to create state
- It returns:
  - value (state variable)
  - setter function (to update state)

---

## 🔹 2. Multiple State Variables

- A single component can have multiple states
- Each state works independently

👉 Example:
- `isLiked` → like/unlike state
- `clicks` → number of clicks

---

## 🔹 3. Toggle Logic (Boolean Flip)

~~~jsx
setIsLiked(!isLiked);
~~~

- `!` operator flips value:
  - `true → false`
  - `false → true`

👉 Used for like/unlike functionality
