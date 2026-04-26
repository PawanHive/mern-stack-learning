# Closure

A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) functions's variables.

**In JS, once a function completes its execution, any variables that were defined inside the function scope cease to exist.**

```jsx
function outer() {
  var b = 10;
  function inner() {
    var a =20;
    console.log(a + b);
  }
  return inner;
}
```

## Code Snippet Explained

```js
function outer() {
  console.log("outer runs"); // runs when outer() is called

  let b = 10; // local variable of outer (will be used by inner -> closure)

  function inner() {
    var a = 20; // local variable of inner
    console.log(a + b); // uses b from outer scope (closure)
  }

  return inner; // outer returns inner function (not calling it, just giving reference)
}

const fn = outer(); // outer runs, returns inner function and stores it in fn

fn(); // calls inner function -> uses closure (a + b)

// logs the function definition stored in fn (inner function)
console.log(fn);

// this calls inner again and logs its return value (undefined)
// but ALSO executes inner() again
console.log(fn());

// outer() runs again and returns inner function again
console.log(outer());

// ❌ ERROR: inner is not defined in global scope
// inner();
```