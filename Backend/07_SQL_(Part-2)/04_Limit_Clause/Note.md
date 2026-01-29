## #Sigma Prime Note

### Table
![](/Backend/07_SQL_(Part-2)/Tables.PNG)

### LIMIT clause

Sets an upper limit on number of (tuples) rows to be returned

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
