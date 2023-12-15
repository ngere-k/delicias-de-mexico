import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isReviewOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openReview: (state) => {
      state.isReviewOpen = true;
    },
    closeReview: (state) => {
      state.isReviewOpen = false;
    },
  },
});

export const { openReview, closeReview } = modalSlice.actions;

const modalReducer = modalSlice.reducer;
export default modalReducer;
