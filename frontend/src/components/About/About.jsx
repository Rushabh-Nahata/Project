import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://atharvaparkale.netlify.app/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dud1nkhu8/image/upload/v1688477195/products/PicsArt_05-23-09.30.13_df9ebj.jpg"
              alt="Founder"
            />
            <Typography>Atharva Parkale</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Website
            </Button>
            <span>This is a sample wesbite made by Atharva Parkale.</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Connect</Typography>
            <a
              href="https://www.linkedin.com/in/atharvaparkale/"
              target="blank"
            >
              <LinkedInIcon
                sx={{
                  fontSize: "40px !important",
                  color: "#00000082",
                  marginBottom:"2vh"
                }}
              />
            </a>
            <a
              href="https://github.com/AtharvaParkale"
              target="blank"
            >
              <GitHubIcon
                sx={{
                  fontSize: "35px !important",
                  color: "#00000082",
                  marginBottom:"2vh"
                }}
              />
            </a>
            <a
              href="mailto:atharva.parkale@gmail.com"
              target="blank"
            >
              <MailOutlineIcon
                sx={{
                  fontSize: "40px !important",
                  color: "#00000082",
                  marginBottom:"2vh"
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
