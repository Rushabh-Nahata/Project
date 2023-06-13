import { useEffect } from "react";
import { Box, Divider } from "@mui/material";
import "./ProductDetails.css";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../store/products/getProducts";
import { useParams } from "react-router";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard/ReviewCard";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

function ProductDetails() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const params = useParams();
  // eslint-disable-next-line no-unused-vars
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const options = {
    edit: false,
    color: "rgba(20,20,0.1)",
    activeColor: "tomato",
    value: product.ratings,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 19,
  };

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    getProductDetail(dispatch, params.id);
  }, [dispatch, params.id, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box
          sx={{
            // border: "2px solid red",
            width: "100%",
            height: "91vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            className="product-detail-image-container"
            sx={{
              // border: "2px solid black",
              height: "100%",
              width: "40%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Carousel
              sx={{
                width: "60%",
                // height: "80vh",
                // border: "2px solid black",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {product.images &&
                product.images.map((item, i) => (
                  <img
                    className="CarouselImage"
                    key={item.url}
                    src={item.url}
                    alt={`${i} Slide`}
                  />
                ))}
            </Carousel>
          </Box>

          <Box
            className="product-detail-info-container"
            sx={{
              // border: "2px solid black",
              width: "60%",
              height: "70%",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <Box
              className="product-info-section-one"
              sx={{
                // border: "2px solid black",
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                height: "100%",
                width: "50%",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                className="product-header-container"
                sx={
                  {
                    // border: "2px solid black",
                  }
                }
              >
                <h2>{product.name}</h2>
              </Box>
              <Box
                className="product-description-container"
                sx={{
                  // border: "2px solid black",
                  fontSize: "1.95vh",
                  fontWeight: "600",
                  color: "#303030bd",
                }}
              >
                <p>{product.description}</p>
              </Box>
              <Divider orientation="horizontal" flexItem />
              <Box
                className="product-ratings-container"
                sx={{
                  // border: "2px solid black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.7vh",
                  fontWeight: "500",
                  color: "#303030bd",
                }}
              >
                <ReactStars {...options} />{" "}
                <p> ({product.numOfReviews} Reviews)</p>
              </Box>

              <Divider orientation="horizontal" flexItem />

              <Box
                className="product-price-container"
                sx={{
                  // border: "2px solid black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h2>Rs. {product.price}</h2>
              </Box>
              <Divider orientation="horizontal" flexItem />
              <Box
                className="product-quantity-container"
                sx={{
                  // border: "2px solid black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "2vh",
                }}
              >
                <button>-</button>
                <input value={1} onChange={() => {}} type="number" />
                <button>+</button>

                <Box
                  className="product-submit-container"
                  sx={{
                    // border: "2px solid black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <button>ADD TO BAG</button>
                </Box>
              </Box>
              <Divider orientation="horizontal" flexItem />

              <Box
                sx={{
                  // border: "2px solid black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8vh",
                  color: "#303030bd",
                  fontWeight: "500",
                }}
              >
                <p>
                  Status : {product.Stock === 0 ? "InStock" : "Out of Stock"}
                </p>
              </Box>
              <Divider orientation="horizontal" flexItem />

              <Box
                className="product-warranty-container"
                sx={{
                  // border: "2px solid black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8vh",
                  color: "#303030bd",
                  fontWeight: "500",
                }}
              >
                <p>
                  <span>Note : </span>We assure the authenticity and quality of
                  our products
                </p>
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box
              className="reviews-container"
              sx={{
                // border: "2px solid black",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "50%",
              }}
            >
              <Box
                sx={{
                  // border: "2px solid black",
                  height: "95%",
                  width: "90%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  className="reviews-header-container"
                  sx={{
                    // border: "2px solid black",
                    fontWeight: "600",
                    color: "#303030bd",
                    fontSize: "2vh",
                    width: "100%",
                    marginBottom: "2vh",
                  }}
                >
                  Reviews
                </Box>
                <Box
                  className="review-holder"
                  sx={{
                    // border: "2px solid black",
                    width: "100%",
                    height: "100%",
                    overflowY: "scroll",
                  }}
                >
                  {product.reviews && product.reviews[0] ? (
                    <Box>
                      {product.reviews &&
                        product.reviews.map((review) => (
                          <ReviewCard key={review._id} review={review} />
                        ))}
                    </Box>
                  ) : (
                    "No reviews yet !"
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default ProductDetails;
