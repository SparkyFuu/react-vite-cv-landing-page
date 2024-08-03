import {
  faGithub,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import "../assets/home.css";

const HomeMain = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-start vh-100 home-animation">
      <Row className="text-center">
        <Col>
          <h1 className="home-name">Alejandro Valenzuela</h1>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <h2 className="text-secondary">
            Transformando <span className="text-white">ideas</span> en
            soluciones.
          </h2>
        </Col>
      </Row>
      <Row className="home-social-icons mt-2">
        <Col>
          <a href="https://wa.me/954862744" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} color="white" />
          </a>
        </Col>
        <Col>
          <a href="https://www.instagram.com/_spark.02_/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} color="white" />
          </a>
        </Col>
        <Col>
          <a href="https://github.com/SparkyFuu" target="_blank">
            <FontAwesomeIcon icon={faGithub} color="white" />
          </a>
        </Col>
        <Col>
          <a>
            <FontAwesomeIcon icon={faUser} color="white" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeMain;
