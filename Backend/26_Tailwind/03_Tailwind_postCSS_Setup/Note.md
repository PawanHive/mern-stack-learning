# Steps to install tailwind css `using PostCSS`
**Get started with Tailwind CSS**: [https://tailwindcss.com/docs/installation/using-postcss](https://tailwindcss.com/docs/installation/using-postcss)


- `Using PostCSS` is best convention for production grade application instead of `Play CDN` or `Tailwind CLI`

## STEP 0: Initialize project (IMPORTANT)

```npm 
npm init -y
```

## STEP 1: Install Tailwind CSS
Install `tailwindcss`, `@tailwindcss/postcss`, and `postcss` via npm

```terminal
npm install tailwindcss @tailwindcss/postcss postcss
```

## STEP 2: Add Tailwind to your PostCSS configuration

Add `@tailwindcss/postcss` to your `postcss.config.mjs` file, or wherever PostCSS is configured in your project.

```mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}
```

## STEP 3: Import Tailwind CSS

Add an `@import` to your CSS file that imports Tailwind CSS.

```css
@import "tailwindcss";
```

## STEP 4: Install Vite 

```npm 
npm i vite
```

**How vite helps us**
```
You save a file
    ↓
Vite instantly detects the change
    ↓
Browser auto-refreshes itself
    ↓
You see changes immediately
```


## STEP 4: Update your `package.json` scripts section

```json
"scripts": {
  "dev": "vite",
  "build": "vite build"
}
```

## STEP 5: Start using Tailwind in your HTML

Make sure your compiled CSS is included in the `<head>` *(your framework might handle this for you)*, then start using Tailwind’s utility classes to style your content.

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/styles.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

## STEP 6: Start your build process

Run your build process with `npm run dev` or whatever command is configured in your p`ackage.json` file.

```terminal 
npm run dev
```

