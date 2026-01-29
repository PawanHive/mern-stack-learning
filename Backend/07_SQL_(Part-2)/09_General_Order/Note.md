## #Sigma Prime Note

### General Order for clause

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