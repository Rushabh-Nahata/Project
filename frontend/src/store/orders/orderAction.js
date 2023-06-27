import axios from "axios";
import { orderActions } from "./orderSlice";

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

// Clearing Errors
export const clearErrors = async (dispatch) => {
  dispatch(orderActions.clearError());
};
