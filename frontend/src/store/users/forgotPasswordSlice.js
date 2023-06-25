import { createSlice } from "@reduxjs/toolkit";

const forgotPasswordSlice = createSlice({
  name: "forgot",
  initialState: {
    loading: false,
    error: null,
    message: "",
  },
  reducers: {
    forgotPasswordRequest(state) {
      state.loading = true;
      state.error = null;
    },

    forgotPasswordSuccess(state, action) {
      state.loading = false;
      state.message = action.payload.message;
    },

    forgotPasswordFail(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },

    setError(state, action) {
      state.error = action.payload.error;
      state.loading = action.payload.loading;
    },

    clearError(state) {
      state.error = null;
    },
  },
});

export const forgotPasswordActions = forgotPasswordSlice.actions;

export default forgotPasswordSlice;
