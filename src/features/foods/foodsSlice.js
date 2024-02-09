import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  foods: [],
  singleFood: [],
  isLoadingSingleFood: false,
  errorInSingleFood: null,
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
      if (error.response.status === 429) {
        return rejectWithValue(
          "You have exceeded the MONTHLY quota for Requests on your current plan, BASIC. Please check back on 20th."
        );
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchSingleFood = createAsyncThunk(
  "foods/fetchSingleFood",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios(
        `https://the-mexican-food-db.p.rapidapi.com/${id}`,
        {
          headers: {
            "X-RapidAPI-Key": `${process.env.REACT_APP_FOOD_API_KEY}`,
            "X-RapidAPI-Host": "the-mexican-food-db.p.rapidapi.com",
          },
        }
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 429) {
        return rejectWithValue(
          "You have exceeded the MONTHLY quota for Requests on your current plan, BASIC. Please check back on 20th."
        );
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

const foodsSlice = createSlice({
  name: "foods",
  initialState,
  extraReducers: (builder) => {
    builder
      // fetch all foods
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
      })
      // fetch single food
      .addCase(fetchSingleFood.pending, (state) => {
        state.isLoadingSingleFood = true;
      })
      .addCase(fetchSingleFood.fulfilled, (state, action) => {
        state.isLoadingSingleFood = false;
        state.errorInSingleFood = null;
        state.singleFood = action.payload;
      })
      .addCase(fetchSingleFood.rejected, (state, action) => {
        state.isLoadingSingleFood = false;
        state.errorInSingleFood = action.payload;
      });
  },
});

const foodsReducer = foodsSlice.reducer;
export default foodsReducer;
