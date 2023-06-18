import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: true,
    productsCount: 0,
    error: null,
    resultPerPage:0
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload.products;
      state.productsCount = action.payload.productCount;
      state.loading = false;
      state.resultPerPage=action.payload.resultPerPage
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

export const productActions = productSlice.actions;

export default productSlice;
