import axios from "axios";
import { orderActions } from "./orderSlice";
import { myOrderActions } from "./myOrdersSlice";
import { orderDetailsActions } from "./orderDetailsSlice";

// Create Order
export const createOrder = async (dispatch, order) => {
  try {
    dispatch(orderActions.orderRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const { data } = await axios.post(
      "http://localhost:4000/api/v1/order/new",
      order,
      config
    );

    dispatch(
      orderActions.orderSuccess({
        order: data,
      })
    );
  } catch (e) {
    console.log(e);
    dispatch(
      orderActions.orderFail({
        error: e.response.data.message,
      })
    );
  }
};

// My Orders
export const myOrders = async (dispatch) => {
  try {
    dispatch(myOrderActions.myOrderRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.get(
      "http://localhost:4000/api/v1/orders/me",
      config
    );

    dispatch(
      myOrderActions.myOrderSuccess({
        orders: data.orders,
      })
    );
  } catch (error) {
    console.log(error);
    dispatch(
      myOrderActions.myOrderFail({
        error: error.response.data.message,
      })
    );
  }
};

// Get Order Details
export const getOrderDetails = async (dispatch, id) => {
  try {
    dispatch(orderDetailsActions.orderDetailsRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.get(
      `http://localhost:4000/api/v1/order/${id}`,
      config 
    );

    dispatch(
      orderDetailsActions.orderDetailsSuccess({
        order: data.order,
      })
    );
  } catch (error) {
    console.log(error);
    dispatch(
      orderDetailsActions.orderDetailsFail({
        error: error.response.data.message,
      })
    );
  }
};

// Clearing Errors
export const clearErrors = async (dispatch) => {
  dispatch(orderActions.clearError());
};
