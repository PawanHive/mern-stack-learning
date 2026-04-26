# 📌 Handling Non-Click Events in React

## 🔹 What are Non-Click Events?

Non-click events are **user interactions other than a normal click**, such as:
- Mouse hover
- Double click
- Keyboard input
- Form submission

React allows handling all these using different event attributes.

## 🔹 Key Concepts

### 2. Event Handler Naming Convention 🧠

- It is a **good practice** to name functions starting with `handle`
- Format: `handle + EventName`

Examples:
- `handleClick`
- `handleMouseOver`
- `handleDblClick`

👉 This improves **code readability and consistency**


### 5. Events Work on Any Element

- Events are not limited to buttons

~~~jsx
<p onMouseOver={handleMouseOver}>Hover here</p>
~~~

👉 Even text, divs, images can handle events

