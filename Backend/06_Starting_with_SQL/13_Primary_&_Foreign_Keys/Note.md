## Primary Key

A **primary key** is a column (or set of columns) that **uniquely identifies each row** in a table.

### Key Points
- Must be **unique**
- Cannot be **NULL**
- Only **one primary key** per table

### Example
```sql
id INT PRIMARY KEY
```

---

## Foreign Key

A **foreign key** is a column that **links one table to another table**.

### Key Points
- Refers to the **primary key of another table**
- Maintains **relationship between tables**
- Prevents invalid data

### Example
```sql
FOREIGN KEY (user_id) REFERENCES users(id)
```

---

# #Sigma Prime Note

### What are Keys?

**Keys are special columns in the table**

1. PRIMARY KEY  
- It is a column (or set of columns) in a table that uniquely indentifies each row. (a unique id)  
- There is only **one** PRIMARY KEY & it should be **NOT NULL**

2. FOREIGN KEY   
- A foreign key is a column (or set of columns) in a table that refers to the primary key in another table  
- Foreign keys can have **duplicate** & **null values**.  
- There can be **multiple** Foreign keys

### Tables
![Primary](Primary_Foreign%20_Key.PNG)