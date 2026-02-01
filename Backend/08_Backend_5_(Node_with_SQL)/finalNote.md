# #1: (mysql2) package

### Step 2: Create a Node project (if not already)
```bash
npm init -y
```
This creates package.json.

### Step 3: Install mysql2 package
```bash
npm install mysql2
```
After this, you’ll see:

- `node_modules/`  
- mysql2 added in package.json

### Step 4: Create a JS file

Create `index.js`
```js
const mysql = require("mysql2");
```

### Step 5: Create MySQL connection
```js
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_mysql_password",
  database: "test_db"
});
```

### Step 6: Test the connection
```js
connection.connect((err) => {
  if (err) {
    console.log("❌ Error connecting:", err);
  } else {
    console.log("✅ MySQL connected successfully");
  }
});
```

### Step 7: Run a simple SQL query (MOST USEFUL)
```js
connection.query("SHOW TABLES", (err, results) => {
  if (err) throw err;
  console.log(results);
});
```

---
# #2: Faker Package

Use to generate fake data

- userId
- username
- email
- password

### Install
> npm i @faker-js/faker

### Usage

```js
// ESM
import { faker } from '@faker-js/faker';

// CJS
const { faker } = require('@faker-js/faker');

export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const users = faker.helpers.multiple(createRandomUser, {
  count: 5,
});
```

More Info: https://www.npmjs.com/package/@faker-js/faker?activeTab=readme

# #3: Using MySQL (SQL) from CLI – Step by Step Guide

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

## STEP 5: How to restart MySQL CLI Session Aagain

Run this exact command:
```bash
& "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p
```
and follow remaining process.

---
---

# #4: How to run .sql file through mysql CLI

## Way 1: Run .sql file from OS terminal (MOST COMMON)

This is the most used and professional way.

Syntax:
```bash
mysql -u username -p database_name < file.sql
```
Example
```sql
mysql -u root -p delta_app < schema.sql
```

## Way 2: Run .sql file from inside MySQL CLI

### Step 1: Start MySQL CLI
```bash
& "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p
```

### Step 2: Check exiting database
```sql
SHOW DATABASES;
```

### Step 3: Select database
```sql
USE database_name;
```

### Step 4: Run file using `SOURCE`
```sql
SOURCE schema.sql;
```

If file.sql is in another folder then runn
```sql
SOURCE path/to/schema.sql;
```

📌 Notes:

- Use forward slashes `/`
- End with semicolon `;`

## Way 3: Use relative path (inside project folder)

If your terminal is already in the folder:
```bash
mysql -u root -p delta_app < ./schema.sql
```

or inside MySQL CLI:
```bash
SOURCE ./schema.sql;
```