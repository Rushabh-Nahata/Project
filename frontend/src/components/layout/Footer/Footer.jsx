import "./Footer.css";
import { Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Box
      sx={{
        // border: "2px solid black",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        className="footer-section-one"
        sx={{
          // border: "2px solid white",
          width: "100%",
          height: "65%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          className="footer-social-icon-holder"
          sx={{
            // border: "2px solid white",
            width: { xs: "75%", sm: "30%" },
            height: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            cursor: "pointer",
            color: "white",
          }}
        >
          <a href="https://www.linkedin.com/in/atharvaparkale/" target="blank">
            <LinkedInIcon
              sx={{
                fontSize: "4.5vh",
              }}
            />
          </a>

          <a
            href="https://www.instagram.com/_atharvaparkale_167/?igshid=ZDdkNTZiNTM%3D"
            target="blank"
          >
            {" "}
            <InstagramIcon
              sx={{
                fontSize: "4.5vh",
              }}
            />
          </a>

          <a href="https://github.com/AtharvaParkale" target="blank">
            {" "}
            <GitHubIcon
              sx={{
                fontSize: "4.5vh",
              }}
            />
          </a>

          <a href="https://atharvaparkale.netlify.app/" target="blank">
            <LanguageIcon
              sx={{
                fontSize: "4.5vh",
              }}
            />
          </a>
        </Box>
      </Box>
      <Box
        className="footer-section-two"
        sx={{
          // border: "2px solid white",
          width: "100%",
          height: "35%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "600",
          color: "white",
          fontSize: "1.8vh",
        }}
      >
        ©️ 2023 Atharva Parkale. All Rights Reserved
      </Box>
    </Box>
  );
}

export default Footer;
