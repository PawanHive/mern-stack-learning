# Steps to install Material UI:

**Installation Doc**:[https://mui.com/material-ui/getting-started/installation/](https://mui.com/material-ui/getting-started/installation/)

**Components**: [https://mui.com/material-ui/react-button/](https://mui.com/material-ui/react-button/)

# 🎨 Install Material UI (MUI) in React

Material UI (MUI) is a popular React UI library that provides ready-made components like buttons, cards, inputs, dialogs, and more.

Official Website: https://mui.com

---

# 🚀 STEP 1: Create a React Project (if not already created)

## ⚡ Using Vite (Recommended)

```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

# 📦 STEP 2: Install Material UI Core Packages

Run this command inside your React project:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

# 📦 STEP 3: Install Material UI: Roboto font

Material UI uses the Roboto font by default. Add it to your project via Fontsource

```bash
npm install @fontsource/roboto
```

Then you can import it in your entry point like this:
```css
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

# 🎯 STEP 4: Install Material UI:  Icons (Optional but Useful)

If you want icons like add, delete, edit, etc.:

```bash
npm install @mui/icons-material
```

# -------------------------------------------------------------------------------------------------------
# -------------------------------------------------------------------------------------------------------

# ⚛️ Material UI (MUI) — Best Practices & Mistake-Free Guide

Material UI (MUI) is a React component library that helps you build modern UI faster using pre-built components like buttons, cards, dialogs, inputs, and grids.

---

# 🧠 Golden Rule of MUI

> First use MUI as it is → then customize it later.

---

# 📦 1. Installation (Very Important)

Always install required dependencies properly:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

### 🎯 Icons (Optional)

```bash
npm install @mui/icons-material
```

---

# 🎯 2. Correct Import Method

## ❌ Wrong way
```js
import Button from "mui";
```

## ✔ Correct way
```js
import Button from "@mui/material/Button";
```

OR

```js
import { Button } from "@mui/material";
```

👉 Always ensure imports come from `@mui/material`

---

# 🎨 3. Use ThemeProvider (If Using Custom Theme)

If you are customizing theme, wrap your app:

```jsx
import { ThemeProvider, createTheme } from "@mui/material/styles";
```

## ⚠️ Why it matters:
- Without ThemeProvider → custom colors won’t work
- Theme will not apply globally

---

# 🧩 4. Use MUI Props First (Before CSS)

MUI already provides built-in styling props:

## ✔ Example:
```jsx
<Button variant="contained" color="primary">
  Click Me
</Button>
```

👉 Avoid writing CSS first.

---

# ⚠️ 5. Avoid Mixing Too Much CSS Early

## ❌ Problem:
- Conflicts between CSS and MUI
- Unpredictable UI behavior

## ✔ Best Practice:
Use:
- MUI props
- `sx` prop (preferred way)

---

# 🎯 6. Use `sx` Instead of Inline CSS

## ❌ Not recommended:
```jsx
style={{ marginTop: "10px" }}
```

## ✔ Recommended:
```jsx
sx={{ mt: 2 }}
```

### 💡 Benefits:
- Theme-based
- Cleaner
- Responsive
- More powerful

---

# 🧱 7. Follow Proper Component Structure

## Example: Card

```jsx
<Card>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

👉 Don’t skip required inner components.

---

# 🧠 8. Respect Component Hierarchy

Some MUI components must be used together:

| Component | Required Structure |
|----------|--------------------|
| Card | CardContent, CardActions |
| List | ListItem |
| Dialog | DialogTitle, DialogContent |

👉 Missing structure = broken UI

---

# 🎯 9. Use Icons Properly

## ✔ Correct:
```jsx
import DeleteIcon from "@mui/icons-material/Delete";
```

## ❌ Wrong:
- Importing from random paths
- Mixing SVG manually without need


# 📱 11. Always Check Responsiveness

MUI supports responsive design, but you must:

- Use Grid system properly
- Test mobile view
- Avoid fixed widths

---

# 🧪 12. Avoid Over-Customization Early

## Beginner mistake:
- Trying to redesign everything immediately

## Better approach:
1. Use default MUI design
2. Understand behavior
3. Customize later



# -------------------------------------------------------------------------------------------------------
# -------------------------------------------------------------------------------------------------------

# #3: Weather API KEY

**Weather API WEBSITE**:[https://openweathermap.org/api/current?collection=current_forecast](https://openweathermap.org/api/current?collection=current_forecast)

**Weather API Link**:[https://openweathermap.org/api/current?collection=current_forecast#geocoding](https://openweathermap.org/api/current?collection=current_forecast#geocoding)

**Weather API KEY**:[https://home.openweathermap.org/api_keys](https://home.openweathermap.org/api_keys)

