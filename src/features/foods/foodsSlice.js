import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  foods: [],
};

export const fetchFoods = createAsyncThunk(
  "foods/fetchFoods",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios("https://the-mexican-food-db.p.rapidapi.com/", {
        headers: {
          "X-RapidAPI-Key": `${process.env.REACT_APP_FOOD_API_KEY}`,
          "X-RapidAPI-Host": "the-mexican-food-db.p.rapidapi.com",
        },
      });

      return res.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response);
    }
  }
);

const foodsSlice = createSlice({
  name: "foods",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoods.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFoods.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.foods = action.payload;
      })
      .addCase(fetchFoods.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const foodsReducer = foodsSlice.reducer;
export default foodsReducer;
