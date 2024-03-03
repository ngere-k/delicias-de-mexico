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
  reducers: {
    addToCart: (state, { payload }) => {
      const {
        food: { id, image, title },
        price,
        stock,
        amount,
      } = payload;

      const findCartItem = state.cart.find((item) => item.id === id);

      if (findCartItem) {
        state.cart = state.cart.map((cartItem) => {
          if (cartItem.id === id) {
            let newCartAmount = cartItem.amount + 1;
            if (newCartAmount > stock) {
              newCartAmount = stock;
            }
            return newCartAmount;
          } else {
            return cartItem;
          }
        });
      } else {
        const newCartItem = {
          id,
          image,
          title,
          price,
          stock,
          amount,
        };
        state.cart.push(newCartItem);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
