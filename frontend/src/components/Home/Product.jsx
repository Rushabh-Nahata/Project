/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const options = {
  edit: false,
  color: "rgba(20,20,0.1)",
  activeColor: "tomato",
  value: 2.5,
  isHalf: true,
  size: window.innerWidth < 600 ? 20 : 24,
};
function Product({ product }) {
  return (
    <Link className="product-card" to={product._id}>
      <Box
        sx={{
          border: "1px solid #e7e3e3",
          width: "17vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          height: "54vh",
          marginRight: "3vw",
          marginBottom: "5vh",
          borderRadius: "1px",
        }}
      >
        <Box
          className="product-card-image-holder"
          sx={{
            // border: "2px solid black",
            width: "100%",
            height: "70%",
            overflow: "hidden",
            marginBottom: "0.6vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid #e7e3e3",
          }}
        >
          <img
            src={product.images[0].url}
            alt={product.name}
            style={{ width: "80%", height: "100%", objectFit: "contain" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "30%",
            // border: "2px solid red",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              // border: "2px solid black",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              fontWeight: "700",
            }}
          >
            <p>{product.name}</p>
          </Box>
          <Box
            sx={{
              // border: "2px solid black",
              width: "95%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "black",
              fontSize: "1.8vh",
              fontWeight: "500",
            }}
          >
            <ReactStars {...options} />
            <span>(256 Reviews)</span>
          </Box>

          <Box
            sx={{
              // border: "2px solid black",
              fontWeight: "500",
              color: "black",
            }}
          >
            <span>{product.price}</span>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}

export default Product;