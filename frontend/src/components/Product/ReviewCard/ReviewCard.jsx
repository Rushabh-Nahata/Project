/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import "./ReviewCard.css";
import ReactStars from "react-rating-stars-component";
import profilePng from "../../images/bg2-min.jpg";

function ReviewCard({ review }) {
  const options = {
    edit: false,
    color: "rgba(20,20,0.1)",
    activeColor: "tomato",
    value: review.rating,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 15,
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
        //    border: "2px solid red",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: "2vh",
          marginBottom: "1vh",
        }}
      >
        <Box
          className="review-user-image-holder"
          sx={{
            display: "flex",
            // border: "2px solid   black",
            width: "6vh",
            height: "6vh",
            borderRadius: "50px",
            marginRight:"1vw"
          }}
        >
          <img src={profilePng} alt="User" />
        </Box>

        <Box
          className="review-content-holder"
          sx={{
            display: "flex",
            // border: "2px solid black",
            width: "65%",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <p>{review.name}</p>
          <ReactStars {...options} />
          <span>{review.comment}</span>
        </Box>
      </Box>

    </>
  );
}

export default ReviewCard;
