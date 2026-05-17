// Creating  Redux Store and exporting it

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export default store = configureStore({
  reducer: todoReducer,
});
