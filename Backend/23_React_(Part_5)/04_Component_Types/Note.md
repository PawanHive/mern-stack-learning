# 🧠 React Component Design Basics

Before designing any React component, always think in 3 things:

---

## 📦 1. State
Data that changes over time inside a component.

~~~jsx
const [count, setCount] = useState(0);
~~~

👉 Ask: *What data changes?*

---

## 📤 2. Props
Data passed from parent to child component.

~~~jsx
function Ticket({ numbers }) {
  return <div>{numbers}</div>;
}
~~~

👉 Ask: *What data is coming from outside?*

---

## ⚡ 3. Events
User actions that trigger changes.

~~~jsx
<button onClick={handleClick}>Click</button>
~~~

👉 Ask: *What can user do here?*

---

## 🔄 Flow

~~~text
Event → State Update → UI Re-render → Props Update
~~~

---

## 🚀 Key Idea

Every React component =

👉 State + Props + Events

# ---------------------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------------------


# 🧩 Component Types in React

In React, component types refer to **different patterns of writing components and how they manage UI, logic, and state**. Understanding these is key to writing clean and scalable applications.

---

# 1. 🧱 Functional Components (Most Important)

This is the modern React standard.

~~~jsx
function Button() {
  return <button>Click</button>;
}
~~~

Or arrow function style:

~~~jsx
const Button = () => {
  return <button>Click</button>;
};
~~~

## 🔥 Why Functional Components?

- Support Hooks (`useState`, `useEffect`)
- Cleaner and shorter code
- Modern React standard
- Easy to reuse and maintain

## 🧠 Mental Model

~~~text
UI = function(props + state)
~~~

React re-runs the function when state or props change.

---

# 2. 🎨 Presentational (UI) Components

These components focus ONLY on UI.

~~~jsx
function Ticket({ numbers }) {
  return (
    <div>
      {numbers.map((n, i) => (
        <span key={i}>{n}</span>
      ))}
    </div>
  );
}
~~~

## 📌 Characteristics

- No or minimal state
- Receive data via props
- Pure UI rendering
- Highly reusable

## 💡 Mental Model

~~~text
"Just display what I receive"
~~~

---

# 3. 🧠 Container (Smart) Components

These handle **state + logic + data flow**.

~~~jsx
function Lottery() {
  const [ticket, setTicket] = useState([1, 2, 3]);

  function generateNew() {
    setTicket([4, 5, 6]);
  }

  return (
    <>
      <Ticket numbers={ticket} />
      <button onClick={generateNew}>Buy</button>
    </>
  );
}
~~~

## 📌 Characteristics

- Manage state
- Handle business logic
- Pass props to children
- Control application flow

## 💡 Mental Model

~~~text
"I control how the app behaves"
~~~

---

# 4. 🔁 Controlled Components

A component controlled by its parent via props.

~~~jsx
function Input({ value, onChange }) {
  return (
    <input value={value} onChange={onChange} />
  );
}
~~~

## 📌 Key Idea

- Parent owns state
- Child receives props
- Child triggers updates

## 🔄 Flow

~~~text
Parent state → props → Child UI → event → Parent updates state
~~~

---

# 5. ⚙️ Uncontrolled Components

A component that manages its own state.

~~~jsx
function Input() {
  const [text, setText] = useState("");

  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
~~~

## 📌 Key Idea

- Component manages itself
- No parent control

## 💡 Use Cases

- Simple forms
- Isolated UI behavior
- Quick features

---

# 6. ♻️ Reusable Components

Designed to be used multiple times with different data.

~~~jsx
function Badge({ text }) {
  return <span className="badge">{text}</span>;
}
~~~

Usage:

~~~jsx
<Badge text="Win" />
<Badge text="Lose" />
<Badge text="Pending" />
~~~

## 📌 Characteristics

- Flexible via props
- No hardcoded values
- Highly reusable

---

# 7. 🧱 Smart vs Dumb Components Pattern

| Type | Also Called | Responsibility |
|------|------------|----------------|
| Smart | Container | Logic + State |
| Dumb | Presentational | UI only |

---

## 💡 Example in Lottery App

### Smart Component (Lottery.jsx)
- Manages state
- Handles logic
- Controls game flow

### Dumb Component (Ticket.jsx)
- Displays numbers
- No business logic

---

# 🧠 Final Mental Model

~~~text
Functional Components
        ↓
Smart Components (Logic + State)
        ↓
Dumb Components (UI Only)
        ↓
Controlled / Uncontrolled Patterns
        ↓
Reusable Building Blocks
~~~

---

# 🚀 Key Takeaways

- Functional components are the foundation of React
- Smart components manage logic and state
- Dumb components handle only UI
- Controlled components depend on parent state
- Uncontrolled components manage their own state
- Clean React apps separate logic from UI clearly