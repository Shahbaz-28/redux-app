import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getApi from "../../apis.js/get_user";

export const fetchUserData = createAsyncThunk("getReadApi/fetchUserData", async () => {
  const response = await getApi();
  console.log("data in thunk", response);
  return response;
});

const getSlice = createSlice({
  name: "getReadApi",
  initialState: {
    loading: false,
    data: [],
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log("data in payload", state.data);
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {increment, decrement} = getSlice.actions;

export default getSlice.reducer;
