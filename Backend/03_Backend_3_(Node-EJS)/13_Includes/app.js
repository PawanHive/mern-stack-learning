/*
==================== includes in EJS ===========================

🔹 What is include in EJS?

==> include lets you reuse common HTML parts (like header, footer, navbar) 
in multiple EJS files instead of copying code again and again.

👉 Same idea as components / partials.

--------------------------------------------------------------------------------

🔹 Basic syntax
<%- include("filename") %>

--------------------------------------------------------------------------------

🔹 Recommended folder structure
views/
 ├── partials/
 │    ├── header.ejs
 │    ├── footer.ejs
 │    └── navbar.ejs
 ├── home.ejs
 ├── instagram.ejs
 └── error.ejs
*/