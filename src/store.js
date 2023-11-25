import { configureStore } from "@reduxjs/toolkit";
import foodsReducer from "./features/foods/foodsSlice";

export const store = configureStore({
  reducer: {
    foods: foodsReducer,
  },
});
