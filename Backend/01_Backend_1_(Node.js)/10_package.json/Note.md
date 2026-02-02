# package.json (Node.js)

## What is `package.json`?

The `package.json` file contains **descriptive and functional metadata** about a Node.js project, such as:

- Project name
- Version
- Description
- Entry file
- Author
- License
- Dependencies

It helps npm understand **how your project works and what it needs**.

---

## Creating `package.json`

### Method 1: Interactive Way

Run this command in your project folder:

npm init

npm will ask you questions like:

- Project name
- Version
- Description
- Entry file
- Author
- License

After answering all questions, `package.json` is created ✅

---

### Method 2: Quick Method (Recommended)

Run:

npm init -y

What this does:

- Instantly creates `package.json`
- Uses default values
- Best for learning and practice

---

## Installing `node_modules` Using `package.json`

### Requirements

- Node.js installed
- `package.json` present in the project folder

---

### Steps

1️⃣ Open terminal in the project folder  
2️⃣ Run:

npm install

---

### What `npm install` Does

- Reads `package.json`
- Reads `package-lock.json` (if available)
- Downloads all required dependencies
- Creates the `node_modules` folder

---

## Adding New Packages Later

If you install packages like:

- figlet
- give-me-a-joke

Their dependencies are **automatically added** inside the same `package.json` file under `dependencies`.

You do **not** need to manually edit the file.

---

## Summary

- `package.json` is the heart of a Node.js project
- It stores project info and dependencies
- `npm init` creates it interactively
- `npm init -y` creates it instantly
- `npm install` installs all required packages

