import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Nav from "./sections/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import "./sections/Nav/NavStyles.module.css";

import ProjectHaver from "./pages/ProjectHaver";

function App() {
  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Experience' element={<Experience />} />
          <Route path='/Projects' element={<Projects />} />
            <Route path='/Projects/Haver' element={<ProjectHaver />} />
          {/* <Route path='/Projects/Emmas' element={<ProjectEmmas />} />
          <Route path='/Projects/Contoso' element={<ProjectContoso />} />
          <Route path='/Projects/Weather' element={<ProjectWeather />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
