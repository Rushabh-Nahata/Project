import { productDetailsSliceActions } from "./productDetailsSlice";
import { productActions } from "./productSlice";
import axios from "axios";

export const getProduct = async (dispatch, keyword = "",currentPage=1) => {
  try {
    let link = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}`;
    const { data } = await axios.get(link);
    // console.log(data);

    dispatch(
      productActions.setProducts({
        products: data.products,
        productCount: data.productCount,
        resultPerPage: data.resultPerPage,
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

export const getProductDetail = async (dispatch, id) => {
  try {
    const { data } = await axios.get(
      `http://localhost:4000/api/v1/products/${id}`
    );

    dispatch(
      productDetailsSliceActions.getAllProductDetails({
        product: data.product,
      })
    );
  } catch (e) {
    console.log(e);
    dispatch(
      productDetailsSliceActions.setError({
        error: e.message,
        loading: false,
      })
    );
  }
};
