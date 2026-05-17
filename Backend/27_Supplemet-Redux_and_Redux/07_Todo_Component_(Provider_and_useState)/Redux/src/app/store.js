// Creating  Redux Store and exporting it

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

const store = configureStore({
  reducer: todoReducer,
});

export default store;
