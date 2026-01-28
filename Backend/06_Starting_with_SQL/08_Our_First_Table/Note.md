## Sigma Prime Note:

CREATE TABLE table_name (
    column_name1 datatype constraint,
    column_name2 datatype constraint,
    column_name3 datatype constraint,
);



### Our 1st Table
MySql code

```sql
CREATE DATABASE college;

USE college;

CREATE TABLE student (
  rollno INT,
  name VARCHAR(30),
  age INT
);

INSERT INTO student
VALUES
(101, "adam", 12),
(102, "bob", 14);

SELECT * FROM student;
```

