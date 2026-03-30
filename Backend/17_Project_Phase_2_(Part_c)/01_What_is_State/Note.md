# #Sigma Note:

### Stateful Protocol:
*Stateful Protocol require server to save the status and session information.*
eg - `ftp`

### Stateless Protocol:
*Stateless Protocol does not require the server to retain the server infomation.*

# ----------------------------------------------------------------------------------------------------

# State, Stateful & Stateless Protocols

## 1. What is State?

**State** means:

> Information about a user's interaction stored between requests

---

### Example

~~~text
User logs in → server remembers user → user accesses dashboard
~~~

👉 That “remembering” = **state**

---

## 2. Stateful Protocol

### Definition

A **stateful protocol** is:

> A protocol where the server remembers previous interactions with the client

---

### Example: FTP (File Transfer Protocol)

- Connection stays open
- Server remembers:
  - User login
  - Current directory
  - Previous commands

---

### How It Works

~~~text
Client connects → logs in
       ↓
Server stores session info
       ↓
Client sends next command
       ↓
Server uses previous state
~~~

---

### Features

- Maintains session
- Continuous connection
- Context is preserved

---

### Advantages

- Easier for complex interactions
- No need to send data repeatedly

---

### Disadvantages

- More memory usage
- Harder to scale
- Server must track users

---

## 3. Stateless Protocol

### Definition

A **stateless protocol** is:

> A protocol where each request is independent  
> Server does NOT remember previous requests

---

### Example: HTTP (HyperText Transfer Protocol)

- Each request is separate
- Server forgets everything after response

---

### How It Works

~~~text
Request 1 → Server responds → forgets

Request 2 → Server treats as NEW request
~~~

---

### Features

- No session memory
- Independent requests
- Simple design

---

### Advantages

- Highly scalable
- Easy to manage
- Less server memory usage

---

### Disadvantages

- Must send data repeatedly (like auth info)
- No built-in memory

---

## 4. How We Handle State in HTTP?

Since HTTP is stateless, we use:

- Cookies 🍪
- Sessions
- JWT (tokens)

👉 To simulate **stateful behavior**

---

## 5. Comparison

| Feature        | Stateful Protocol        | Stateless Protocol       |
|---------------|-------------------------|--------------------------|
| Memory        | Stores state            | No memory                |
| Requests      | Dependent               | Independent              |
| Example       | FTP                     | HTTP                     |
| Scalability   | Hard                    | Easy                     |
| Performance   | Slower (tracking state) | Faster                   |

---

## 6. Real-Life Analogy

### Stateful

~~~text
Phone call 📞
- Conversation continues
- Both remember previous context
~~~

---

### Stateless

~~~text
Shopping at counter 🛒
- Each customer treated separately
- No memory of previous customer
~~~

---

## Summary

- **State** = stored user interaction info  
- **Stateful** = remembers previous requests (FTP)  
- **Stateless** = treats every request as new (HTTP)  
- We use cookies/sessions to add state to HTTP 🚀