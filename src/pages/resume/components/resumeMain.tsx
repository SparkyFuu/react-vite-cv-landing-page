import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ResumeItem from "./resumeItem";
import SectionTitle from "./sectionTitle";
import "../assets/resume.css";

const ResumeMain: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  const handleShowMoreResume = () => {
    setShowResume(!showResume);
  };
  return (
    <section id="resume" className="resume">
      <Container className="about-me shadow-lg p-3 mb-5 bg-black bg-opacity-75 rounded mt-5 aaaa">
        <SectionTitle title="CV" subtitle="Revisa mi currículum" />

        <Row>
          <Col lg={6}>
            <h3 className="resume-title">Resumen</h3>
            <div className="resume-item pb-0">
              <h4>Alejandro Valenzuela</h4>
              <p>
                {!showMore && (
                  <em>
                    Como desarrollador Front-End, mi trabajo se centra en crear
                    la parte visual y funcional de los sitios web y
                    aplicaciones...
                  </em>
                )}
                {showMore && (
                  <>
                    <em>
                      Como desarrollador Front-End, mi trabajo se centra en
                      crear la parte visual y funcional de los sitios web y
                      aplicaciones. Desde la estructura básica en HTML, pasando
                      por la implementación de diseños responsivos en CSS, hasta
                      la programación interactiva en TypeScript, mi objetivo es
                      crear una experiencia de usuario fluida y atractiva.
                      Además, me aseguro de que el sitio web se cargue
                      rápidamente y esté optimizado para los motores de
                      búsqueda, lo que aumenta la visibilidad y la
                      accesibilidad. Mi enfoque en la calidad y la eficiencia me
                      permite crear soluciones innovadoras y escalables, siempre
                      trabajando en equipo y cumpliendo con los plazos
                      establecidos.
                    </em>
                  </>
                )}
                <Button
                  variant="link"
                  className="text-white fw-bold"
                  onClick={handleToggle}
                >
                  {showMore ? "Leer menos..." : "Leer más..."}
                </Button>
              </p>
              <p>
                <ul>
                  <li>Santiago, Chile</li>
                  <li>+569 5486 2744</li>
                  <li>contacto@alejandrovgallardo.com</li>
                </ul>
              </p>
            </div>

            <h3 className="resume-title">Educación</h3>
            <ResumeItem
              title="Educación Superior"
              duration="2021 - 2023"
              location="Instituto Profesional Duoc UC, Santiago, Chile"
              description={["Analista Programador Computacional"]}
            />
          </Col>

          <Col lg={6}>
            <h3 className="resume-title">Experiencia</h3>
            <ResumeItem
              title="Evol Services"
              duration="2024 - ACTUALIDAD"
              location="Santiago, Chile"
              description={[
                "Desarrollo web.",
                "Manejo de HTML, CSS, TypeScript, Bootstrap, Java Spring, JPA, PostgreSql, React.",
                "Documentación.",
                "Programador Junior",
                "Manejo de ramas en GitHub.",
              ]}
              link="https://services.evol.energy"
            />
            {showResume && (
              <>
                <ResumeItem
                  title="tallerDyPFenixSpa.cl"
                  duration="2023"
                  location="Santiago, Chile"
                  description={[
                    "Página web.",
                    "Manejo de HTML, CSS, JavaScript, Bootstrap, jQuery y PHP.",
                    "Documentación.",
                    "Desarrollo página web de contacto y informaciones.",
                    "Manejo de ramas en GitHub.",
                  ]}
                  link="https://tallerdypfenixspa.cl"
                />
                <ResumeItem
                  title="hqsconsultores.cl"
                  duration="2023"
                  location="Santiago, Chile"
                  description={[
                    "Página web.",
                    "Manejo de HTML, CSS, JavaScript, Bootstrap, jQuery y PHP.",
                    "Documentación.",
                    "Desarrollo página web de contacto y informaciones.",
                    "Manejo de ramas en GitHub.",
                  ]}
                  link="https://hqsconsultores.cl"
                />
                <ResumeItem
                  title="bar88.cl"
                  duration="2023"
                  location="Santiago, Chile"
                  description={[
                    "Página web.",
                    "Actualización (EX SINATRARESTOBAR.CL).",
                    "Manejo de HTML, CSS, JavaScript, Bootstrap, jQuery y PHP.",
                    "Documentación.",
                    "Desarrollo página web de contacto y reservas para Restobar.",
                    "Manejo de ramas en GitHub.",
                  ]}
                  link="https://bar88.cl"
                />
                <ResumeItem
                  title="SinatraRestobar.cl"
                  duration="2023"
                  location="Santiago, Chile"
                  description={[
                    "Página web.",
                    "Manejo de HTML, CSS, JavaScript, Bootstrap, jQuery y PHP.",
                    "Documentación.",
                    "Desarrollo página web de contacto y reservas para Restobar.",
                    "Manejo de ramas en GitHub.",
                  ]}
                  link="https://sinatrarestobar.cl"
                />
                <ResumeItem
                  title="UptoLimitGym 2.0"
                  duration="2023"
                  location="Santiago, Chile"
                  description={[
                    "Mantenedor de usuarios y entrenadores.",
                    "Manejo de Java, MySQL y librerías.",
                    "Documentación del proyecto.",
                    "Desarrollo Mantenedor de usuarios para gimnasio comercial junto a sus entrenadores.",
                  ]}
                />
                <ResumeItem
                  title="UptoLimitGym"
                  duration="2022"
                  location="Santiago, Chile"
                  description={[
                    "Mantenedor de usuarios.",
                    "Manejo de Java, MySQL y librerías.",
                    "Documentación del proyecto.",
                    "Desarrollo Mantenedor de usuarios para gimnasio comercial.",
                  ]}
                />
                <ResumeItem
                  title="EntrenandoConDiego"
                  duration="2021"
                  location="Santiago, Chile"
                  description={[
                    "Página web.",
                    "Manejo de HTML, CSS, JavaScript, Bootstrap.",
                    "Documentación.",
                    "Desarrollo página web de contacto para entrenador de gimnasio.",
                  ]}
                  link="https://entrenandocondiego.pages.dev"
                />
                <ResumeItem
                  title="Servidores y Soporte Ukader.net"
                  duration="2020 - 2021"
                  location="Santiago, Chile"
                  description={[
                    "Desarrollo Servidores de videojuegos.",
                    "Soporte servidores.",
                    "Creación de eventos grandes.",
                    "Manejo de HTML, CSS, JavaScript, MySQL, Lua, Python.",
                    "Documentación.",
                    "Manejo de ramas en GitHub.",
                  ]}
                  link="https://ukader.net"
                />
                <ResumeItem
                  title="Servidores FiveM"
                  duration="2020"
                  location="Santiago, Chile"
                  description={[
                    "Desarrollo Servidores de videojuegos (GTA V).",
                    "Manejo de HTML, CSS, JavaScript, MySQL, Lua, Python.",
                    "Documentación.",
                    "Manejo de ramas en GitHub.",
                  ]}
                />
              </>
            )}
            <Button
              variant="link"
              className="text-white fw-bold"
              onClick={handleShowMoreResume}
            >
              {showResume ? "Leer menos..." : "Leer más..."}
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default ResumeMain;
