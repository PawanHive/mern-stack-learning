## #Sigma Prime Note

### Table
![](/Backend/07_SQL_(Part-2)/Tables.PNG)

### WHERE clause
Frequently used Operators
 
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