# SQL Database Relationships (One-to-One)

## 1. What is a Relationship?

A relationship in a database defines **how two tables are connected** to each other.

---

## 2. One-to-One (1:1) Relationship

### Definition

A **one-to-one relationship** means:

> One row in Table A is linked to exactly one row in Table B  
> and vice versa.

---

## 3. Real-Life Example

### Example: User & Profile

- One user has **one profile**
- One profile belongs to **one user**

---

## 4. How to Implement in SQL

### Method: Using Foreign Key + UNIQUE Constraint

~~~sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE profiles (
  id INT PRIMARY KEY,
  user_id INT UNIQUE,
  bio TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
~~~

### Explanation

- `user_id` is a **foreign key**
- `UNIQUE` ensures:
  - One user → only one profile
- So relationship becomes **1:1**

---

## 5. Alternative Method (Shared Primary Key)

~~~sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE profiles (
  user_id INT PRIMARY KEY,
  bio TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
~~~

### Explanation

- `profiles.user_id` is both:
  - **Primary Key**
  - **Foreign Key**
- This strictly enforces **one-to-one**

---

## 6. When to Use One-to-One?

Use 1:1 when:

- You want to **separate sensitive data**
  - Example: user credentials vs profile
- You want to **split large tables**
- Optional data (not every user needs a profile)

---

## 7. Key Points to Remember

- Use `UNIQUE` or `PRIMARY KEY` on foreign key
- Ensures **no duplicate relationship**
- Rare compared to 1:N relationships

---

## 8. Visual Representation

~~~text
users              profiles
------             ---------
id (PK)   ───────► user_id (FK + UNIQUE)
name               bio
~~~

---

## Summary

- One-to-One = 1 row ↔ 1 row  
- Implement using:
  - `FOREIGN KEY + UNIQUE` OR
  - `SHARED PRIMARY KEY`  
- Used for **data separation and structure optimization**