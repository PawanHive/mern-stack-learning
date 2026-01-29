## #Sigma Prime Note

### Table Queries

`ALTER TABLE` (to change the schema)

1. `ADD COLUMN`
Adds a **new column** to an existing table.

Syntax
```code
ALTER TABLE table_name
ADD COLUMN column_name datatype constraint;
```

Exmaple:
```sql
ALTER TABLE user
ADD COLUMN city VARCHAR(25) DEFAULT "Delhi";				-- add new 'city' column with default value 'Delhi'
```

2. `DROP COLUMN`
Removes an **existing column** from a table permanently.

Syntax
```code
ALTER TABLE table_name
DROP COLUMN column_name;
```

Exmaple:
```sql
ALTER TABLE user
DROP COLUMN age;			-- delete 'age' column
```

3. `RENAME TO`
Renames an **existing table** to a **new** name.

Syntax
```code
ALTER TABLE table_name
RENAME TO new_table_name;
```

Exmaple:
```sql
ALTER TABLE user
RENAME TO instaUser;		-- 'user' rename with 'instauser'/ 'instaUser'

ALTER TABLE instauser
RENAME TO user;				-- again 'instauser' rename with 'user'
```

4. `CHANGE COLUMN`
Renames a **column** and/or changes its **datatype**.

Syntax
```code
ALTER TABLE table_name
CHANGE COLUMN old_name new_name new_datatype new_constraint;
```

Exmaple:
```sql
ALTER TABLE user
CHANGE COLUMN followers subs INT DEFAULT 0;			-- CHANGE column name 'followers' to 'subs'
```

5. `MODIFY`
Changes the **datatype or constraints** of a column without renaming it.

Syntax
```code
ALTER TABLE table_name
MODIFY col_name new_datatype new_constraint;
```

Exmaple:
```sql
ALTER TABLE user
MODIFY subs INT DEFAULT 5;		-- modify exiting column 'subs' constraints to (DEFAULT 5) ... we can see default value as 5 when we insert new data to table

```