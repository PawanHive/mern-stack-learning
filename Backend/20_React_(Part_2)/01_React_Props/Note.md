# React Props (Key Concepts + Practice Notes)

---

## 🔹 1. Props Destructuring

Instead of writing:

~~~jsx
function Product(props)
~~~

We use:

~~~jsx
function Product({ title, price })
~~~

✔ This is called **destructuring props**

👉 It allows direct access to values instead of using:
- props.title
- props.price

---

## 🔹 2. Default Prop Value

~~~jsx
price = 1
~~~

✔ This means:

- If no `price` is passed → default value = `1`
- If `price` is passed → that value will be used

👉 Example:

~~~jsx
function Product({ title, price = 1 }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{price}</p>
    </div>
  );
}
~~~

---

## 🔹 Parent Component (ProductTab)

~~~jsx
import Product from "./Product";

function ProductTab() {
  return (
    <>
      <Product title="Phone" price={30000} />
      <Product title="laptop" price="40,000" />
      <Product title="pen" price="10" />
    </>
  );
}

export default ProductTab;
~~~

---

## 🔹 Important Points

---

### ✔ Passing Props

~~~jsx
<Product title="Phone" price={30000} />
~~~

- `title` → string prop  
- `price` → number prop (must use `{}` for numbers)

---

### ✔ Props are Key-Value Pairs

~~~jsx
<Product title="Phone" price={30000} />
~~~

Internally React treats it like:

~~~js
{
  title: "Phone",
  price: 30000
}
~~~

---

### ✔ Props in Child Component

~~~jsx
function Product({ title, price })
~~~

We directly access:

- `title`
- `price`

Instead of:

~~~jsx
props.title
props.price
~~~

---

## 🔥 Summary

- Props = data passed from parent → child
- Props are objects (key-value pairs)
- Destructuring makes code cleaner
- Default values prevent undefined errors
- Props are read-only