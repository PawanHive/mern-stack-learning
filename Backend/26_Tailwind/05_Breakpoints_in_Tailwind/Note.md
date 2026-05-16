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