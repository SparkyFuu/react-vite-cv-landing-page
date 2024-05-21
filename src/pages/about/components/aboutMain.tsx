import { Container } from "react-bootstrap";
import "../assets/about.css";
import AboutMe from "./aboutMe";
import Counts from "./counts";
import Skills from "./skills";
import Interests from "./interests";

const AboutMain = () => {
  return (
    <Container className="about-me shadow-lg p-3 mb-5 bg-black bg-opacity-75 rounded mt-5 aaaa">
      <AboutMe></AboutMe>
      <Counts></Counts>
      <Skills></Skills>
      <Interests></Interests>
    </Container>
  );
};

export default AboutMain;
