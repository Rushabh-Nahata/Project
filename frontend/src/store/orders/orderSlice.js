import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    order: {},
    error: null,
  },
  reducers: {
    // eslint-disable-next-line no-unused-vars
    orderRequest(state, action) {
      state.loading = true;
    },
    orderSuccess(state, action) {
      state.order = action.payload.order;
      state.loading = true;
    },
    orderFail(state, action) {
      (state.error = action.payload.error), (state.loading = true);
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice;
