# JavaScript (OOP) – Summary Sheet

## Q1. What is Object-Oriented Programming (OOP)?
**Ans:**  
Object-Oriented Programming (OOP) is a programming paradigm in computer science that relies on the concept of **classes** and **objects**. It is used to structure a software program into simple, reusable pieces of code blueprints (called classes), which are used to create individual instances of objects.

---

## Q2. What are some benefits of using OOP in JavaScript?
**Ans:**  
Some benefits of using OOP in JavaScript include:
- Improved code organization (better structure)
- Reusability of code
- Better maintainability
- Closeness to real-world objects

---

## Q3. What is the difference between an object and a class in JavaScript?
**Ans:**  
- **Object:** A standalone entity with properties and methods. It can be created directly or using constructor functions.
- **Class:** A blueprint for creating objects.

---

## Q4. What is a constructor function in JavaScript?
**Ans:**  
A constructor function is a special function used to create and initialize objects in JavaScript. When a new object is created using a constructor function, it is automatically assigned properties and methods defined inside the function.

---

## Q5. What is a prototype chain in JavaScript?
**Ans:**  
Every object in JavaScript has a built-in property called **prototype**. The prototype itself is also an object and has its own prototype. This creates a chain known as the **prototype chain**, which ends when a prototype with `null` is reached.

---

## Q6. What is the difference between a constructor and a class in JavaScript?
**Ans:**  
- A **constructor** is a function that creates and initializes objects.
- A **class** is a blueprint for creating objects.

> Note: In JavaScript, classes are syntactic sugar over constructor functions.

---

## Q7. Why is the `new` keyword used in JavaScript?
**Ans:**  
The `new` keyword is used to create an instance of an object. When used with a constructor function, it:
- Creates a new object
- Sets the constructor function’s `this` to point to the new object

---

## Q8. What is Inheritance in OOP?
**Ans:**  
Inheritance is the ability of a class to derive properties and methods from another class while also having its own properties.

---

## Q9. What is the `super` keyword in JavaScript?
**Ans:**  
The `super` keyword refers to the parent class. It is used to access variables, methods, or the constructor of the base class from the derived class.

---
