import { Box, Typography } from "@mui/material";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../../store/products/getProducts";
import Loader from "../../layout/Loader/Loader";
import ProductCard from "../../Home/ProductCard";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useParams } from "react-router";
import Pagination from "react-js-pagination";

function Products() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const params = useParams();

  const [currentPage, setCurrentPage] = useState(1);

  const { loading, error, products, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const keyword = params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    getProduct(dispatch, keyword, currentPage);
  }, [dispatch, error, alert, keyword, currentPage]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box
            sx={{
              width: "100%",
              minHeight: "91vh",
              // border: "2px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                // border: "2px solid black",
                width: "94%",
                minHeight: "88vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  // border: "2px solid red",
                  width: "100%",
                  height: "10vh",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="span"
                  sx={{
                    fontWeight: "500",
                  }}
                >
                  {/* {"> "}Products  */}
                </Typography>
              </Box>

              <Box
                className="home-products-holder-container"
                sx={{
                  // border: "2px solid red",
                  width: "100%",
                  minHeight: "70vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                  // marginTop:"5vh"
                }}
              >
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </Box>

              {productsCount > resultPerPage ? (
                <Box
                  sx={{
                    // border: "2px solid red",
                    width: "100%",
                    minHeight: "10vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "3vh",
                  }}
                >
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={productsCount}
                    onChange={setCurrentPageNo}
                    nextPageText=">>"
                    prevPageText="<<"
                    firstPageText="First"
                    lastPageText="Last"
                    itemClass="page-item"
                    linkClass="page-link"
                    activeClass="pageItemActive"
                    activeLinkClass="pageLinkActive"
                  />
                </Box>
              ) : (
                <></>
              )}
            </Box>
          </Box>
        </>
      )}
    </>
  );
}

export default Products;
