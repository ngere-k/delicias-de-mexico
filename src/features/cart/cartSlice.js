import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  delivery_fee: "Free",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const { addToCart } = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
