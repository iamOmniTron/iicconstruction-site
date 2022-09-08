import React from "react";
import Projects from "pages/Projects";
import About from "pages/About";
import ContactUs from "pages/ContactUs";
import Home1 from "pages/Home1";
import Services from "pages/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/services" element={<Services />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
