# Labels in React

## What are Labels?

Labels are used to describe input fields.

Examples:
- Username
- Email
- Password

A label tells the user:
> What information should be entered inside the input field.

---

# Basic HTML Label

~~~html
<label for="username">Username</label>
<input type="text" id="username" />
~~~

Here:
- `for` connects label with input
- `id` identifies the input field

When user clicks label:
- Input gets focused automatically.

---

# Labels in React

In React:

~~~jsx
<label for="username">
~~~

is WRONG because:
- `for` is reserved keyword in JavaScript.

React uses:

~~~jsx
htmlFor
~~~

instead of:

~~~jsx
for
~~~

---

# Correct React Syntax

~~~jsx
<label htmlFor="username">
  Username
</label>

<input
  type="text"
  id="username"
/>
~~~

---

# Main Concept

~~~txt
htmlFor connects label to input
~~~

Connection works like this:

~~~txt
htmlFor="username"
        ↓
Matches
        ↓
id="username"
~~~

Both values must be SAME.

---

# Why Labels are Important?

Labels improve:
- Accessibility
- User experience
- Form readability

When label is clicked:
- Input automatically gets selected/focused.

Helpful for:
- Screen readers
- Disabled users
- Better navigation

---

# Example with State

~~~jsx
import { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState("");

  return (
    <form>
      <label htmlFor="username">
        Username
      </label>

      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </form>
  );
}
~~~

---

# Multiple Labels Example

~~~jsx
<form>
  <label htmlFor="email">
    Email
  </label>

  <input
    type="email"
    id="email"
  />

  <label htmlFor="password">
    Password
  </label>

  <input
    type="password"
    id="password"
  />
</form>
~~~

---

# Common Mistakes

## Wrong

~~~jsx
<label for="username">
~~~

Correct:

~~~jsx
<label htmlFor="username">
~~~

---

## ID and htmlFor Not Matching

Wrong:

~~~jsx
<label htmlFor="name">
<input id="username" />
~~~

Correct:

~~~jsx
<label htmlFor="username">
<input id="username" />
~~~

---

# Best Practice

Always connect:
- `htmlFor`
with
- `id`

Example:

~~~jsx
<label htmlFor="email">Email</label>
<input id="email" type="email" />
~~~

---

# Mental Model

~~~txt
Label = Name of Input Field
~~~

---

# Quick Summary

| Concept | Meaning |
|---|---|
| `label` | Describes input field |
| `htmlFor` | Connects label to input |
| `id` | Unique identifier for input |
| `htmlFor` ↔ `id` | Must match |
| Benefit | Better accessibility & UX |
