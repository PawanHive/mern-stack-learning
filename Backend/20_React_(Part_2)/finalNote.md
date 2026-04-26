# 📘 React Learning Notes (Today)

---

## 🔹 1. Props in React

- Props = **data passed from parent → child component**
- Props are **read-only**
- Props are **objects (key-value pairs)**

### ✔ Example
~~~jsx
<Product title="Phone" price={30000} />
~~~

---

## 🔹 2. Destructuring Props

Instead of:
~~~jsx
function Product(props)
~~~

Use:
~~~jsx
function Product({ title, price })
~~~

✔ Cleaner and easier to use

---

## 🔹 3. Default Props

~~~jsx
function Product({ price = 1 })
~~~

✔ If no value is passed → default is used

---

## 🔹 4. Passing Different Data Types

Props can pass:

- String  
- Number  
- Array  
- Object  

### ✔ Example
~~~jsx
<Product features={["hi-tech", "durable"]} />
<Product features2={{ a: "metal-body" }} />
~~~

---

## 🔹 5. Array Rendering (Important)

- React cannot display arrays directly
- Must convert array → JSX using `.map()`

### ✔ Proper Example
~~~jsx
<ul>
  {features.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
~~~

### My real Example: 
```jsx
import "./Product.css"; // we can also import .css files

function Product({ title, price, features, features2 }) {
  const list = features.map((feature) => <li>{feature}</li>)

  return (
    <div className="Product">
      <h1>{title}</h1>
      <p>Price : {price}</p>
      {/* <p>{list}</p> */}
      <p>{features.map((feature) => <li>{feature}</li>)}</p> {/* here we directly written the logic  */}
    </div>
  );
}

export default Product;

```

---

## 🔹 6. Key Concept

- `key` is required when rendering lists
- Helps React efficiently update UI

---

## 🔹 7. Conditional Rendering

Different ways:

### ✔ if-else
~~~jsx
if (isLoggedIn) return <h1>Welcome</h1>;
~~~

### ✔ Ternary
~~~jsx
{isLoggedIn ? "Welcome" : "Login"}
~~~

### ✔ && operator
~~~jsx
{isLoggedIn && <h1>Welcome</h1>}
~~~

---

## 🔹 8. Dynamic Styling

Changing styles based on condition/state

### ✔ Example
~~~jsx
<button className={isActive ? "active" : ""}>
~~~

### My Real Example: 
```jsx
let styles = {backgroundColor: price > 30000 ? "blue" : "yellow"} // make component bg blue who matches this condition, else will be yellow
  return (
    <div className="Product" style={styles}> 
      <h1>{title}</h1>
      <p>Price : {price}</p>
      {price > 30000 && <p>Discount of 5%</p>}
    </div>
  );
```

---

## 🔥 Summary

- Props = data flow (parent → child)
- Arrays need `.map()` to render
- Conditionals control UI
- Styling can change dynamically

