## #Sigma Prime Note

### Table Queries

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