import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import NavBar from "./components/navbar/navbar";
import About from "./pages/about";
import Home from "./pages/home";
import Resume from "./pages/resume";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/cv" element={<Resume />} />
          <Route path="/servicios" element={<></>} />
          <Route path="/portafolio" element={<></>} />
          <Route path="/contacto" element={<></>} />
          <Route path="/descargar-cv" element={<></>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};

export default App;
