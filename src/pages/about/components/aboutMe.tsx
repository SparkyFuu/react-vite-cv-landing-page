import { useState } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Image, Row, Button } from "react-bootstrap";
import "../assets/about.css";

const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

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
                  <strong>Edad:</strong> <span>21</span>
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
            web atractivos y funcionales, con un sólido historial en la
            implementación de diseños responsivos y la integración de
            tecnologías modernas como HTML5, CSS3 y JavaScript. He trabajado en
            una amplia gama de proyectos, desde sitios web simples hasta
            aplicaciones web complejas, siempre enfocado en brindar soluciones
            innovadoras y eficientes.
          </p>

          <p>
            Tengo experiencia en el uso de frameworks y librerías populares como
            Bootstrap y jQuery, y también he desarrollado habilidades en la
            programación del lado del servidor con PHP. Además, he ampliado mi
            expertise al trabajar con React y TypeScript para el desarrollo de
            interfaces de usuario dinámicas y escalables.
          </p>

          {showMore && (
            <>
              <p>
                En el ámbito del backend, tengo experiencia con Java Spring, lo
                que me permite crear aplicaciones robustas y seguras. También
                soy competente en la gestión de bases de datos, específicamente
                con PostgreSQL, lo que garantiza una integración fluida y
                eficiente de los datos en mis proyectos.
              </p>

              <p>
                Me mantengo al tanto de las últimas tendencias en diseño y
                desarrollo web para ofrecer siempre las mejores soluciones a mis
                clientes, combinando creatividad y tecnología para crear
                experiencias web excepcionales.
              </p>
            </>
          )}

          <Button
            variant="link"
            className="text-white fw-bold"
            onClick={handleToggle}
          >
            {showMore ? "Leer menos..." : "Leer más..."}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default AboutMe;
