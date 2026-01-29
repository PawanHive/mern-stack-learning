## #Sigma Prime Note

### Table
![](/Backend/07_SQL_(Part-2)/Tables.PNG)

### Aggregate Functions

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