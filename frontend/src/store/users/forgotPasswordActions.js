import axios from "axios";
import { forgotPasswordActions } from "./forgotPasswordSlice";

// Forgot Password
export const forgotPassword = async (dispatch, email) => {
  try {
    dispatch(forgotPasswordActions.forgotPasswordRequest());

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `http://localhost:4000/api/v1/password/forgot`,
      email,
      config
    );

    dispatch(
      forgotPasswordActions.forgotPasswordSuccess({
        message: data.message,
      })
    );
  } catch (e) {
    console.log(e);
    dispatch(
      forgotPasswordActions.forgotPasswordFail({
        error: e.response.data.message,
      })
    );
  }
};
