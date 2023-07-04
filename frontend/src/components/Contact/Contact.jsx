import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:atharva.parkale@gmail.com">
        <Button>Contact: atharva.parkale@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;