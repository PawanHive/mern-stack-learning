# CRUD Operations

## What is CRUD?
**CRUD** stands for:
- **C**reate
- **R**ead
- **U**pdate
- **D**elete  

These are the **basic operations** used to manage data in applications and databases.

---

## CRUD with REST API

### 1. Create
- Adds new data
- HTTP Method: `POST`

---

### 2. Read
- Fetches data
- HTTP Method: `GET`

---

### 3. Update
- Modifies existing data
- HTTP Method: `PUT` or `PATCH`

- `PUT` replaces the entire resource, while `PATCH` updates only specific fields.

---

### 4. Delete
- Removes data
- HTTP Method: `DELETE`

---

## What 'resource' term mean in (REST)

A **resource** is any data that an API manages and exposes through a URL.

Examples:
- `/users` -- here `users` is **resource**
- `/users/1`
- `/posts` -- here `posts` is **resource**

Resources are:
- Identified by URLs
- Usually nouns
- Created, read, updated, and deleted using HTTP methods

---

## Sigma Prime Note:

- `GET` - retrieves resources.
- `POST` - submits new data to the server
- `PUT` - updates existing data
- `PATCH` - update existing data partially
- `DELETE` - removes data