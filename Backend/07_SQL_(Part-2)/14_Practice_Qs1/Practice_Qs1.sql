CREATE DATABASE college;

USE college;

CREATE TABLE teacher(
 id INT NOT NULL,
 name VARCHAR(15),
 subject VARCHAR(15),
 salary INT
);

INSERT INTO teacher
(id, name, subject, salary)
VALUES
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 75000);

	-- Select teachers whose salary is more than 55k
SELECT name, salary
FROM teacher
where salary > 55000;

	-- Rename the salary columns fo teacher table to ctc
ALTER TABLE teacher
CHANGE COLUMN salary ctc INT; 

	-- Update salary of all teachers by giving them an increment of 25%
SET SQL_SAFE_UPDATES = 0;

UPDATE teacher
SET ctc = ctc + (ctc * 0.25); 												-- 25% = 0.25

	-- Add a new column for teachers called city. The default city should be "Gurgoan"
ALTER TABLE teacher
ADD COLUMN city VARCHAR(15) DEFAULT("Gurgoan");

	-- Delete the salary column for teacher table
ALTER TABLE teacher
DROP COLUMN ctc;

SELECT * FROM teacher;
