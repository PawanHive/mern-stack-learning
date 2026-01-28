## Sigma Prime Note:

### Constraints

Rules for data in the table

1. `NOT NULL` -- columns cannot have a null value

2. `UNIQUE` -- all values in column are different

3. `DEFAULT` -- sets the default value of a column
Example:

```sql
salary INT DEFAULT 25000
```
Means: default salary is 25,000 ... suppose we didn't define salary in column then it will take its default value

4. `CHECK` -- it can limit the values allowed in a column
Example:
```sql
CONSTRAINT age_check CHECK (age >= 18 AND city="Delhi")
                -- OR
CONSTRAINT CHECK (age >= 18 AND city="Delhi")                
```
we can remove `age_check`