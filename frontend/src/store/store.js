import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/productSlice";
import productDetailsSlice from "./products/productDetailsSlice";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    productDetails:productDetailsSlice.reducer
  },
});

export default store;