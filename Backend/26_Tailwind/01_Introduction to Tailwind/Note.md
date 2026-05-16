# #1: What is Tailwind? 

*"Rapidly build modern websites without ever leaving your HTML."*

- Utility-first means the framework's main focus is on providing utility classes.

# #2: Steps to use Tailwind:

## Use CDN link: ( CDN should not use in Production)
**Get Link From**:[https://tailwindcss.com/docs/installation/play-cdn](https://tailwindcss.com/docs/installation/play-cdn)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script> <!--This is Tailwind CDN link-->
</head>
<body>
  <h1 class="underline ml-4 ">Hello World</h1>
  <h2>Hello World</h2>
  <h3>Hello World</h3>
</body>
</html>
```

- for production we should use `Tailwind CLI`