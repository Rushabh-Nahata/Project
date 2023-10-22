import { Box, Button, Typography } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import "./Home.css";
import { getProduct } from "../../store/products/getProducts";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import bgImg from "../images/min2-min.jpg";
import Footer from "../layout/Footer/Footer";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { loading, error, products } = useSelector((state) => state.products);

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
        <>
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
                  width: { xs: "95%", sm: "90%" },
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
                      fontSize: { xs: "2.1vh", sm: "2.7vh" },
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

          <Box
          className="home-footer-container"
          sx={{
            width: "100%",
            height: "20vh",
            backgroundColor: "black",
          }}
        >
          <Footer />
        </Box>
        </>
      )}
    </Box>
  );
};

export default Home;
