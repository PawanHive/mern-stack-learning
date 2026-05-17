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

# -----------------------------------------------------------------------------------------------------

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

# -----------------------------------------------------------------------------------------------------
# -----------------------------------------------------------------------------------------------------
**Tailwind Typography Docs**:[https://tailwindcss.com/docs/font-family](https://tailwindcss.com/docs/font-family)

# #1: Typography

## #1: font-family
 
Utilities for controlling the font family of an element.
 
| Class | Styles |
|---|---|
| `font-sans` | `font-family: var(--font-sans);` |
| `font-serif` | `font-family: var(--font-serif);` |
| `font-mono` | `font-family: var(--font-mono);` |
| `font-(family-name:<custom-property>)` | `font-family: var(<custom-property>);` |
| `font-[<value>]` | `font-family: <value>;` |

# ------------------------------------------------------------------------------------------------------

## #2: font-size
 
Utilities for controlling the font size of an element.
 
| Class | Font Size | Line Height |
|---|---|---|
| `text-xs` | `0.75rem (12px)` | `calc(1 / 0.75)` |
| `text-sm` | `0.875rem (14px)` | `calc(1.25 / 0.875)` |
| `text-base` | `1rem (16px)` | `calc(1.5 / 1)` |
| `text-lg` | `1.125rem (18px)` | `calc(1.75 / 1.125)` |
| `text-xl` | `1.25rem (20px)` | `calc(1.75 / 1.25)` |
| `text-2xl` | `1.5rem (24px)` | `calc(2 / 1.5)` |
| `text-3xl` | `1.875rem (30px)` | `calc(2.25 / 1.875)` |
| `text-4xl` | `2.25rem (36px)` | `calc(2.5 / 2.25)` |
| `text-5xl` | `3rem (48px)` | `1` |
| `text-6xl` | `3.75rem (60px)` | `1` |
| `text-7xl` | `4.5rem (72px)` | `1` |
| `text-8xl` | `6rem (96px)` | `1` |
| `text-9xl` | `8rem (128px)` | `1` |
| `text-(length:<custom-property>)` | `var(<custom-property>)` | — |
| `text-[<value>]` | `<value>` | — |

# ------------------------------------------------------------------------------------------------------

## #3: font-style
 
Utilities for controlling the style of text.
 
| Class | Styles |
|---|---|
| `italic` | `font-style: italic;` |
| `not-italic` | `font-style: normal;` |

# ------------------------------------------------------------------------------------------------------

## #4: font-weight
 
Utilities for controlling the font weight of an element.
 
| Class | Styles |
|---|---|
| `font-thin` | `font-weight: 100;` |
| `font-extralight` | `font-weight: 200;` |
| `font-light` | `font-weight: 300;` |
| `font-normal` | `font-weight: 400;` |
| `font-medium` | `font-weight: 500;` |
| `font-semibold` | `font-weight: 600;` |
| `font-bold` | `font-weight: 700;` |
| `font-extrabold` | `font-weight: 800;` |
| `font-black` | `font-weight: 900;` |
| `font-(<custom-property>)` | `font-weight: var(<custom-property>);` |
| `font-[<value>]` | `font-weight: <value>;` |

## #5: letter-spacing

# ------------------------------------------------------------------------------------------------------

Utilities for controlling the tracking, or letter spacing, of an element.
 
| Class | Styles | Value |
|---|---|---|
| `tracking-tighter` | `letter-spacing: var(--tracking-tighter);` | `-0.05em` |
| `tracking-tight` | `letter-spacing: var(--tracking-tight);` | `-0.025em` |
| `tracking-normal` | `letter-spacing: var(--tracking-normal);` | `0em` |
| `tracking-wide` | `letter-spacing: var(--tracking-wide);` | `0.025em` |
| `tracking-wider` | `letter-spacing: var(--tracking-wider);` | `0.05em` |
| `tracking-widest` | `letter-spacing: var(--tracking-widest);` | `0.1em` |
| `tracking-(<custom-property>)` | `letter-spacing: var(<custom-property>);` | — |
| `tracking-[<value>]` | `letter-spacing: <value>;` | — |
 
# ------------------------------------------------------------------------------------------------------
# ------------------------------------------------------------------------------------------------------

 # #2: Size

 ## #1: w- Classes
 
| Class | Styles |
|---|---|
| `w-<number>` | `width: calc(var(--spacing) * <number>);` |
| `w-<fraction>` | `width: calc(<fraction> * 100%);` |
| `w-3xs` | `width: var(--container-3xs);` /* 16rem (256px) */ |
| `w-2xs` | `width: var(--container-2xs);` /* 18rem (288px) */ |
| `w-xs` | `width: var(--container-xs);` /* 20rem (320px) */ |
| `w-sm` | `width: var(--container-sm);` /* 24rem (384px) */ |
| `w-md` | `width: var(--container-md);` /* 28rem (448px) */ |
| `w-lg` | `width: var(--container-lg);` /* 32rem (512px) */ |
| `w-xl` | `width: var(--container-xl);` /* 36rem (576px) */ |
| `w-2xl` | `width: var(--container-2xl);` /* 42rem (672px) */ |
| `w-3xl` | `width: var(--container-3xl);` /* 48rem (768px) */ |
| `w-4xl` | `width: var(--container-4xl);` /* 56rem (896px) */ |
| `w-5xl` | `width: var(--container-5xl);` /* 64rem (1024px) */ |
| `w-6xl` | `width: var(--container-6xl);` /* 72rem (1152px) */ |
| `w-7xl` | `width: var(--container-7xl);` /* 80rem (1280px) */ |
| `w-auto` | `width: auto;` |
| `w-px` | `width: 1px;` |
| `w-full` | `width: 100%;` |
| `w-screen` | `width: 100vw;` |
| `w-dvw` | `width: 100dvw;` |
| `w-dvh` | `width: 100dvh;` |
| `w-lvw` | `width: 100lvw;` |
| `w-lvh` | `width: 100lvh;` |
| `w-svw` | `width: 100svw;` |
| `w-svh` | `width: 100svh;` |
| `w-min` | `width: min-content;` |
| `w-max` | `width: max-content;` |
| `w-fit` | `width: fit-content;` |
| `w-(<custom-property>)` | `width: var(<custom-property>);` |
| `w-[<value>]` | `width: <value>;` |
 
---

# ------------------------------------------------------------------------------------------------------

## #2: size- Classes (sets both width & height)
 
| Class | Styles |
|---|---|
| `size-<number>` | `width: calc(var(--spacing) * <number>);` `height: calc(var(--spacing) * <number>);` |
| `size-<fraction>` | `width: calc(<fraction> * 100%);` `height: calc(<fraction> * 100%);` |
| `size-auto` | `width: auto;` `height: auto;` |
| `size-px` | `width: 1px;` `height: 1px;` |
| `size-full` | `width: 100%;` `height: 100%;` |
| `size-dvw` | `width: 100dvw;` `height: 100dvw;` |
| `size-dvh` | `width: 100dvh;` `height: 100dvh;` |
| `size-lvw` | `width: 100lvw;` `height: 100lvw;` |
| `size-lvh` | `width: 100lvh;` `height: 100lvh;` |
| `size-svw` | `width: 100svw;` `height: 100svw;` |
| `size-svh` | `width: 100svh;` `height: 100svh;` |
| `size-min` | `width: min-content;` `height: min-content;` |
| `size-max` | `width: max-content;` `height: max-content;` |
| `size-fit` | `width: fit-content;` `height: fit-content;` |
| `size-(<custom-property>)` | `width: var(<custom-property>);` `height: var(<custom-property>);` |
| `size-[<value>]` | `width: <value>;` `height: <value>;` |

# ----------------------------------------------------------------------------------------------------
# ----------------------------------------------------------------------------------------------------
# Breakpoints (Responsive Design)
 
Utilities for controlling responsive behavior using breakpoint prefixes.
 
| Breakpoint Prefix | Minimum Width | CSS |
|---|---|---|
| `sm` | `40rem (640px)` | `@media (width >= 40rem) { ... }` |
| `md` | `48rem (768px)` | `@media (width >= 48rem) { ... }` |
| `lg` | `64rem (1024px)` | `@media (width >= 64rem) { ... }` |
| `xl` | `80rem (1280px)` | `@media (width >= 80rem) { ... }` |
| `2xl` | `96rem (1536px)` | `@media (width >= 96rem) { ... }` |

**Example:**
```html
<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
<img class="w-16 md:w-32 lg:w-48" src="..." />

```

**Another Example:**
```html
    <div class="bg-red-300 m-4 border-2 h-[200px] sm:bg-orange-300 md:bg-yellow-300 lg:bg-green-300">One</div> 

```

# -------------------------------------------------------------------------------------------------------
# -------------------------------------------------------------------------------------------------------

# @apply Directive in Tailwind CSS

`@apply` lets you extract Tailwind utility classes into your own custom CSS class. Instead of writing long class strings in HTML, you group them into a single reusable class.

---

## The Problem it solves

Without `@apply` your HTML looks like this:

```html
<!-- Repeated on every button -->
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Button 1</button>
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Button 2</button>
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Button 3</button>
```

Too repetitive!

---

## With @apply

In your `src/input.css`:

```css
@import "tailwindcss";

.btn {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
}

.btn:hover {
  @apply bg-blue-700;
}
```

Now in HTML:

```html
<button class="btn">Button 1</button>
<button class="btn">Button 2</button>
<button class="btn">Button 3</button>
```

Much cleaner!

---

## Real World Example

```css
@import "tailwindcss";

/* Card component */
.card {
  @apply bg-white rounded-xl shadow-md p-6;
}

/* Input field */
.input {
  @apply w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500;
}

/* Badge */
.badge-green {
  @apply bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full;
}

.badge-red {
  @apply bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full;
}
```

In HTML:

```html
<div class="card">
  <input class="input" placeholder="Enter name..." />
  <span class="badge-green">Active</span>
  <span class="badge-red">Inactive</span>
</div>
```

---

## When to use @apply

| Use `@apply` | Don't use `@apply` |
|---|---|
| Repeated component patterns | One-off styles |
| Buttons, cards, inputs | Page layout |
| Shared across many HTML files | Used only once |

---

## Important Note for Tailwind v4

In v4 `@apply` still works the same way — just make sure you write it inside your CSS file that has `@import "tailwindcss"` at the top, otherwise Tailwind won't recognize the utility classes.