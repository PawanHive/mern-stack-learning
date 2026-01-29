## #Sigma Prime Note

### Table
![](/Backend/07_SQL_(Part-2)/Tables.PNG)

### WHERE clause
To define some conditions

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