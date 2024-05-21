import { Col, ProgressBar, Row } from "react-bootstrap";

const skillsData = [
  { name: "HTML", level: 100, skillLevel: "Semi Senior" },
  { name: "CSS", level: 90, skillLevel: "Semi Senior" },
  { name: "JavaScript", level: 80, skillLevel: "Junior" },
  { name: "TypeScript", level: 80, skillLevel: "Junior" },
  { name: "Python", level: 20, skillLevel: "Junior" },
  { name: "Java", level: 80, skillLevel: "Semi Senior" },
  { name: "PHP", level: 40, skillLevel: "Trainee" },
  { name: "Lua", level: 80, skillLevel: "Junior" },
  { name: "Photoshop", level: 50, skillLevel: "Junior" },
  { name: "MySQL", level: 70, skillLevel: "Junior" },
  { name: "PostgreSql", level: 70, skillLevel: "Junior" },
  { name: "Base de datos relacional", level: 60, skillLevel: "Junior" },
];

const Skills = () => {
  return (
    <>
      <div className="section-title">
        <h2>Habilidades</h2>
      </div>
      <Row>
        {skillsData.map((skill, index) => (
          <Col lg={6} key={index}>
            <div>
              <span>
                {skill.name} <i className="float-end">{skill.level}%</i>
              </span>
              <ProgressBar striped variant="success" now={skill.level} />
              <div className="skill-level mt-2">
                <a>{skill.skillLevel}</a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Skills;
