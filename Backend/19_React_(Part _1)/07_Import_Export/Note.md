
# #7: Import-Export 

## 1. (Default) Export and Import:

### Default Export: 
```jsx
export default Title;
```
A file can have **only one default export**

### Import: 
```jsx
import Title from "./components/Title";
```
No `{}` needed, and you can rename it


## 2. (Named) Export and import:

### Named Export:
```jsx
export {Title};
```
We can export **multiple things** from a file.

### Import: 
```jsx
import {Title} from "./conponents/Title.jsx";
```
We must use **same name inside curly braces `{}`**