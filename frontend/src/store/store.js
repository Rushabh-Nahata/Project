import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/productSlice";
import productDetailsSlice from "./products/productDetailsSlice";
import userSlice from "./users/userSlice";
import userProfileSlice from "./users/userProfileSlice";
import forgotPasswordSlice from "./users/forgotPasswordSlice";
import cartsSlice from "./carts/cartsSlice";
import orderSlice from "./orders/orderSlice";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    productDetails: productDetailsSlice.reducer,
    user: userSlice.reducer,
    profile: userProfileSlice.reducer,
    forgot: forgotPasswordSlice.reducer,
    carts: cartsSlice.reducer,
    order: orderSlice.reducer,
  },
});

export default store;
