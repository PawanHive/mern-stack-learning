# Apply Directive

Use `@apply` to inline any existing utiity classes into your own custom CSS

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