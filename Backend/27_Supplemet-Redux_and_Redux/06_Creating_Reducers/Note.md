# #6: Creating a reducer

- Redux Toolkit automatically generates action creators (fnxs that create action objects)

- (state, action) => {//update state}

- Redux Toolkit lets you write simpler immutable update logic using "mutating" syntax.

## `features/todo/todoSlice.js` Code Snippet explained 

```js
/*
A Slice = one feature's complete Redux logic in one file.

It contains:
1. State
2. Reducers
3. Actions
*/

import { createSlice, nanoid } from "@reduxjs/toolkit";

// nanoid() generates unique IDs automatically

// Initial state of todo feature
const initialState = {
  todos: [
    {
      id: "abc",
      task: "demo-task",
      isDone: false,
    },
  ],
};

// Creating Slice
export const todoSlice = createSlice({
  
  // Name of slice
  name: "todo",

  // Initial data
  initialState,

  /*
  Reducers = functions that change state

  Every reducer gets:
  1. state  -> current state
  2. action -> data sent while dispatching
  */
  reducers: {

    // Add new todo
    addTodo: (state, action) => {

      // Creating new todo object
      const newTodo = {
        id: nanoid(), // unique id
        task: action.payload, // task text
        isDone: false,
      };

      /*
      Redux Toolkit uses Immer internally,
      so direct mutation is allowed here.
      */
      state.todos.push(newTodo);
    },

    // Delete todo using ID
    deleteTodo: (state, action) => {

      /*
      action.payload contains todo id

      filter() keeps all todos
      except matching id
      */
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    // Mark todo as completed
    markAsDone: (state, action) => {

      /*
      Loop through all todos
      and find matching id
      */
      state.todos.map((todo) => {

        // If ids match
        if (todo.id === action.payload) {

          // Mark completed
          todo.isDone = true;
        }
      });
    },
  },
});

/*
Auto-generated actions
from reducers
*/
export const {
  addTodo,
  deleteTodo,
  markAsDone,
} = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;
```