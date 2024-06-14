import './reset.css'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
      <div className="nav">
        <Link to={"/"}>About Me</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <div className='home'>
        <div>Hi I am <span>Sion</span></div>
        <div>Front-End Dev <br /> Protfolio</div>
      </div>     
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
