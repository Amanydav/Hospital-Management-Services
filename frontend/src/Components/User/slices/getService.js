import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  service: [],
  isLoading: false,
  error: '',
};

// Async thunk for fetching services
export const getservice = createAsyncThunk(
  "getService",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:8080/public/service");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice for managing service data
const getServiceSlice = createSlice({
  name: 'getService',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getservice.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getservice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.service = action.payload;
      })
      .addCase(getservice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default getServiceSlice.reducer;
