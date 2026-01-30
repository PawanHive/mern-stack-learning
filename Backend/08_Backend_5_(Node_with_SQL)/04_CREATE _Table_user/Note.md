## #How to run .sql file through mysql CLI

## Way 1: Run .sql file from OS terminal (MOST COMMON)

This is the most used and professional way.

Syntax:
```bash
mysql -u username -p database_name < file.sql
```
Example
```sql
mysql -u root -p delta_app < schema.sql
```

## Way 2: Run .sql file from inside MySQL CLI

### Step 1: Start MySQL CLI
```bash
& "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p
```

### Step 2: Check exiting database
```sql
SHOW DATABASES;
```

### Step 3: Select database
```sql
USE database_name;
```

### Step 4: Run file using `SOURCE`
```sql
SOURCE schema.sql;
```

If file.sql is in another folder then runn
```sql
SOURCE path/to/schema.sql;
```

📌 Notes:

- Use forward slashes `/`
- End with semicolon `;`

## 3: Use relative path (inside project folder)

If your terminal is already in the folder:
```bash
mysql -u root -p delta_app < ./schema.sql
```

or inside MySQL CLI:
```bash
SOURCE ./schema.sql;
```