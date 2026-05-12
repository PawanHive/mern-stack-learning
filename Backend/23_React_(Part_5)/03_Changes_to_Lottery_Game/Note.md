# 🧠 Lifting State Up in React

---

## 📌 What is Lifting State Up?

Lifting state up means:

👉 Moving shared state from child components  
👉 To their closest common parent component  

It is used when multiple components need:
- Shared data
- Synchronization
- Coordinated behavior

---

## ❗ Why Do We Need It?

If each component manages its own state:

~~~jsx
const [isActive, setIsActive] = useState(false);
~~~

Then components work independently.

But problems happen when:
- One component must affect another
- Only one item should be active at a time
- UI must stay synchronized

---

## 🧩 Solution: Lift State Up

Move the state to the closest common parent.

### Example Structure

~~~text
Accordion (Parent)
 ├── Panel
 └── Panel
~~~

Now:
- Parent owns the state
- Children receive data via props

---

## 🎯 Single Source of Truth

For every shared state:

👉 There should be ONE owner component

This is called:

# 🔥 Single Source of Truth

It ensures:
- No duplicated state
- No conflicts
- Predictable UI behavior

---

## 🔄 React Data Flow

~~~text
Parent owns state
      ↓
Parent passes props
      ↓
Child renders UI
      ↓
Child triggers parent function
      ↓
Parent updates state
      ↓
UI re-renders
~~~

---

## 💡 Example: Parent Component

~~~jsx
const [activeIndex, setActiveIndex] = useState(0);

<Panel
  isActive={activeIndex === 0}
  onShow={() => setActiveIndex(0)}
/>
~~~

---

## 🧩 Example: Child Component

~~~jsx
function Panel({ isActive, onShow }) {
  return (
    <section>
      <h3>Panel</h3>

      {isActive ? (
        <p>Content is visible</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
~~~

---

## 🔁 Functions as Props

Parent passes function:

~~~jsx
onShow={() => setActiveIndex(0)}
~~~

Child uses it:

~~~jsx
<button onClick={onShow}>Show</button>
~~~

👉 This enables:
- Child → Parent communication
- Controlled state updates

---

## 🎮 Controlled Components

A component controlled by props is:

# ✅ Controlled Component

Example:

~~~jsx
<Panel isActive={true} />
~~~

✔ Parent controls behavior  
✔ Predictable UI  
✔ Easier state management  

---

## ⚠️ Uncontrolled Components

A component managing its own state:

# ⚠️ Uncontrolled Component

Example:

~~~jsx
const [isActive, setIsActive] = useState(false);
~~~

✔ Component manages itself  
✔ Less coordination  

---

## 📏 Core Rule

👉 If multiple components share state:

✔ Lift state up  
✔ Store it in closest common parent  

---

## 🧭 Important Thinking Questions

Before writing code, ask:

1. Who should own this state?
2. Is this state shared?
3. Can this be derived instead of stored?
4. Should this component be reusable?

---

## 🚀 Key Takeaways

- Shared state belongs in parent
- Parent is single source of truth
- Props flow down
- Events flow up via functions
- Components become predictable

---

## 🧠 Final Mental Model

~~~text
State lives in Parent
      ↓
Props go to Children
      ↓
Children trigger Parent functions
      ↓
Parent updates state
      ↓
UI re-renders automatically
~~~