## Database Queries

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

### MySql Code:

```sql
CREATE DATABASE college;

CREATE DATABASE IF NOT EXISTS instagram;

DROP DATABASE IF EXISTS instagram;

SHOW DATABASES;

USE college;

SHOW TABLES;

```

## Sigma Prime Note:

### Database Queries

CREATE DATABASE db_name;  
CREATE DATABASE IF NOT EXISTS db_name;

DROP DATABASE db_name;  
DROP DATABASE IF EXITS db_name;

SHOW DATABASES;  
SHOW TABLES;