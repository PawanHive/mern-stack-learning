CREATE DATABASE college;

USE college;

CREATE TABLE student (
 roll_no INT PRIMARY KEY,
 name VARCHAR(15),
 city VARCHAR(15),
 marks INT
);

INSERT INTO student
(roll_no, name, city, marks)
VALUES
(110, "adam", "Delhi", 76),
(108, "bob", "Mumbai", 65),
(124, "casey", "Pune", 94),
(112, "duke", "Pune", 80);


	-- Select all students who scored 75+
SELECT name, marks
FROM student
WHERE marks > 75;

	-- Find names of all cities where students are from 
SELECT city
FROM student;

	-- Find the maximum marks of students from each city
SELECT city, max(marks)
FROM student
GROUP BY city;

	-- Find the average of the marks
SELECT avg(marks) 
FROM student;

	-- Add a new column grade, assign grade such that: marks > 80 (grade = O), marks 70-80 (grade = A), marks 60-70 (grade = B)
ALTER TABLE student
ADD COLUMN grade VARCHAR(2);

UPDATE student
SET grade = "0"						-- my mistak is enter '0' instead of 'O'
WHERE marks >= 80;

UPDATE student						-- fixed above mistake
SET grade = 'O'
WHERE grade = '0';					-- change '0' to 'O'

UPDATE student
SET grade = "A"
WHERE marks >= 70 AND marks < 80;

UPDATE student
SET grade = "A"
WHERE marks >= 60 AND marks < 70;

SELECT * FROM student;


