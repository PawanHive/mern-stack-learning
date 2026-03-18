# SQL Database Relationships (One-to-Many & Many-to-Many)

## 1. One-to-Many (1:N) Relationship

### Definition

A **one-to-many relationship** means:

> One row in Table A can be linked to many rows in Table B  
> But each row in Table B belongs to only one row in Table A

---

## 2. Real-Life Example

### Example: User & Posts

- One user can create **many posts**
- Each post belongs to **one user**

---

## 3. How to Implement (1:N)

### Method: Foreign Key

~~~sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE posts (
  id INT PRIMARY KEY,
  title VARCHAR(200),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
~~~

### Explanation

- `user_id` in `posts` is a **foreign key**
- It connects each post to one user
- One user → many posts

---

## 4. Visual Representation

~~~text
users              posts
------             ---------
id (PK)   ───────► user_id (FK)
name               title
                   id
~~~

---

## 5. Key Points (1:N)

- Most commonly used relationship
- Foreign key is placed on the **"many" side**
- No `UNIQUE` constraint here (because many rows allowed)

---

# --------------------------------------------

## 6. Many-to-Many (M:N) Relationship

### Definition

A **many-to-many relationship** means:

> Many rows in Table A can be linked to many rows in Table B

---

## 7. Real-Life Example

### Example: Students & Courses

- One student can enroll in **many courses**
- One course can have **many students**

---

## 8. Problem

You **cannot directly implement M:N** in SQL  
👉 Solution: Use a **Junction Table (Bridge Table)**

---

## 9. How to Implement (M:N)

~~~sql
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE courses (
  id INT PRIMARY KEY,
  title VARCHAR(100)
);

CREATE TABLE enrollments (
  student_id INT,
  course_id INT,
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);
~~~

---

## 10. Explanation

- `enrollments` is a **junction table**
- Combines both foreign keys:
  - `student_id`
  - `course_id`
- Composite primary key prevents duplicates

---

## 11. Visual Representation

~~~text
students         enrollments         courses
---------        ------------        ---------
id (PK)   ───►   student_id (FK) ◄─── id (PK)
name             course_id (FK)       title
~~~

---

## 12. Key Points (M:N)

- Always requires a **third table**
- That table stores relationships
- Can also store extra data (e.g., enrollment_date)

---

## 13. Quick Comparison

| Relationship   | Description                     | Implementation          |
|---------------|---------------------------------|------------------------|
| 1:1           | One ↔ One                      | FK + UNIQUE / PK       |
| 1:N           | One → Many                     | FK on "many" side      |
| M:N           | Many ↔ Many                    | Junction table         |

---

## Summary

- **1:N** → Use foreign key in child table  
- **M:N** → Use junction table  
- These are **core building blocks** of database design 🚀