/*
==================== Interpolation Syntax =======================

EJS Website: https://ejs.co/

Interpolation refers to embedding expressions into 
marked up text.

--------------------------------------------------------------------

1. What is Interpolation? 🤔

👉 Interpolation means:

    => inserting dynamic values (variables) into a 
    template (HTML) at runtime.

In simple words:
Putting backend data inside HTML

--------------------------------------------------------------------

2. One-line revision note ✨

Interpolation is the process of inserting backend data 
into HTML using EJS syntax like <%= %>

--------------------------------------------------------------------
3. EJS Tags: 

<%=
Outputs the value into the template (HTML escaped)

<%# 
Comment tag, no execution, no output

<% 
'Scriptlet' tag, for control-flow, no output

Find More TAGS: https://ejs.co/

--------------------------------------------------------------------

3. Why interpolation is important?

    - Makes pages dynamic
    - Connects backend → frontend
    - Avoids hard-coded content
    - Used in real projects

--------------------------------------------------------------------

Interpolation Syntax in EJS 🧩
1️⃣ <%= %> → Output value (most common)
file.ejs
    <%= username %>

✔ Prints value
✔ Escapes HTML (safe)
Example:
<h2>Hello <%= user %></h2>

2️⃣ <%- %> → Output raw HTML
file.ejs
    <%- htmlContent %>

⚠ Does not escape HTML
Use carefully
Example:
    <%- "<strong>Bold Text</strong>" %>

3️⃣ <% %> → JavaScript logic (NO output)

Used for:
    - if
    - loops
    - conditions
Example
    <% if (isLoggedIn) { %>
    <h1>Welcome back</h1>
    <% } %>

----------------------------------------------------------------
*/