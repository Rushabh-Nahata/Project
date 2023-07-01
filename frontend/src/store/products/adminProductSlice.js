import { createSlice } from "@reduxjs/toolkit";

const adminProductSlice = createSlice({
  name: "adminProductAdmin",
  initialState: {
    loading: false,
    error: null,
    isDeleted: false,
  },
  reducers: {
    // eslint-disable-next-line no-unused-vars
    deleteProductRequest(state, action) {
      state.loading = true;
    },
    deleteProductSuccess(state, action) {
      state.loading = false;
      state.isDeleted = action.payload.isDeleted;
    },
    deleteProductFail(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
    deleteProductReset(state) {
      state.isDeleted = false;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const adminProductActions = adminProductSlice.actions;

export default adminProductSlice;
