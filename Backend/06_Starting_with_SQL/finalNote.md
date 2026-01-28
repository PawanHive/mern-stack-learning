# finalNote -- 06_Starting_With_SQL

## 1. What is a Database:

A database is a organized collection of data that allows us to store, manage, retrieve, and update data efficiently.

**MySQL** -- Database   
**SQL** -- Language 

---

### SQL vs NoSQL

| SQL | NoSQL |
| --- | --- |
| Relational Database | Non-Relational Database |
| Table-based structure | Document / Key-Value / Graph |
| Fixed schema | Flexible schema |
| Uses SQL language | Uses JSON / BSON / other formats |
| Example: MySQL, PostgreSQL | Example: MongoDB, Firebase, Cassandra, Neo4j, etc |

---

## 2. What is a Table

A **table** is the basic structure used to store data in a relational database.  
It stores data in **rows and columns**, similar to a spreadsheet.

### Key Points
- A table exists inside a database
- Each table has a unique name
- Columns define data types and rules
- Rows store the actual data

### Create Table (schema/columns)

Syntax:
```code
CREATE TABLE table_name (
    column_name1 datatype constraint,
    column_name2 datatype constraint,
);
```

---

### Data Type

![](/Backend/06_Starting_with_SQL/10_CREATE_Table/Data_Type.PNG)

---

### difference between CHAR & VARCHAR
1. CHAR (Fixed Length)

```text
CHAR(10)

Input:  Bob
Stored: [B][o][b][ ][ ][ ][ ][ ][ ][ ]
```
- Always uses the full defined length  
- Extra spaces are added if the value is shorter  
- Even small data occupies fixed space
- Wasted remaining space

2. VARCHAR (Variable/fexible Length)
```text
VARCHAR(10)

Input:  Bob
Stored: [B][o][b]
```
- Uses only the required space    
- More memory efficient  
- most developer prefer VARCHAR over CHAR.

🔑 Visual Summary  
CHAR     → | fixed | space wasted |  
VARCHAR  → | flexible | space saved |

### 3. UNSIGNED in MySQL

`UNSIGNED` is a column attribute used with numeric data types in MySQL.

**What does UNSIGNED mean?**

- It does **not allow negative values**
- The column can store **only positive numbers and zero**

Example
```sql
age INT UNSIGNED;
```
- Valid values: 0, 1, 5, 20
- Invalid values: -1, -10

---
 
## 4. Database Queries

1. `CREATE DATABASE db_name;`  
Creates a new database.

2. `CREATE DATABASE IF NOT EXISTS db_name;`  
Creates a database only if it does not already exist.

3. `DROP DATABASE db_name;`  
Deletes an existing database permanently.

4. `DROP DATABASE IF EXITS db_name;`  
Deletes the database only if it exists (prevents error).

5. `SHOW DATABASES;`  
Displays a list of all databases on the server.

6. `SHOW TABLES;`  
Displays all tables in the currently selected database.  
but we need to first run `USE db_name`  
Example: 

```sql
USE db_name;

SHOW TABLES;
```

---

## 5. What is Constraints

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

5. `PRIMARY KEY`  
makes a column unique & not null but used only for one

**Key Points**
- Must be **unique**
- Cannot be **NULL**
- Only **one primary key** per table

```sql
CREATE TABLE temp (
    id int not null,
    PRIMARY KEY (id)
);
```

6. `FOREIGN KEY`  
A foreign key is a column (or set of columns) in a table that refers to the primary key in another table 

**Key Points**
- Refers to the **primary key of another table**
- Maintains **relationship between tables**
- Prevents invalid data

```sql
CREATE TABLE temp (
    cust_id int, 
    FOREIGN KEY (cust_id) references customer(id)               -- here 'customer' is table_name, (id) is column of it
)
```
---

## 6. Insert into Table

Syntax:
```code
INSERT INTO table_name
(colname1, colname2);        
VALUES
(col1_v1, col2_v1),
(col1_v2, col2_v2),
```
(colname1, colname2)   -- specifies the columns where values will be inserted (order matters)


Example:
```sql
INSERT INTO user 
(id, age, name, email, followers, following)
VALUES
(1, 14, "adam", "adam@yahoo.in", 123, 145),
(2, 15, "bob", "bob@yahoo.in", 200, 200),
(3, 16, "casey", "casey@yahoo.in", 300, 305),
(4, 17, "donald", "donald@yahoo.in", 200, 105);
```

## 7. Select & Show data from the DB

Syntax:
```code
SELECT col1, col2 FROM table_name;
```
Exmaple:
```sql
SELECT id, name FROM user;          -- means show id, name column from 'user' table
```
---

Syntax: (to show all columns)
```code
SELECT * FROM table_name;
```
Example: 
```sql
SELECT * FROM user;
```
here ... (* = asterisks = allColumns)

---

## 8. Table Queries

### Create / Delete Table

1. `CREATE TABLE table_name`  
Creates a new table in the selected database.

1. `CREATE TABLE IF NOT EXISTS table_name`  
Creates a table only if it does not already exist.

1. `DROP TABLE table_name `  
Deletes a table permanently along with all its data.

1. `DROP TABLE IF EXISTS table_name ` 
Deletes a table only if it exists (avoids error).

1. `TRUNCATE`  
Removes all rows from a table but keeps its structure.

### Insert Data

1. `INSERT INTO`  
Adds new data into a table. 

1. `INSERT INTO ... VALUES`  
Inserts specific values as new rows in a table.

1. `INSERT INTO ... SELECT`  
Inserts data into a table from another table.

### Read / Fetch Data

1. `SELECT`  
Retrieves data from a table.

1. `SELECT * FROM table_name `  
Fetches all columns from a table.

1. `SELECT column1, column2`  
Fetches only selected columns.

1. `SELECT DISTINCT`  
Retrieves unique (non-duplicate) values.

1. `WHERE`  
Filters records based on a condition.

1. `ORDER BY`  
Sorts records in ascending or descending order.

1. `LIMIT ` 
Restricts the number of rows returned.

### Update / Delete Data

1. `UPDATE`  
Modifies existing data in a table.

1. `DELETE`  
Removes rows from a table.

1. `DELETE FROM table_name WHERE condition ` 
Deletes specific rows based on a condition.

### Modify Table Structure

1. `ALTER TABLE ADD `  
Adds a new column to a table.

1. `ALTER TABLE DROP `  
Removes a column from a table.

1. `ALTER TABLE MODIFY`   
Changes a column’s data type or size.

1. `ALTER TABLE RENAME`   
Renames a column or table (version-dependent).

1. `RENAME TABLE`   
Changes the name of an existing table.

### Show / Describe Table

1. `SHOW TABLES`   
Displays all tables in the current database.

1. `DESCRIBE table_name`   
Shows table structure and column details.

1. `DESC table_name `  
Short form of DESCRIBE.

1. `SHOW CREATE TABLE`   
Displays the SQL used to create a table.

---

## 9. Example: Tables & it's Code Snippet

### Table
![](/Backend/06_Starting_with_SQL/15_SELECT_Command/finalTable.PNG)

### Code Snippet of Above Tables

```sql
CREATE DATABASE IF NOT EXISTS instagram;

USE instagram;

CREATE TABLE user (
 id INT,									
 age INT,
 name VARCHAR(30) NOT NULL,
 email VARCHAR(50) UNIQUE,
 followers INT DEFAULT 0,
 following INT,
 
 CONSTRAINT age_check CHECK (age >= 13),
 PRIMARY KEY (id)
);

INSERT INTO user 
(id, age, name, email, followers, following)
VALUES
(1, 14, "adam", "adam@yahoo.in", 123, 145),
(2, 15, "bob", "bob@yahoo.in", 200, 200),
(3, 16, "casey", "casey@yahoo.in", 300, 305),
(4, 17, "donald", "donald@yahoo.in", 200, 105);

SELECT id, age, name FROM user;								-- show id, name, and age column only from user table
SELECT DISTINCT age FROM user;								-- show only unique value from age column
SELECT * FROM user;											 -- here (*)asterisks means (all Column)  ... [SELECT allColumn FROM user;]

CREATE TABLE post (
 id INT PRIMARY KEY,
 content VARCHAR(100),
 user_id INT,
 
 FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO post 
(id, content, user_id)
VALUES
(101, "Hello World", 3),
(102, "Bye Bye", 1),
(103, "Hello Pawan", 3);

SELECT * FROM post;
```