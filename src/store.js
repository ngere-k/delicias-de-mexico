import { configureStore } from "@reduxjs/toolkit";
import foodsReducer from "./features/foods/foodsSlice";
import reviewsReducer from "./features/reviews/reviewsSlice";

export const store = configureStore({
  reducer: {
    foods: foodsReducer,
    reviews: reviewsReducer,
  },
});
