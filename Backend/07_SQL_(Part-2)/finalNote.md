## 1. WHERE clause
**To define some conditions**

Syntax:
```code
SELECT col1, col2 FROM table_name
WHERE conditions;
```
OR

Syntax: (easy to understand code)
```code
SELECT col1, col2
FROM table_name
WHERE conditions;
```
Exmaple:
```sql
        -- WHERE clause
SELECT * 													
FROM user
WHERE followers >= 200;			-- condition (show user who has >= 200 followers)

SELECT name, followers										
FROM user
WHERE followers >= 200;			-- condition (show only name & followers column of user who has >= 200 followers)

SELECT name, age FROM user
WHERE age < 16;				 	-- condition (show below 16 users)
```

---

## 2. Operators in WHERE clause

**Arithmetic Operators**  
- `+` (addition),  
-  `-` (subtraction),   
-  `*` (multiplication),  
-  `/` (division),  
-   `%` (modulus).
Example:
```sql
	-- Arithmetic/Comparison Operators
SELECT name, age
FROM user
WHERE age + 1 = 18;	        -- suppose we want user who turn 18years old in next year.
```

**Comparison Operators**  
- `=` (equal to),   
- `!=` (not qual to),   
- `>` (greater than ), 
- `>=` (greater than equal to)  
- `<`  (less than)
- `<=` (less than equal to) 

Exmaple:
```sql
SELECT name, followers										
FROM user
WHERE followers >= 200;			-- condition (show only name & followers column of user who has >= 200 followers)
```

**Logical Operators**  
- `AND`
- `OR`
- `NOT`
- `IN`
- `BETWEEN`
- `ALL`
- `LIKE`
- `ANY`

**Bitwise Operators**  
- `&` (Bitwise AND)
- `|` (Bitwise OR)

Bitwise AND (`&`) Truth Table

| x | y | x `&` y |
|:-:|:-:|:-----:|
| 0 | 0 |   0   |
| 0 | 1 |   0   |
| 1 | 0 |   0   |
| 1 | 1 |   1   |

Bitwise OR (`|`) Truth Table

| x | y | x `\|` y |
|:-:|:-:|:------:|
| 0 | 0 |   0    |
| 0 | 1 |   1    |
| 1 | 0 |   1    |
| 1 | 1 |   1    |

---

## 3. Frequently used Operators
 
- `AND`
Exmaple:
```sql
SELECT name, followers
FROM user
WHERE (age > 15) AND (followers > 200);						-- AND: show user who is > 15years and has 200+ followers
```

- `OR`
Exmaple:
```sql
SELECT name, followers
FROM user
WHERE (age > 15) OR (followers > 200);						-- OR: show user if age > 15year or has 200+ followers
```

- `BETWEEN`
Exmaple:
```sql
SELECT name, age, followers
FROM user
WHERE age BETWEEN 15 AND 17;								-- BETWEEN: show users whose age between 15-17years
```

- `IN`
Exmaple:
```sql
SELECT name, followers, email
FROM user
WHERE email IN ("donald@yahoo.in", "bob@yahoo.in", "abc@gmail.com");		-- IN: show users who matches with these email id lists

SELECT name, age, email
FROM user
WHERE age IN (14, 16);									-- IN: show users who matches with these age lists (14years or 16years)
```

- `NOT`
Exmaple:
```sql
SELECT name, age, email
FROM user
WHERE age NOT IN (14, 16);								-- NOT: show users who does NOT matches with these age lists.
```

---

## 4. LIMIT clause

**Sets an upper limit on number of (tuples) rows to be returned**

Syntax:
```code
SELECT col1, col2 FROM table_name
LIMIT number;
```
 
OR
 
Syntax:
```code
SELECT col1, col2 
FROM table_name
LIMIT number;
```
---

Exmaples:

```sql
SELECT name, age FROM user
WHERE age > 14											 	-- condition (show below 14 users)
LIMIT 2;													--  LIMIT: conditionn matches with 4 users but LIMIT tell show on 2 users data/row

SELECT name, age, email
FROM user
LIMIT 3;													-- LIMIT: limit tells show only 3 users data(row)
```

---

## 5. ORDER BY clause

To sort in ascending (ASC) or descending order (DESC)

- **ASC** - Ascending Order
- **DESC** - Descending Order

Syntax:
```code
SELECT col1, col2 FROM table_name
ORDER BY col_name(s) ASC;
```

OR

Syntax:
```code
SELECT col1, col2 
FROM table_name
ORDER BY col_name(s) ASC;
```
Examples:

```sql
SELECT name, age, followers
FROM user
ORDER BY followers ASC;										-- ORDER BY ASC: sort user according to their followers count in ASSENDING ORDER.

SELECT name, age, followers
FROM user
ORDER BY followers DESC;									-- ORDER BY DESC: sort user according to their followers count in DESCENDING ORDER.

SELECT name, age, followers
FROM user
ORDER BY followers;											-- If ASC/DESC doesn't mention then by default data present in ASSENDING ORDER
```

---

## 6. Aggregate Functions

Aggregate functions perform a calculation on a set of values, and return a single value.

- `COUNT()`
Exmaple:
```sql
SELECT count(age)											-- count(): tell us how much users age = 14years
FROM user
WHERE age = 14;
```

- `MAX()`
Exmaple:
```sql
SELECT max(followers)									-- max(): show only maximum followers count
FROM user;

SELECT max(age)												-- max(): show only maximum age count
FROM user;
```

- `MIN()`
Exmaple:
```sql
SELECT min(age)												-- max(): show only minimum age count
FROM user;
```

- `SUM()`
Exmaple:
```sql
SELECT sum(followers)												-- avg(): tell us sum of all followers count.
FROM user;
```

- `AVG()`
Exmaple:
```sql
SELECT avg(age)												-- avg(): tell us average of age.
FROM user;
```

### How to see users with maximum followers

❌ Wrong Execution
```sql
SELECT name, max(followers)
FROM user
```

✔ Right Execution
```sql
SELECT name, followers
FROM user
WHERE followers = (SELECT MAX(followers) FROM user);		-- Shows the user(s) with maximum followers
```

---

## 7. GROUP BY clause

- Groups rows that have the same values into summary rows.  
- It collects data from multiple records and groups the result by one or more column.

**Generally we use group by with some aggregation fuction**

Syntax: 

```code
SELECT col1, col2
FROM table_name
GROUP BY col_name(s);
```

Examples:

```sql
SELECT age, count(age)
FROM user
GROUP BY age;											-- GROUP BY: show how many user of 14, 15, 16, 17years of age ... like 2 user is 14years old

SELECT age, max(followers)
FROM user
GROUP BY age;											-- GROUP BY: show maximum followers in each age group... like 14 years walon me sabse jyada followers kitna h
```

---

## Why this query is wrong 

❌**Wrong query** we tried to see name of the maximum follower user of each age group
```sql
SELECT name, age, max(followers)
FROM user
GROUP BY age;
```

### Why This Is Wrong

When you use `GROUP BY`, **every column in the `SELECT` clause must be**:

1. Inside an **aggregate function**  
   **OR**
2. Listed in the `GROUP BY` clause

### Selected Columns Analysis

- `name` ❌  
  Not grouped and not inside an aggregate function

- `age` ✅  
  Included in the `GROUP BY` clause

- `MAX(followers)` ✅  
  Aggregate function

👉 SQL does not know **which `name` to pick** for each `age`, because multiple users can have the same age.

---

## 8. HAVING clause

- similar to WHERE i.e. applies some condition on rows.
- but it is used when we want to apply any **condition after grouping**

**REMEMBER**
- **WHERE** is for the **table(row)**, **HAVING** is for a **group**.
- Grouping is necessary for HAVING.

Syntax:
```code
SELECT col1, col2
FROM table_name
GROUP BY col_name(s)
HAVING condition;
```

Example:

```sql
SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200;						-- HAVING: shows each age where the maximum number of followers (for that age) is greater than 200.

```

---

## Difference Between `WHERE` and `HAVING` clause

### 🧠 Core Idea

- **`WHERE`** filters **rows**
- **`HAVING`** filters **groups**

---

## 9. General Order for clause

```code 
SELECT columns(s)
FROM table_name
WHERE condition
GROUP BY column(s)
HAVING condition
ORDER BY column(s) ASC
```

Exmaple:

```sql
SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200
ORDER BY age DESC;          -- shows each age where the maximum number of followers (for that age) is greater than 200, and the result is sorted by age in descending order
```

---

## 10. UPDATE Table Queries

`UPDATE` (to update exiting rows)

Syntax:
```sql
UPDATE table_name
SET col1 = val1, col2 = vol2
WHERE condition;
```
---

### Safe Update Mode (MySQL)

When Safe Update Mode is ON, MySQL may block updates without:  
**MySQl by default don't allow to UPDATE into database**

Disable temporarily:
```sql
SET SQL_SAFE_UPDATES = 0;           -- allow UPDATE
```

Re-enable after use:
```sql
SET SQL_SAFE_UPDATES = 1;           -- DEFAULT: block UPDATE
```

Exmaple: 
```sql
SET SQL_SAFE_UPDATES = 0;									-- This line turns OFF Safe Update Mode in MySQL. now allow UPDATE into database   

UPDATE user
SET followers = 600
WHERE age = 16;												-- updates the followers column to 600 for all users whose age is 16 in the user table.

SELECT * FROM user;											-- show updated table
```

---

## 11. DELETE Table Queries

`DELETE` (to delete existing rows)

Syntax:
```code
DELETE FROM table_name
WHERE conditon
```
Exmaples:

```sql
SET SQL_SAFE_UPDATES = 0;    								-- allow DELETE 

DELETE FROM user
WHERE age = 15;												 -- DELETE: row which has include age = 15

SELECT * FROM user;

SET SQL_SAFE_UPDATES = 1; 	
```

### always use DELETE with WHERE clause

```sql
DELETE FROM user;
```

this query will delete every row, ,because we didn't specify it using condition.

---

## 12. ALTER Table Queries

`ALTER TABLE` (to change the schema)

1. `ADD COLUMN`
Adds a **new column** to an existing table.

Syntax
```code
ALTER TABLE table_name
ADD COLUMN column_name datatype constraint;
```

Exmaple:
```sql
ALTER TABLE user
ADD COLUMN city VARCHAR(25) DEFAULT "Delhi";				-- add new 'city' column with default value 'Delhi'
```

2. `DROP COLUMN`
Removes an **existing column** from a table permanently.

Syntax
```code
ALTER TABLE table_name
DROP COLUMN column_name;
```

Exmaple:
```sql
ALTER TABLE user
DROP COLUMN age;			-- delete 'age' column
```

3. `RENAME TO`
Renames an **existing table** to a **new** name.

Syntax
```code
ALTER TABLE table_name
RENAME TO new_table_name;
```

Exmaple:
```sql
ALTER TABLE user
RENAME TO instaUser;		-- 'user' rename with 'instauser'/ 'instaUser'

ALTER TABLE instauser
RENAME TO user;				-- again 'instauser' rename with 'user'
```

4. `CHANGE COLUMN`
Renames a **column** and/or changes its **datatype**.

Syntax
```code
ALTER TABLE table_name
CHANGE COLUMN old_name new_name new_datatype new_constraint;
```

Exmaple:
```sql
ALTER TABLE user
CHANGE COLUMN followers subs INT DEFAULT 0;			-- CHANGE column name 'followers' to 'subs'
```

5. `MODIFY`
Changes the **datatype or constraints** of a column without renaming it.

Syntax
```code
ALTER TABLE table_name
MODIFY col_name new_datatype new_constraint;
```

Exmaple:
```sql
ALTER TABLE user
MODIFY subs INT DEFAULT 5;		-- modify exiting column 'subs' constraints to (DEFAULT 5) ... we can see default value as 5 when we insert new data to table

```
---

## 13. TRUNCATE Table Queries

TRUNCATE TABLE (to delete table's data not table)

Syntax
```code
TRUNCATE TABLE table_name;
```

Example:
```sql
TRUNCATE TABLE user;
```