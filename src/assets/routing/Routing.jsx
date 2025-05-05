import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Project from "../../pages/project/project/Project";
import Contact from "../../pages/contact/Contact";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Routing;
