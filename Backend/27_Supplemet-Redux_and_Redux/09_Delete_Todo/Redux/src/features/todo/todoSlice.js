/*
A slice is a self-contained module that bundles together the state, actions, 
and reducers for one specific feature of your app — all in a single file.
*/

import { createSlice, nanoid } from "@reduxjs/toolkit"; // 'nanoid' in redux works asame as 'uuid' package

const initialState = {
  todos: [{ id: "abc", task: "demo-task", isDone: false }],
};

// Defining Slice
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // reducers known as an OBJECT of FUNCTIONS and reducer function has two variable (state, action)
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo); // direct mutation happen here, which was not allowed in plane react (THIS IS THE POWER OF REDUX TOOLKIT)
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    markAsDone: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: true } : todo,
      );
    },
  },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;
