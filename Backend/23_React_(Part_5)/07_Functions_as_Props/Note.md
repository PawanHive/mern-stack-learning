# ⚡ Passing Functions as Props in React

---

## 📌 What does it mean?

Passing a function as props means:

👉 Sending a function from Parent → Child  
👉 So the Child can trigger it when needed

---

# 🧱 Step 1: Create Function in Parent

~~~jsx
function Parent() {

  function handleClick() {
    console.log("Button clicked from Child");
  }

  return <Child onAction={handleClick} />;
}
~~~

---

# 📤 Step 2: Pass Function as Prop

~~~jsx
<Child onAction={handleClick} />
~~~

✔ You are passing function reference  
❌ NOT calling it

---

## ❌ Wrong Way

~~~jsx
<Child onAction={handleClick()} />
~~~

This executes function immediately (wrong)

---

## ✅ Correct Way

~~~jsx
<Child onAction={handleClick} />
~~~

---

# 🧩 Step 3: Receive Function in Child

~~~jsx
function Child({ onAction }) {
  return (
    <button onClick={onAction}>
      Click Me
    </button>
  );
}
~~~

---

# 🔄 Flow of Execution

~~~text
Parent defines function
      ↓
Function passed as prop
      ↓
Child receives function
      ↓
User clicks button
      ↓
Function executes in Parent
~~~

---

# 🎯 Real Example (Lottery App)

## Parent Component

~~~jsx
function Lottery() {

  function buyTicket() {
    console.log("Ticket generated");
  }

  return <Ticket onBuy={buyTicket} />;
}
~~~

---

## Child Component

~~~jsx
function Ticket({ onBuy }) {
  return (
    <button onClick={onBuy}>
      Buy Ticket
    </button>
  );
}
~~~

---

# 🧠 Key Rules

- Pass function without `()`
- Child only triggers function
- Parent owns logic
- Child handles interaction

---

# 🚀 Final Mental Model

~~~text
Parent function → passed as prop → Child triggers → Parent executes logic
~~~

---

# 🔥 Key Takeaway

Passing functions as props enables:
- Child → Parent communication
- Clean state management
- Lifting state up pattern