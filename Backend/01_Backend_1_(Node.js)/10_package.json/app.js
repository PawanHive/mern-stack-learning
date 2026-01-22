/*
************************ package.json *************************

1. package.json
==> The package.json file contains descriptive and functional 
metadata about a project, such as a name, version, license, and 
dependencies.

npm init

----------------------------------------------------------------

2.  Installing node_modules Using package.json:

🔹 Requirement
    - Node.js installed
    - package.json file present in project folder

1️⃣ Steps 
Open Terminal in Project Folder
-> Navigate to the folder that contains 'package.json':

2️⃣ Run npm Install:
RUN: npm install

🔹 What npm install Does

    - Reads package.json
    - Reads package-lock.json (if available)
    - Downloads all required packages
    - Creates node_modules folder

----------------------------------------------------------------

## how to create 'package.json' file for own Projects. ##

🔹 Step 1: Create Project Folder
mkdir my-project
cd my-project

🔹 Step 2: Initialize npm:
Run: npm init

npm will ask:

    - project name
    - version
    - description
    - entry file
    - author
    - license

After answering → package.json is created ✅

----------------------------------------------------------------

🔹 Quick Method (Recommended): to create 'package.json' for own project.

Run: npm init -y


    - Creates package.json instantly
    - Uses default values
    - Best for learning & practice

----------------------------------------------------------------

# suppose leter we install more packages like 'figlet' or 'give-me-a-joke'

==> then their dependencies just add below - in my same 'package.json' file
*/