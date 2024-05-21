import { Container } from "react-bootstrap";
import "../footer/footer.css";

const Footer = () => {
  return (
    <Container fluid className="credits">
      Designed by{" "}
      <a href="https://github.com/SparkyFuu" target="_blank">
        SparkyFuu
      </a>
    </Container>
  );
};

export default Footer;
