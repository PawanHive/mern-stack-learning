## Sigma Prime Note

### Table Queries
Insert into Table

```code
INSERT INTO table_name
(colname1, colname2);
VALUES
(col1_v1, col2_v1),
(col1_v2, col2_v2),
```

### MySql Code Snippet

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

CREATE TABLE post (
 id INT PRIMARY KEY,
 content VARCHAR(100),
 user_id INT,
 
 FOREIGN KEY (user_id) REFERENCES user(id)
);
```