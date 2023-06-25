import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/productSlice";
import productDetailsSlice from "./products/productDetailsSlice";
import userSlice from "./users/userSlice";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    productDetails: productDetailsSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
