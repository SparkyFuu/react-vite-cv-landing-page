import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Image, Row } from "react-bootstrap";
import "../assets/about.css";

const AboutMe = () => {
  return (
    <>
      <div className="section-title mt-2">
        <h2>Acerca de</h2>
        <p>Mas sobre mi</p>
      </div>
      <Row>
        <Col lg={4} data-aos="fade-right">
          <Image src="../src/assets/img/me.jpg" className="img-fluid" alt="" />
        </Col>
        <Col lg={8} className="pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>Front-End Dev, Experiencia en creación de sitios web</h3>
          <div className="row">
            <Col lg={6}>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    color="#00ff00"
                    className="me-2"
                  />
                  <strong>Nacimiento:</strong> <span>25 Dic 2002</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    color="#00ff00"
                    className="me-2"
                  />
                  <strong>Website:</strong>
                  <span>www.alejandrovgallardo.com</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    color="#00ff00"
                    className="me-2"
                  />
                  <strong>Telefono:</strong> <span>+569 5486 2744</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    color="#00ff00"
                    className="me-2"
                  />
                  <strong>Ciudad:</strong> <span>Santiago, Chile</span>
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    color="#00ff00"
                    className="me-2"
                  />
                  <strong>Edad:</strong> <span>20</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    color="#00ff00"
                    className="me-2"
                  />
                  <strong>Grade:</strong> <span>Junior</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    color="#00ff00"
                    className="me-2"
                  />
                  <strong>Email:</strong>
                  <span>contacto@alejandrovgallardo.com</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    color="#00ff00"
                    className="me-2"
                  />
                  <strong>Freelance:</strong> <span>Disponible</span>
                </li>
              </ul>
            </Col>
          </div>
          <p>
            Soy un desarrollador front-end apasionado por la creación de sitios
            web atractivos y funcionales. Con experiencia en la implementación
            de diseños responsivos y la integración de tecnologías modernas como
            HTML5, CSS3 y JavaScript, he trabajado en proyectos que van desde
            sitios web simples hasta aplicaciones web complejas. Además, cuento
            con habilidades en el manejo de frameworks y librerías populares
            como Bootstrap y jQuery, y también en la programación del lado del
            servidor utilizando PHP. Me gusta estar al tanto de las últimas
            tendencias en diseño y desarrollo web para poder ofrecer soluciones
            innovadoras y eficientes a los clientes.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default AboutMe;
