# Sigma Note:
## Salting
**Pasword salting is a technique to protect passwords stored in databases by adding a string of 32 or more characters and then hashing them.**

# #1: 🧂 What is Salting?

---

# 1. Definition

> Salting is the process of adding a random value to a password before hashing

---

## Key Idea

~~~text
Password + Salt → Hash
~~~

---

# 2. Why Do We Need Salting?

Without salt ❌:

~~~text
Password: 123456
Hash: abc123

Another user same password:
Hash: abc123  ❌ (same hash)
~~~

👉 Hacker can detect common passwords easily

---

With salt ✅:

~~~text
User 1:
Password: 123456
Salt: XYZ
Hash: abc987

User 2:
Password: 123456
Salt: ABC
Hash: qwe456
~~~

👉 Same password → different hashes 🔐

---

# 3. How Salting Works

~~~text
User enters password
   ↓
System generates random salt
   ↓
Salt + Password combined
   ↓
Hash generated
   ↓
Store hash (salt included)
~~~

---

# 4. Example

~~~text
Password: mypassword

Salt: 9xY!k2

Combined: mypassword9xY!k2

Hash: $2b$10$A7sd8f...
~~~

---

# 5. Benefits of Salting

- Prevents duplicate hashes
- Protects against rainbow table attacks
- Increases security of stored passwords

---

# 6. What is Rainbow Table Attack?

> Precomputed table of common passwords and their hashes

---

Without salt ❌:
- Hacker matches hash quickly

With salt ✅:
- Every hash is unique → attack fails

---
