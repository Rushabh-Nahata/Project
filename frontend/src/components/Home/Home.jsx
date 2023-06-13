import { Box, Typography } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import "./Home.css";
import { getProduct } from "../../store/products/getProducts";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    getProduct(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, error, alert]);

  return (
    <Box>
      {loading ? (
        <Loader />
      ) : (
        <Box
          sx={{
            // border: " 2px solid black",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            className="home-bg-img-container"
            sx={{
              // border: "2px solid black",
              width: "100%",
              height: "91vh",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-end",
            }}
          >
            <Box
              className="home-text-container"
              sx={{
                // border: "2px solid black",
                width: "50%",
                height: "100%",
              }}
            >
              <Box
                className="home-text-innercontainer"
                sx={{
                  // border: "2px solid black",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "7vh",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.3vw",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                  }}
                >
                  Enjoy a Hassle Free
                </Typography>

                <Typography
                  sx={{
                    fontSize: "2.9vw",
                    fontWeight: "800",
                    marginBottom: "2.7vh",
                  }}
                >
                  Shopping Experience.
                </Typography>
                <a href="#home-products">
                  <button>
                    <p>Shop Now</p>
                    <LocalMallOutlinedIcon />
                  </button>
                </a>
              </Box>
            </Box>
          </Box>
          <Box
            className="home-products-container"
            id="home-products"
            sx={{
              // border: "2px solid black",
              minHeight: "80vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              className="home-products-inner-container"
              sx={{
                // border: "2px solid black",
                minHeight: "70vh",
                width: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Box
                className="home-products-header-container"
                sx={{
                  // border: "2px solid black",
                  width: "100%",
                  height: "fit-content",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginBottom: "3vh",
                  marginTop: "4vh",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2.7vh",
                    fontWeight: "600",
                    fontFamily: "Montserrat",
                  }}
                >
                  Featured Products
                </Typography>
              </Box>

              <Box
                className="home-products-holder-container"
                sx={{
                  // border: "2px solid black",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                }}
              >
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Home;
