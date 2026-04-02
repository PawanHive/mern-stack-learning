# Sigma Note:

## Hashing (Property):
**What we need to know?**

- For every input, there is a fixed output
- They are one-way functions, we can't get input from output
- For a different input, there is a different output but of same length
- Small changes in input should bring large changes in output

## Some Pupular Hashing function/Library:

- SHA256
- MD5
- CRC 
- bcrypt

# 🔐 What is Hashing?

---

# 1. Definition

> Hashing is the process of converting data into a fixed-size, unreadable string

---

## Key Idea

- Input → any size
- Output → fixed size

---

## Example

~~~text
Input:  mypassword123
Hash:   $2b$10$XyZabc123....
~~~

👉 Same input → same hash  
👉 Cannot reverse hash ❌

---

# 2. Important Properties

## 1. One-Way Function

> You CANNOT convert hash back to original data

---

## 2. Deterministic

~~~text
Same input → same output
~~~

---

## 3. Fixed Length

~~~text
"hi"        → hash (same length)
"mypassword" → hash (same length)
~~~

---

## 4. Fast Computation

- Hashing is quick
- Useful for real-time systems

---

# 3. How Hashing Works

~~~text
Input Data
   ↓
Hash Function (algorithm)
   ↓
Fixed-size hash output
~~~

---

# 4. Common Hashing Algorithms

- MD5 (❌ insecure)
- SHA-1 (❌ insecure)
- SHA-256 ✅
- bcrypt ✅ (best for passwords)

---

# 5. Hashing vs Encryption

| Feature        | Hashing              | Encryption          |
|---------------|----------------------|---------------------|
| Reversible    | ❌ No                | ✅ Yes              |
| Purpose       | Security check       | Data protection     |
| Key required  | ❌ No                | ✅ Yes              |

---

# 6. Why Hashing is Used?

- Password storage 🔐
- Data integrity check
- Digital signatures
- File verification

---

