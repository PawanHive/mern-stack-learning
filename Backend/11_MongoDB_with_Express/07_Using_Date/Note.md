 ## `./views/index.ejs` code snippet explained

 ```html
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- ======================= Meta & Page Setup ======================= -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Whatsapp</title>

    <!-- ======================= Styles ======================= -->
    <!-- style.css is served from public folder -->
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- ======================= Page Headings ======================= -->
    <h1>Index Page</h1>
    <h3>All Chats!</h3>

    <!-- ======================= New Chat Button ======================= -->
    <form method="GET" action="/chats/new">
        <button>New Chat</button>
    </form>

    <br>

    <!-- ======================= Chats Loop (EJS) ======================= -->
    <!-- "chats" is an array of chat objects sent from backend -->
    <% for (let chat of chats) { %>

        <div class="chat">
            <!-- Sender name -->
            <p>From: <i><%= chat.from %></i></p>

            <!-- Message content -->
            <div class="msg">
                <p><%= chat.msg %></p>
            </div>

            <!-- Receiver name -->
            <p>Received by <i><%= chat.to %></i></p>

            <hr>

            <!-- ======================= created_at Explanation ======================= -->
            <!-- 
                chat.created_at is a Date object coming from MongoDB.
                It was set when the chat was created:
                created_at: new Date()
            -->

            <!-- Extract only TIME (HH:MM:SS) from Date -->
            <!-- toString() converts Date object to readable string -->
            <!-- split(" ") breaks it into parts frm where 'spaces' are, means it becomes array[Wed, Feb, 04, 2026, 10:35:26, GMT,+0530 ,(India Standard Time),]...-->
            <!--  from that array selected 4th element using .split(" ")[4] -->
            <p>
                <%= chat.created_at.toString().split(" ")[4] %>
            </p>

            <!-- Extract DATE (Day-Month-Date-Year) -->
            <!-- slice(0,4) picks first four parts of date -->
            <!-- join("-") joins them with "-" -->
            <p>
                <%= chat.created_at.toString().split(" ").slice(0, 4).join("-") %>
            </p>
        </div>

        <br><br>

    <% } %>

</body>

</html>

 ```