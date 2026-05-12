# Forms in React

## What are Forms?

Forms are used to take input from users.

Examples:
- Login Form
- Signup Form
- Search Bar
- Comment Box

In React, forms are usually controlled using:
- `useState()`
- Event handling

---

# Main Concept of React Forms

In React:

~~~txt
State stores the form data
~~~

The input field only shows the data stored in state.

This is called a:

# Controlled Component

---

# Controlled Component

A controlled component means:

~~~txt
React state controls the input value
~~~

Example:

~~~jsx
<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
~~~

Here:
- `value={name}` → input gets value from state
- `onChange` → updates state when user types

So:
- State and input always stay synchronized.

---

# How Form Works in React

~~~txt
User types
   ↓
onChange runs
   ↓
State updates
   ↓
React re-renders
   ↓
Input gets updated value
~~~

This process keeps:
- UI updated
- Data controlled by React

---

# Basic Example

~~~jsx
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hello {name}</p>
    </form>
  );
}
~~~

---

# Understanding Important Parts

## `useState()`

~~~jsx
const [name, setName] = useState("");
~~~

Stores input value.

---

## `value`

~~~jsx
value={name}
~~~

Connects input with state.

Input always shows current state value.

---

## `onChange`

~~~jsx
onChange={(e) => setName(e.target.value)}
~~~

Runs whenever user types.

Updates state with new input value.

---

# Form Submission

Forms are submitted using:

~~~jsx
onSubmit
~~~

Example:

~~~jsx
function handleSubmit(event) {
  event.preventDefault();

  console.log(name);
}
~~~

~~~jsx
<form onSubmit={handleSubmit}>
~~~

---

# Why `preventDefault()`?

Normally:
- Form reloads page after submit.

~~~jsx
event.preventDefault();
~~~

Stops page reload.

React apps usually avoid page refresh.

---

# Controlled vs Uncontrolled

## Controlled

~~~jsx
<input value={name} onChange={handleChange} />
~~~

- React controls input
- Most commonly used

---

## Uncontrolled

~~~jsx
<input />
~~~

- Browser controls input
- Less used in React

---

# Common Mistakes

## Missing `onChange`

~~~jsx
<input value={name} />
~~~

Problem:
- Input becomes read-only.

---

## Wrong `onChange`

~~~jsx
onChange={setName}
~~~

Correct:

~~~jsx
onChange={(e) => setName(e.target.value)}
~~~

---

# Important Events

| Event | Purpose |
|---|---|
| `onChange` | Detect typing |
| `onSubmit` | Detect form submit |
| `onFocus` | Input selected |
| `onBlur` | Input loses focus |

---

# Core Idea

~~~txt
Input does not store data
State stores data
~~~

The input field only displays the state value.

React forms are mainly about:

~~~txt
Input ↔ State Synchronization
~~~

---

# Quick Summary

| Concept | Meaning |
|---|---|
| `useState()` | Stores form data |
| `value` | Connects input to state |
| `onChange` | Updates state |
| Controlled Component | React controls input |
| `onSubmit` | Handles form submission |
| `preventDefault()` | Stops page reload |
