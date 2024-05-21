import {
  faAward,
  faBookAtlas,
  faHeadset,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
//@ts-ignore
import PureCounter from "@srexi/purecounterjs";
import "../assets/about.css";

const Counts = () => {
  useEffect(() => {
    new PureCounter();
  }, []);

  return (
    <>
      <Row className="counts">
        <Col lg={3} md={6}>
          <div className="count-box">
            <FontAwesomeIcon
              icon={faSmile}
              color="#00ff00"
              className="me-2 about-icon"
            />
            <span
              data-purecounter-start="0"
              data-purecounter-end="4"
              data-purecounter-duration="1"
              className="purecounter"
            ></span>
            <p>Clientes</p>
          </div>
        </Col>
        <Col lg={3} md={6} className="mt-5 mt-md-0">
          <div className="count-box">
            <FontAwesomeIcon
              icon={faBookAtlas}
              color="#00ff00"
              className="me-2 about-icon"
            />
            <span
              data-purecounter-start="0"
              data-purecounter-end="8"
              data-purecounter-duration="1"
              className="purecounter"
            ></span>
            <p>Proyectos</p>
          </div>
        </Col>
        <Col lg={3} md={6} className="mt-5 mt-lg-0">
          <div className="count-box">
            <FontAwesomeIcon
              icon={faHeadset}
              color="#00ff00"
              className="me-2 about-icon"
            />
            <span
              data-purecounter-start="0"
              data-purecounter-end="1463"
              data-purecounter-duration="1"
              className="purecounter"
            ></span>
            <p>Horas de soporte</p>
          </div>
        </Col>
        <Col lg={3} md={6} className="mt-5 mt-lg-0">
          <div className="count-box">
            <FontAwesomeIcon
              icon={faAward}
              color="#00ff00"
              className="me-2 about-icon"
            />
            <span
              data-purecounter-start="0"
              data-purecounter-end="3"
              data-purecounter-duration="1"
              className="purecounter"
            ></span>
            <p>Cursos</p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Counts;
