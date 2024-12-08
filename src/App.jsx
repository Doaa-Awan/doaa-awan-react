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
        </Routes>
      </div>
    </>
  );
}

export default App;
