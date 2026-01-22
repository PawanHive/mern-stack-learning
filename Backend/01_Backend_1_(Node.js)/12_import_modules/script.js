/*
====================== JavaScript Modules (Import) ======================

IMPORTANT NOTES:

1. Use ONLY ONE module system in a file:
   - ES Modules  → import / export  (recommended)
   - CommonJS   → require() / module.exports

2. Prefer ES Modules (`import`) in modern JavaScript and MERN stack projects.

3. To use `import` in Node.js:
   - Create a package.json file (using `npm init -y` or manually)
   - Add this line in package.json:
     "type": "module"

4. In the Browser:
   - Use <script type="module"> to enable `import`

5. Always include the file extension when importing local files:
   - Example: import { sum } from "./math.js"

6. Do NOT mix `import` and `require()` in the same file.

=======================================================================
*/

import {sum, PI} from "./math.js"

console.log(sum(1, 2));