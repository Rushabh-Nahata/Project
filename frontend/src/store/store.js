import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/productSlice";
import productDetailsSlice from "./products/productDetailsSlice";
import userSlice from "./users/userSlice";
import userProfileSlice from "./users/userProfileSlice";
import forgotPasswordSlice from "./users/forgotPasswordSlice";
import cartsSlice from "./carts/cartsSlice";
import orderSlice from "./orders/orderSlice";
import myOrdersSlice from "./orders/myOrdersSlice";
import orderDetailsSlice from "./orders/orderDetailsSlice";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    productDetails: productDetailsSlice.reducer,
    user: userSlice.reducer,
    profile: userProfileSlice.reducer,
    forgot: forgotPasswordSlice.reducer,
    carts: cartsSlice.reducer,
    order: orderSlice.reducer,
    myOrders: myOrdersSlice.reducer,
    orderDetails: orderDetailsSlice.reducer,
  },
});

export default store;
