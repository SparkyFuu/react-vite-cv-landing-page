import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faComputer,
  faDatabase,
  faFileInvoice,
  faGlobe,
  faLaptop,
  faLightbulb,
  faPeopleGroup,
  faRobot,
  faServer,
  faStamp,
} from "@fortawesome/free-solid-svg-icons";

import { Col, Row } from "react-bootstrap";

const interestsData = [
  { icon: faGlobe, color: "#ffbb2c", text: "Programación web" },
  { icon: faDatabase, color: "#5578ff", text: "Base de datos" },
  { icon: faServer, color: "#e80368", text: "Servidores" },
  { icon: faComputer, color: "#e361ff", text: "Hardware" },
  { icon: faCode, color: "#47aeff", text: "Software" },
  { icon: faLaptop, color: "#86fc17", text: "S.W de Escritorio" },
  { icon: faFileInvoice, color: "#11dbcf", text: "Documentación" },
  { icon: faPeopleGroup, color: "#4233ff", text: "Scrum" },
  { icon: faStamp, color: "#b2904f", text: "Certificados" },
  { icon: faRobot, color: "#b20969", text: "Inteligencia Artificial" },
  { icon: faLightbulb, color: "#ff5828", text: "Aprendizaje" },
];

const Interests = () => {
  return (
    <>
      <div className="section-title mt-4">
        <h2>Intereses</h2>
      </div>
      <Row className="interests">
        {interestsData.map((interest, index) => (
          <Col lg={3} md={4} key={index} className={index > 3 ? "mt-4" : ""}>
            <div className="icon-box">
              <FontAwesomeIcon
                size="xl"
                icon={interest.icon}
                color={interest.color}
                className="me-2 about-icon"
              />
              <h3>{interest.text}</h3>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Interests;
