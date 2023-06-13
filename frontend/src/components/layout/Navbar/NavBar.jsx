import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Divider, Typography } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

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
        <Divider orientation="vertical" flexItem />
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
  );
}

export default NavBar;
