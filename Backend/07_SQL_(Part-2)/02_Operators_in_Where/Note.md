## #Sigma Prime Note

### Table
![](/Backend/07_SQL_(Part-2)/Tables.PNG)

### Operators in WHERE clause

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

```sql

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