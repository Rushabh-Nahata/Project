import { productActions } from "./productSlice";
import axios from "axios";

export const getProduct = async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:4000/api/v1/products");

    dispatch(
      productActions.setProducts({
        products: data.products,
        productCount: data.productCount,
      })
    );
  } catch (e) {
    console.log(e);
    dispatch(
      productActions.setError({
        error: e.message,
        loading: false,
      })
    );
  }
};
