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
            sx={{
              // border: " 2px solid black",
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: "9vh",
            }}
          >
            <Box
              className="home-bg-img-container"
              sx={{
                // border: "2px solid black",
                width: "100%",
                height: "91vh",
                display: { xs: "none", sm: "flex" },
                alignItems: "flex-start",
                justifyContent: "flex-end",
                flexDirection: { xs: "column", sm: "row" },
                backgroundImage: { xs: "none", sm: `url('${bgImg}')` },
                opacity: "0.9",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Box
                className="home-text-container"
                sx={{
                  // border: "2px solid black",
                  width: { xs: "100%", sm: "50%" },
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
                    backgroundColor: "transparent !important",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "2.3vw",
                      fontFamily: "Montserrat",
                      fontWeight: "600",
                      backgroundColor: "transparent !important",
                    }}
                  >
                    Enjoy a Hassle Free
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "2.9vw",
                      fontWeight: "800",
                      marginBottom: "2.7vh",
                      backgroundColor: "transparent !important",
                    }}
                  >
                    Shopping Experience.
                  </Typography>
                  <a href="#home-products">
                    <Button
                      size="medium"
                      variant="contained"
                      endIcon={<LocalMallOutlinedIcon />}
                      sx={{
                        fontSize: "0.8rem",
                      }}
                    >
                      Shop now
                    </Button>
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
