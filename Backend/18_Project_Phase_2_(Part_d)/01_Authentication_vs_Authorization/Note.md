# #Sigma Note:

## Authentication:
*Authentication is the process of verifying who someone is*

## Authorization:
*Authorization is the process of verifying what specific applications, files, and data a user has access to.*

# #1: 🔐 Authentication vs Authorization

---

# 1. What is Authentication?

> Authentication = verifying **who the user is**

---

## Example

~~~text
User enters:
Username + Password
~~~

👉 System checks:
- Is this user valid?

---

## Result

- ✅ Success → User is authenticated
- ❌ Fail → Access denied

---

## Real Examples

- Login system
- OTP verification
- Google login

---

# 2. What is Authorization?

> Authorization = verifying **what the user is allowed to do**

---

## Example

~~~text
User tries to delete a post
~~~

👉 System checks:
- Is user allowed to delete?

---

## Result

- ✅ Allowed → Action performed
- ❌ Not allowed → Access denied

---

## Real Examples

- Admin panel access
- Editing/deleting posts
- Role-based access (admin/user)

---

# 3. Key Difference

| Feature           | Authentication            | Authorization             |
|------------------|---------------------------|----------------------------|
| Meaning          | Who are you?              | What can you do?           |
| Step Order       | First                     | After authentication       |
| Example          | Login                     | Access control             |
| Data Used        | Credentials               | Roles/permissions          |

---

# 4. Flow (Very Important)

~~~text
Step 1: Authentication
   ↓
User identity verified
   ↓
Step 2: Authorization
   ↓
Permissions checked
   ↓
Access granted or denied
~~~

---

# 5. Real App Example

~~~text
Login to website
   ↓
(Authentication)
   ↓
User tries to access admin panel
   ↓
(Authorization)
   ↓
Allowed only if admin
~~~

---


# 🧠 Final Summary

- Authentication = identity check ✅  
- Authorization = permission check 🔐  
- Auth happens first, then authorization  
- Both are essential for secure apps 🚀