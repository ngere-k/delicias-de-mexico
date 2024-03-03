import { configureStore } from "@reduxjs/toolkit";
import foodsReducer from "./features/foods/foodsSlice";
import reviewsReducer from "./features/reviews/reviewsSlice";
import modalReducer from "./features/modal/modalSlice";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    foods: foodsReducer,
    reviews: reviewsReducer,
    modal: modalReducer,
    user: userReducer,
    cart: cartReducer,
  },
});
