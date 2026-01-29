## #Sigma Prime Note

### Table Queries

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