# 📌 Event Object in Form Handling (React)

## 🔹 What is Happening Here?

This example shows how to use the **event object in form submission**.

When a form is submitted, React passes an **event object** to the handler function, which gives full control over the event.

## 🔹 Key Concepts

### 1. Event Object in Forms
- When form is submitted, React automatically sends an **event object**
- It is received as a parameter in the handler function

~~~jsx
function handleFormSubmit(event)
~~~

👉 `event` contains all details about the form submission


### 3. `event.preventDefault()` ⚠️

- By default, form submission **reloads the page**
- `preventDefault()` stops this behavior

~~~jsx
event.preventDefault();
~~~

👉 Without this:
- Page refreshes
- Your React app loses state/data

-