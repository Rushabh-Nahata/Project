import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Typography } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Box
      className="home-navbar-container"
      sx={{
        // border: "2px solid black",
        width: "100%",
        height: "9vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #0000001f",
        
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
        <Link to="/">
          <Typography
            sx={{
              marginLeft: "3vw",
              fontWeight: "500",
              fontFamily: "Montserrat",
              cursor: "pointer",
              textDecoration:"none" ,
              color:"black"
            }}
          >
            Home
          </Typography>
        </Link>
        <Link to="/products">
          <Typography
            sx={{
              marginLeft: "3vw",
              fontWeight: "500",
              fontFamily: "Montserrat",
              cursor: "pointer",
              textDecoration:"none" ,
              color:"black"
            }}
          >
            Products
          </Typography>
        </Link>

        <Typography
          sx={{
            marginLeft: "3vw",
            fontWeight: "500",
            fontFamily: "Montserrat",
            cursor: "pointer",
            textDecoration:"none" ,
              color:"black"
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
            textDecoration:"none" ,
              color:"black"
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
            textDecoration:"none" ,
              color:"black"
          }}
        />
        <LocalMallOutlinedIcon
          sx={{
            marginLeft: "2.5vw",
            fontWeight: "500",
            fontSize: "30px",
            cursor: "pointer",
            textDecoration:"none" ,
              color:"black"
          }}
        />
        <Link to="/search">
          <SearchIcon
            sx={{
              marginLeft: "2.5vw",
              fontWeight: "500",
              fontSize: "30px",
              cursor: "pointer",
              textDecoration:"none" ,
              color:"black"
            }}
          />
        </Link>
      </Box>
    </Box>
  );
}

export default NavBar;
