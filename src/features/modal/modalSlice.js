import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isReviewOpen: false,
  isSidebarOpen: false,
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
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { openReview, closeReview, openSidebar, closeSidebar } =
  modalSlice.actions;

const modalReducer = modalSlice.reducer;
export default modalReducer;
