# Sigma Note:
We **NEVER** store the passwords as it is. We store their hashed form.

## Daigram:
Password("helloworld")   -->  **Hashing Function**   ---> How it is stored: **"66we513sd21f6s6r6s2df32s1d6r546we5r1fs3d2f1"**

# 🔐 How Passwords Are Stored

---

# 1. Important Rule ❗

> Passwords are NEVER stored in plain text

---

## ❌ Wrong Way

~~~text
Password: "mypassword123"
~~~

👉 If database is hacked → all passwords exposed ❌

---

# 2. Correct Way → Hashing

> Passwords are stored using **hashing**

---

## What is Hashing?

> Converting password into a fixed, unreadable string

---

### Example

~~~text
Password: mypassword123

Hash: $2b$10$XyZabc123.....
~~~

👉 Cannot convert back to original password

---

# 3. Hashing Process

~~~text
User enters password
   ↓
Password is hashed
   ↓
Hash stored in database
~~~

---

# 4. Login Process

~~~text
User enters password
   ↓
Password hashed again
   ↓
Compare with stored hash
   ↓
Match → Login success ✅