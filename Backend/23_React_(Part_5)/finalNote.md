# 🚀 React Learning Notes (Lottery Project + Core Concepts)

---

# 🎰 1. Lottery Game (Part A)

In Part A, we build the basic structure of the Lottery game.

### Key Ideas:
- Use of components
- Basic JSX rendering
- Generating random numbers
- Simple UI structure

~~~jsx id="a1"
Math.floor(Math.random() * 10)
~~~

👉 Goal: Create a simple ticket display

---

# 🎯 2. Lottery Game (Part B)

Now we make it interactive using state.

### Key Ideas:
- `useState` for ticket storage
- Button click handling
- Re-rendering UI on state change

~~~jsx id="a2"
const [ticket, setTicket] = useState(genTicket(3));
~~~

~~~jsx id="a3"
<button onClick={buyTicket}>Buy Ticket</button>
~~~

👉 Goal: Generate new tickets dynamically

---

# 🔄 3. Changes to Lottery Game (Improvement Phase)

We improve structure and logic.

### Key Improvements:
- Move logic into utility functions
- Better separation of concerns
- Cleaner component structure

👉 Goal: Separate logic from UI

---

# 🧩 4. Component Types

Understanding how React components are structured.

### Types:

## Functional Components
Modern React components using functions.

## Smart Components (Container)
- Handle state
- Handle logic

## Dumb Components (UI)
- Only display data
- Receive props

👉 Goal: Separate logic and UI properly

---


# ⚡ 7. Functions as Props

Passing functions from Parent → Child.

### Why?
To allow child components to trigger parent logic.

---

## Parent Component:

~~~jsx id="a7"
function Parent() {

  function handleBuy() {
    console.log("Ticket purchased");
  }

  return <Child onBuy={handleBuy} />;
}
~~~

---

## Child Component:

~~~jsx id="a8"
function Child({ onBuy }) {
  return (
    <button onClick={onBuy}>
      Buy Ticket
    </button>
  );
}
~~~

---

## 🔄 Flow:

~~~text id="flow1"
Child Click → Calls Function → Parent Updates State → UI Re-renders
~~~

---

# 🧠 Final Concept (Everything Together)

## React Design Flow:

~~~text id="finalflow"
State (Parent)
   ↓
Props (Data to Child)
   ↓
UI Render (Child)
   ↓
Event (User Action)
   ↓
Function as Props
   ↓
State Update
   ↓
Re-render
~~~

---

# 🚀 Final Takeaways

✔ Lottery game teaches real React architecture  
✔ State should live in parent (single source of truth)  
✔ UI components should be reusable  
✔ Logic should be separated from UI  
✔ Functions as props enable child → parent communication  
✔ React is about **data flow, not just UI**

---

# 🧠 Final Insight

👉 Professional React = Clean component structure + predictable data flow + proper state design