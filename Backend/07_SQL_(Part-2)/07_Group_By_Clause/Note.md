## #Sigma Prime Note

### Table
![](/Backend/07_SQL_(Part-2)/Tables.PNG)

### GROUP BY clause

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

