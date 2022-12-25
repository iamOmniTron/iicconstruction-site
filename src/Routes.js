import React from "react";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home1 from "./pages/Home1";
import Services from "./pages/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* commented cus of production build */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home1 />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
