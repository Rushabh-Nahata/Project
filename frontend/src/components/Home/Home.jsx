import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchIcon from "@mui/icons-material/Search";
import "./Home.css";
import { getProduct } from "../../store/products/getProducts";
import { useDispatch, useSelector } from "react-redux";

import Product from "./Product";
import Footer from "../layout/Footer/Footer";
import { useEffect } from "react";
import Loader from "../layout/Loader/Loader";
// import { useEffect } from "react";

// const product = {
//   name: "Blue Tshirt",
//   price: "Rs 3000",
//   images: [
//     {
//       url: "https://m.media-amazon.com/images/I/61DGAlvxRLL._AC_UL480_FMwebp_QL65_.jpg",
//     },
//   ],
//   _id: "atharva",
// };

const Home = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    getProduct(dispatch);
  }, [dispatch]);

  return (
    <Box>
      {loading ? (
        <Loader/>
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
            className="home-navbar-container"
            sx={{
              // border: "2px solid black",
              width: "100%",
              height: "9vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              className="navbar-logo-container"
              sx={{
                // border: "2px solid black",
                width: "fit-content",
                height: "67%",
                display: "flex",
                alignItems: "center",
                fontSize: "1.8rem",
                fontWeight: "700",
                marginLeft: "3vw",
                fontFamily: "Montserrat",
              }}
            >
              <span>SHOPHUB</span>
            </Box>
            <Box
              className="navbar-options-container"
              sx={{
                // border: "2px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "fit-content",
                marginRight: "4vw",
              }}
            >
              <Typography
                sx={{
                  marginLeft: "3vw",
                  fontWeight: "500",
                  fontFamily: "Montserrat",
                  cursor: "pointer",
                }}
              >
                Home
              </Typography>
              <Typography
                sx={{
                  marginLeft: "3vw",
                  fontWeight: "500",
                  fontFamily: "Montserrat",
                  cursor: "pointer",
                }}
              >
                Products
              </Typography>
              <Typography
                sx={{
                  marginLeft: "3vw",
                  fontWeight: "500",
                  fontFamily: "Montserrat",
                  cursor: "pointer",
                }}
              >
                Contact
              </Typography>
              <Typography
                sx={{
                  marginLeft: "3vw",
                  fontWeight: "500",
                  fontFamily: "Montserrat",
                  cursor: "pointer",
                }}
              >
                About
              </Typography>
              <AccountCircleIcon
                sx={{
                  marginLeft: "2.5vw",
                  fontWeight: "500",
                  fontSize: "30px",
                  cursor: "pointer",
                }}
              />
              <LocalMallOutlinedIcon
                sx={{
                  marginLeft: "2.5vw",
                  fontWeight: "500",
                  fontSize: "30px",
                  cursor: "pointer",
                }}
              />
              <SearchIcon
                sx={{
                  marginLeft: "2.5vw",
                  fontWeight: "500",
                  fontSize: "30px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
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
                <Link>
                  <button>
                    <p>Shop Now</p>
                    <LocalMallOutlinedIcon />
                  </button>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box
            className="home-products-container"
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
                  <Product key={product._id} product={product} />
                ))}
              </Box>
            </Box>
          </Box>
          <Box
            className="home-footer-container"
            sx={{
              // border: "2px sol id blue",
              width: "100%",
              height: "20vh",
              backgroundColor: "black",
            }}
          >
            <Footer />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Home;
