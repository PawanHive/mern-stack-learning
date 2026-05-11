# Objects & State in React

In React, **state** stores data that can change over time.

Sometimes state is:
- a number
- a string
- a boolean

But very often, state is an **object**.

Example:
~~~js
{
  name: "Pawan",
  age: 20
}
~~~

---

# Why Use Objects in State?

Objects help store **related data together**.

Instead of:
~~~js
let [name, setName] = useState("Pawan");
let [age, setAge] = useState(20);
let [city, setCity] = useState("Lucknow");
~~~

We can do:
~~~js
let [person, setPerson] = useState({
  name: "Pawan",
  age: 20,
  city: "Lucknow"
});
~~~

This is cleaner and easier when data belongs together.

---

# Basic Syntax

~~~jsx
import { useState } from "react";

export default function App() {

  let [person, setPerson] = useState({
    name: "Pawan",
    age: 20
  });

  return (
    <div>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
    </div>
  );
}
~~~

---

# Important Rule in React State

❌ NEVER directly change state.

Wrong:
~~~js
person.age = 21;
~~~

Why wrong?
Because React does not detect direct changes properly.

React needs a **new object reference**.

---

# Correct Way → Create New Object

Use:
~~~js
setPerson({...person, age: 21});
~~~

---

# Understanding Spread Operator (`...`)

Suppose:
~~~js
person = {
  name: "Pawan",
  age: 20
}
~~~

~~~js
{...person}
~~~

creates a copy:
~~~js
{
  name: "Pawan",
  age: 20
}
~~~

Then:
~~~js
{...person, age: 21}
~~~

becomes:
~~~js
{
  name: "Pawan",
  age: 21
}
~~~

Only age changes.

---

# Full Example

~~~jsx
import { useState } from "react";

export default function App() {

  let [person, setPerson] = useState({
    name: "Pawan",
    age: 20
  });

  function increaseAge() {
    setPerson({
      ...person,
      age: person.age + 1
    });
  }

  return (
    <div>
      <h1>Name : {person.name}</h1>
      <h2>Age : {person.age}</h2>

      <button onClick={increaseAge}>
        Increase Age
      </button>
    </div>
  );
}
~~~

---

# Step-by-Step Flow

When button clicked:

## Current state
~~~js
{
  name: "Pawan",
  age: 20
}
~~~

## React creates new object
~~~js
{
  name: "Pawan",
  age: 21
}
~~~

## React compares old and new state

Since object reference changed:
✅ React re-renders component.

---

# Very Important Concept

Objects are stored by **reference**, not value.

Example:
~~~js
let obj1 = {name: "Pawan"};
let obj2 = obj1;
~~~

Both point to same memory.

So:
~~~js
obj2.name = "Rahul";
~~~

also changes:
~~~js
obj1.name
~~~

That’s why React wants:
✅ NEW OBJECT  
❌ modifying OLD OBJECT

---

# Updating Multiple Properties

~~~js
setPerson({
  ...person,
  age: 21,
  city: "Delhi"
});
~~~

---

# Nested Object Example

~~~js
let [user, setUser] = useState({
  name: "Pawan",
  address: {
    city: "Lucknow",
    pin: 226001
  }
});
~~~

Updating nested objects:

~~~js
setUser({
  ...user,
  address: {
    ...user.address,
    city: "Delhi"
  }
});
~~~

---

# Why Spread Operator is Important

Without spread:
~~~js
setPerson({age: 21});
~~~

Result:
~~~js
{
  age: 21
}
~~~

name gets deleted.

Because React replaces whole object.

State update is NOT merge automatically in hooks.

---

# Difference Between Class Components vs Hooks

Old class components:
~~~js
this.setState()
~~~

automatically merged objects.

Hooks (`useState`) do NOT merge automatically.

You must manually use:
~~~js
...object
~~~

---

# Common Beginner Mistakes

## Mistake 1
~~~js
person.age++;
setPerson(person);
~~~

Why bad?
Same object reference.

---

## Mistake 2
Forgetting spread operator:
~~~js
setPerson({age: 25});
~~~

Other properties removed.

---

## Mistake 3
Changing nested object directly:
~~~js
user.address.city = "Delhi";
~~~

Wrong.

---

# Real World Use Cases

Objects in state are used everywhere:
- forms
- user profile
- login data
- settings
- shopping cart item
- todo item
- API response

---

# Interview Question

## Q: Why do we use spread operator in React state updates?

Because React state should be immutable.  
Spread operator creates a new object instead of modifying existing state.

---

# Mental Model

Think like this:

❌ Edit existing box  
✅ Create new updated box

React likes:
~~~js
OLD OBJECT -> NEW OBJECT
~~~

not:
~~~js
EDIT OLD OBJECT
~~~

---

# Tiny Practice

Try predicting output:

~~~js
let [car, setCar] = useState({
  brand: "BMW",
  price: 50
});

setCar({
  ...car,
  price: 60
});
~~~

Final state?
~~~js
{
  brand: "BMW",
  price: 60
}
~~~