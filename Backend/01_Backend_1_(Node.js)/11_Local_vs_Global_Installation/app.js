/*
*********************** Local v/s Global **********************

npm install -g <-package name->

npm link <-package name->

---------------------------------------------------------------------

# How to install packages Globally (INSTALLING PACKAGES GLOBALLY IS NOT GOOD PRACTICE)

1 STEP:
    Run: sudo chown -R $USER/usr/local/lib/node_modules     ==> This command is written because we need admin access before installing globally.

2 STEP:
    Run: npm install -g <-package name->        ==> instal package globally

3 STEP:
    Run: npm link <-package name->          ==> this will link package.

------------------------------------------------------------------

NOTE: MISTAKE

-> Installing package globally is not good practice.
-> intalling package locally is good practice
*/