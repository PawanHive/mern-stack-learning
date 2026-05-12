# Handling Multiple Inputs in React

## What is Handling Multiple Inputs?

When a form has multiple fields like:
- Username
- Email
- Password

we need a way to manage all inputs efficiently.

Instead of creating separate state for every input, React commonly uses:
- One object state
- One change handler

---

# Main Concept

~~~txt
One state object stores all form data
~~~

Example:

~~~jsx
const [formData, setFormData] = useState({
  username: "",
  email: "",
  password: "",
});
~~~

Here:
- `formData` stores all input values.

---

# Why Use Single Object State?

Instead of:

~~~jsx
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
~~~

we use one object because:
- Less repetitive code
- Easier form management
- Better for large forms

---

# Basic Example

~~~jsx
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  function handleInputChange(event) {
    const field = event.target.name;
    const value = event.target.value;

    setFormData((currData) => {
      return {
        ...currData,
        [field]: value,
      };
    });
  }

  return (
    <form>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
    </form>
  );
}
~~~

---

# Important Concepts

---

# 1. `name` Attribute

~~~jsx
name="username"
~~~

The `name` attribute tells:
> Which input field changed.

Example:

~~~txt
name="username"
name="email"
~~~

---

# 2. `event.target.name`

~~~jsx
const field = event.target.name;
~~~

Gets the name of changed input.

Example:

~~~txt
field = "username"
~~~

---

# 3. `event.target.value`

~~~jsx
const value = event.target.value;
~~~

Gets current input value.

Example:

~~~txt
value = "Pawan"
~~~

---

# 4. Computed Property Names

~~~jsx
[field]: value
~~~

Dynamically updates matching field.

Example:

~~~jsx
[field]: "Pawan"
~~~

becomes:

~~~jsx
username: "Pawan"
~~~

if:

~~~jsx
field = "username"
~~~

---

# 5. Spread Operator

~~~jsx
...currData
~~~

Keeps old data safe while updating one field.

Without spread operator:
- Previous data gets deleted.

---

# Flow of Multiple Inputs

~~~txt
User types
   ↓
onChange runs
   ↓
Get input name
   ↓
Get input value
   ↓
Update matching field in state
   ↓
React re-renders
~~~

---

# Example with 3 Inputs

~~~jsx
import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    const field = event.target.name;
    const value = event.target.value;

    setFormData((currData) => {
      return {
        ...currData,
        [field]: value,
      };
    });
  }

  return (
    <form>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />
    </form>
  );
}
~~~

---

# Common Mistakes

## Missing `name`

~~~jsx
<input type="text" />
~~~

Problem:
- React cannot identify changed field.

---

## Missing Spread Operator

~~~jsx
setFormData({
  [field]: value
});
~~~

Problem:
- Old fields get removed.

---

## Wrong Computed Property Syntax

Wrong:

~~~jsx
field: value
~~~

Correct:

~~~jsx
[field]: value
~~~

---

# Core Idea

~~~txt
One function can handle all inputs
~~~

using:
- object state
- name attribute
- computed property names

---

# Mental Model

~~~txt
Input name tells React:
Which field should update
~~~

---

# Quick Summary

| Concept | Meaning |
|---|---|
| Object State | Stores all form fields |
| `name` | Identifies input |
| `event.target.name` | Gets changed field |
| `event.target.value` | Gets input value |
| `[field]: value` | Dynamically updates field |
| `...currData` | Keeps previous data safe |
| One Handler | Handles all inputs |
