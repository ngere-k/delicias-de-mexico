import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { reviewsDB } from "../../firebase/config";

const initialState = {
  isLoading: false,
  error: null,
  reviews: [],
};

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async (_, { rejectWithValue }) => {
    const ref = collection(reviewsDB, "reviews");
    try {
      return await getDocs(ref);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        const data = action.payload.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        state.isLoading = false;
        state.error = null;
        state.reviews = data;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const reviewsReducer = reviewsSlice.reducer;

export default reviewsReducer;
