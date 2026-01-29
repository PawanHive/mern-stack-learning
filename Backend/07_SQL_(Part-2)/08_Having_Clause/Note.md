## #Sigma Prime Note

### Table
![](/Backend/07_SQL_(Part-2)/Tables.PNG)

### HAVING clause

- similar to WHERE i.e. applies some condition on rows.
- but it is used when we want to apply any **condition after grouping**

**REMEMBER**
- WHERE is for the table(row), HAVING is for a group.
- Grouping is necessary for HAVING.

Syntax:
```code
SELECT col1, col2
FROM table_name
GROUP BY col_name(s)
HAVING condition;
```

Example:

```sql
SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200;						-- HAVING: shows each age where the maximum number of followers (for that age) is greater than 200.

```

---

## Difference Between `WHERE` and `HAVING` clause

### 🧠 Core Idea

- **`WHERE`** filters **rows**
- **`HAVING`** filters **groups**
