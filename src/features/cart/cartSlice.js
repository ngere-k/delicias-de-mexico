import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart: JSON.parse(localStorage.getItem("foodCart")) || [],
  total_items: 0,
  total_amount: 0,
  delivery_fee: 1750,
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
            let newCartAmount = cartItem.amount + amount;
            if (newCartAmount > stock) {
              newCartAmount = stock;
            }
            toast.success("Product quantity modified.");
            return {
              ...cartItem,
              amount: newCartAmount,
            };
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
        toast.success("Product added to cart.");
      }
    },
    removeCartItem: (state, { payload: id }) => {
      state.cart = state.cart.filter((item) => item.id !== id);
      toast.success("Product removed from cart.");
    },
    toggleCartAmount: (state, { payload }) => {
      const { id, name } = payload;
      state.cart = state.cart.map((item) => {
        if (item.id === id) {
          if (name === "increase") {
            let newCartAmount = item.amount + 1;
            if (newCartAmount > item.stock) {
              newCartAmount = item.stock;
            }
            return {
              ...item,
              amount: newCartAmount,
            };
          }
          if (name === "decrease") {
            let newCartAmount = item.amount - 1;
            if (newCartAmount < 1) {
              newCartAmount = 1;
            }
            return {
              ...item,
              amount: newCartAmount,
            };
          }
        } else {
          return item;
        }
      });
    },
    clearCart: (state) => {
      state.cart = [];
      toast.success("Cart emptied. Happy shopping!");
    },
    cartTotals: (state) => {
      const { total_items, total_amount } = state.cart.reduce(
        (acc, cartItem) => {
          const { price, amount } = cartItem;
          acc.total_items += amount;
          acc.total_amount += price * amount;

          return acc;
        },
        { total_items: 0, total_amount: 0 }
      );
      state.total_items = total_items;
      state.total_amount = total_amount;
    },
  },
});

export const {
  addToCart,
  removeCartItem,
  toggleCartAmount,
  clearCart,
  cartTotals,
} = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
