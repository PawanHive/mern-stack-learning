# ⚛️ JSX Rules (React) — Quick Summary Notes

JSX is a syntax used in React that looks like HTML but works inside JavaScript. It has some important rules you must follow.

---

# 1️⃣ Rule: Return a Single Root Element

A component must return **only one parent element**.

## ✅ Correct (using div):
~~~jsx
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
~~~

## ✅ Best Practice: Use Fragment

If you don’t want extra `<div>` in HTML:

~~~jsx
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
~~~

---

## 🧠 Fragment Meaning:
- `<> </>` is called a **React Fragment**
- It groups elements without adding extra HTML nodes

---

# 2️⃣ Rule: Close All Tags Properly

All JSX tags must be **properly closed**

## ❌ Wrong:
~~~jsx
<img src="image.jpg">
~~~

---

## ✅ Correct:
~~~jsx
<img src="image.jpg" />
~~~


## 🧠 Rule Summary:
- Self-closing tags → must use `/`
- Normal tags → must have closing tag

Examples:
- `<img />`
- `<br />`
- `<input />`

---

# 3️⃣ Rule: Use camelCase for Attributes

In JSX, HTML attributes are written in **camelCase**

## ❌ HTML style:
~~~html
<img class="photo" />
~~~

## ✅ JSX style:
~~~jsx
<img className="photo" />
~~~

## 🧠 Important Conversions:

| HTML Attribute | JSX Attribute |
|------|------|
| class | className |
| for | htmlFor |
| stroke-width | strokeWidth |
| onclick | onClick |

# ⚡ Final Summary

✔ JSX must return one parent element  
✔ Use Fragment (`<> </>`) to avoid extra div  
✔ Always close tags properly  
✔ Use camelCase for attributes  
✔ `class` → `className`  
