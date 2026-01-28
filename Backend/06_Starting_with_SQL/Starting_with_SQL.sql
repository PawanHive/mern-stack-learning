DROP DATABASE instagram;

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