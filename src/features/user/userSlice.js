import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

// register user
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, { displayName: username });
      return res.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// sign in user
export const signInUser = createAsyncThunk(
  "user/signInUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// sign out user
export const signOutUser = createAsyncThunk("user/signOutUser", async () => {
  try {
    await signOut(auth);
    console.log("sign out user");
  } catch (error) {
    console.log("error signing out");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      // register user
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
        toast.success(
          `Hello ${state.user.displayName}, You have successfully registered.`
        );
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(`${state.error}`);
      })
      // sign in user
      .addCase(signInUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
        toast.success(
          `Welcome back ${state.user.displayName}. You are in for a treat!`
        );
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(`${state.error}`);
      })
      // sign out user
      .addCase(signOutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.user = null;
        toast.success("You have successfully signed out.");
      });
  },
});

const userReducer = userSlice.reducer;
export default userReducer;
