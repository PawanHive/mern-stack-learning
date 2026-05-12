# Important Link: 

**Formik Website Doc**:[https://formik.org/docs/tutorial]


# React Form Validation using Formik

## What is Form Validation?

Form validation means:
> Checking whether user input is correct or not before submitting the form.

Examples:
- Required fields should not be empty
- Email must have correct format
- Password should meet rules (length, characters, etc.)

---

# Why Formik?

:contentReference[oaicite:0]{index=0} is a popular library used in React to:
- manage form state
- handle validation
- simplify form submission
- reduce manual useState logic

👉 It helps you build scalable and clean forms.

---

# Installation

```bash
npm install formik
```

---

# Core Idea of Formik

Formik replaces manual form handling like this:
- multiple `useState`
- manual validation logic
- repetitive handlers

With:
- single structured form system

---

# Basic Structure

Formik uses 4 main components:

| Component | Purpose |
|---|---|
| `Formik` | Wrapper for form logic |
| `Form` | Replaces HTML `<form>` |
| `Field` | Replaces `<input>` |
| `ErrorMessage` | Shows validation errors |

---

# Basic Formik Example

```jsx
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function SignupForm() {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>

        <Field name="username" placeholder="Username" />
        <ErrorMessage name="username" component="div" />

        <Field name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />

        <button type="submit">Submit</button>

      </Form>
    </Formik>
  );
}
```

---

# Important Concepts

## 1. initialValues

```js
initialValues={{
  username: "",
  email: ""
}}
```

👉 Defines default form state.

---

## 2. Field

```jsx
<Field name="username" />
```

👉 Automatically connects input to Formik state.

No need for `useState`.

---

## 3. Form

```jsx
<Form>
```

👉 Replaces normal HTML `<form>` tag.

---

## 4. onSubmit

```js
onSubmit={(values) => {
  console.log(values);
}}
```

👉 Gets all form data in one object.

---

# Form Validation in Formik

Formik allows validation using `validate` function.

---

# Example: Validation Function

```jsx
validate={(values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Username is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!values.email.includes("@")) {
    errors.email = "Invalid email format";
  }

  return errors;
}}
```

---

# How Validation Works

```txt
User submits form
      ↓
validate() runs
      ↓
Errors found?
   ↓        ↓
 Yes        No
 ↓          ↓
Show error  Submit form
```

---

# Showing Errors

```jsx
<ErrorMessage name="username" component="div" />
```

👉 Automatically displays validation message.

---

# Full Validation Example

```jsx
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function SignupForm() {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
      }}

      validate={(values) => {
        const errors = {};

        if (!values.username) {
          errors.username = "Username is required";
        }

        if (!values.email) {
          errors.email = "Email is required";
        } else if (!values.email.includes("@")) {
          errors.email = "Invalid email format";
        }

        return errors;
      }}

      onSubmit={(values) => {
        console.log("Form Data:", values);
      }}
    >
      <Form>

        <Field name="username" placeholder="Username" />
        <ErrorMessage name="username" component="div" />

        <Field name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />

        <button type="submit">Submit</button>

      </Form>
    </Formik>
  );
}
```

---

# Formik Flow

```txt
User types input
      ↓
Formik updates state internally
      ↓
User submits form
      ↓
validate() runs
      ↓
If errors → show messages
If no errors → onSubmit runs
```

---

# Advantages of Formik

✔ Removes need for multiple `useState`  
✔ Simplifies form handling  
✔ Built-in validation system  
✔ Cleaner and scalable code  
✔ Easy error handling  

---

# When to Use Formik?

Use Formik when:
- forms are medium or large
- validation is required
- multiple inputs exist
- production-level applications

---

# Mental Model

```txt
React Manual Form → You manage everything
Formik Form → Library manages everything
```

---

# Quick Summary

| Concept | Meaning |
|---|---|
| Formik | Form handling library |
| Field | Input replacement |
| Form | Form wrapper |
| initialValues | Default values |
| validate | Validation logic |
| ErrorMessage | Shows errors |
| onSubmit | Handles submission |

---