# Using MySQL (SQL) from CLI – Step by Step Guide

This guide explains how to use **MySQL from the Command Line Interface (CLI)** in a simple and beginner-friendly way.

---

## STEP 1: Open a Terminal (CLI)

### On Windows
- Open **PowerShell** or **Command Prompt**

---

## STEP 2: Start MySQL CLI

### If MySQL is added to PATH
```bash
mysql -u root -p
```

### If MySQL is NOT added to PATH (VERY IMPORTANT)
```bash
& "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p
```
- Press **Enter**
- Enter your **MySQL password**

If successful, you will see:
```text
mysql>
```

## STEP 3: Show all databases


```sql
SHOW DATABASES;
```
Always end SQL commands with a semicolon `;`

## STEP 4: Exit MySQL CLI
Closes MySQL CLI session
```sql
EXIT;
```
or
```sql
QUIT;
```

## STEP 5: How to restart MySQL ClI Session Aagain

Run this exact command:
```bash
& "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p
```
and follow remaining process.

---
---

