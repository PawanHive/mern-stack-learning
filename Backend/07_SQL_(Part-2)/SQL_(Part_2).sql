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

INSERT INTO user 
(id, age, name, email, followers, following)
VALUES
(5, 14, "eve", "eve@yahoo.in", 400, 145),
(6, 16, "farah", "farah@yahoo.in", 10000, 100);

/*	-- TRUNCATE (to delete table's data)
TRUNCATE TABLE user;
*/

SELECT * FROM user;				

/*	-- ALTER
    -- ADD COLUMN
ALTER TABLE user
ADD COLUMN city VARCHAR(25) DEFAULT "Delhi";				-- add new 'city' column with default value 'Delhi'

	-- DROP COLUMN
ALTER TABLE user
DROP COLUMN age;											-- delete 'age' column

	-- RENAME TO
ALTER TABLE user
RENAME TO instaUser;										-- 'user' rename with 'instauser'/ 'instaUser'

ALTER TABLE instauser
RENAME TO user;												-- again 'instauser' rename with 'user'

	-- CHANGE COLUMN (rename)
ALTER TABLE user
CHANGE COLUMN followers subs INT DEFAULT 0;					-- CHANGE column name 'followers' to 'subs'

	-- MODIFY (columns datatype/constraints)
ALTER TABLE user
MODIFY subs INT DEFAULT 5;									-- modify exiting column 'subs' constraints to (DEFAULT 5) ... we can see default value as 5 when we insert new data to table

INSERT INTO user 
(id, name, email, following)
VALUES
(7, "gemini", "gemini@yahoo.in", 120);						-- inserting data, without giving data to 'subs' column so that it can take it default value.

SELECT * FROM user;
*/

/*	-- DELETE (to delete exiting rows)
SET SQL_SAFE_UPDATES = 0;    								-- allow DELETE 

DELETE FROM user
WHERE age = 15;												 -- DELETE: row which has include age = 15

SELECT * FROM user;

SET SQL_SAFE_UPDATES = 1; 										-- block by mistake DELETE
*/


/*	-- UPDATE (to update exiting rows)
SET SQL_SAFE_UPDATES = 0;									-- This line turns OFF Safe Update Mode in MySQL. now allow UPDATE into database   

UPDATE user
SET followers = 600
WHERE age = 16;												-- updates the followers column to 600 for all users whose age is 16 in the user table.

SELECT * FROM user;											-- show updated table

SET SQL_SAFE_UPDATES = 1;									-- block by mistake UPDATE, which is MySQL's default behaviour	
*/

/*	-- General Order of clause
SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200
ORDER BY age DESC;								-- shows each age where the maximum number of followers (for that age) is greater than 200, and the result is sorted by age in descending order
*/

/*	-- HAVING clause
SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200;						-- HAVING: shows each age where the maximum number of followers (for that age) is greater than 200.
*/

/*	-- GROUP BY clause

SELECT age, count(age)
FROM user
GROUP BY age;											-- GROUP BY: show how many user of 14, 15, 16, 17years of age ... like 2 user is 14years old

SELECT age, max(followers)
FROM user
GROUP BY age;											-- GROUP BY: show maximum followers in each age group... like 14 years walon me sabse jyada followers kitna h
*/

/*	-- Aggregate Functions

SELECT max(followers)									-- max(): show only maximum followers count
FROM user;

SELECT max(age)												-- max(): show only maximum age count
FROM user;

SELECT min(age)												-- max(): show only minimum age count
FROM user;

SELECT count(age)											-- count(): tell us how much users age = 14years
FROM user
WHERE age = 14;

SELECT avg(age)												-- avg(): tell us average of age.
FROM user;

SELECT sum(followers)												-- avg(): tell us sum of all followers count.
FROM user;

SELECT name, followers
FROM user
WHERE followers = (SELECT MAX(followers) FROM user);		-- Shows the user(s) with maximum followers
*/

/*	-- ORDER BY clause

SELECT name, age, followers
FROM user
ORDER BY followers ASC;										-- ORDER BY ASC: sort user according to their followers count in ASSENDING ORDER.

SELECT name, age, followers
FROM user
ORDER BY followers DESC;									-- ORDER BY DESC: sort user according to their followers count in DESCENDING ORDER.

SELECT name, age, followers
FROM user
ORDER BY followers;											-- If ASC/DESC doesn't mention then by default data present in ASSENDING ORDER
*/

/*	-- LIMIT clause

SELECT name, age FROM user
WHERE age > 14											 	-- condition (show below 14 users)
LIMIT 2;													--  LIMIT: conditionn matches with 4 users but LIMIT tell show on 2 users data/row

SELECT name, age, email
FROM user
LIMIT 3;													-- LIMIT: limit tells show only 3 users data(row)
*/

/*		-- Opertors in WHERE clause

	-- Arithmetic/Comparison Operators
SELECT name, age
FROM user
WHERE age + 1 = 18;											-- suppose we want user who turn 18years old in next year.

	-- Logical Operators
SELECT name, followers
FROM user
WHERE (age > 15) AND (followers > 200);						-- AND: show user who is > 15years and has 200+ followers

SELECT name, followers
FROM user
WHERE (age > 15) OR (followers > 200);						-- OR: show user if age > 15year or has 200+ followers

SELECT name, age, followers
FROM user
WHERE age BETWEEN 15 AND 17;								-- BETWEEN: show users whose age between 15-17years

SELECT name, followers, email
FROM user
WHERE email IN ("donald@yahoo.in", "bob@yahoo.in", "abc@gmail.com");		-- IN: show users who matches with these email id lists

SELECT name, age, email
FROM user
WHERE age IN (14, 16);									-- IN: show users who matches with these age lists (14years or 16years)

SELECT name, age, email
FROM user
WHERE age NOT IN (14, 16);								-- NOT: show users who does NOT matches with these age lists.
*/

/*	-- WHERE clause

SELECT * 													
FROM user
WHERE followers >= 200;										-- condition (show user who has >= 200 followers)

SELECT name, followers										
FROM user
WHERE followers >= 200;										-- condition (show only name & followers column of user who has >= 200 followers)

SELECT name, age FROM user
WHERE age < 16;											 	-- condition (show below 16 users)
*/ 

/*	-- SELECT command
SELECT id, age, name FROM user;								-- show id, name, and age column only from user table
SELECT DISTINCT age FROM user;								-- show only unique value from age column
SELECT * FROM user;											 -- here (*)asterisks means (all Column)  ... [SELECT allColumn FROM user;]
*/


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