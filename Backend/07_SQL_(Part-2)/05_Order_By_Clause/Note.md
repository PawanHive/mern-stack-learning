## #Sigma Prime Note

### Table
![](/Backend/07_SQL_(Part-2)/Tables.PNG)

### ORDER BY clause

To sort in ascending (ASC) or descending order (DESC)

- ASC - Ascending Order
- DESC - Descending Order

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