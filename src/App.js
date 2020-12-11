import React from "react";
import NavBar from "./components/profil/NavBar";
import Introduction from "./components/profil/Introduction";
import ProjectsList from "./components/profil/ProjectList";
import Contact from "./components/profil/Contact";
import Footer from "./components/profil/Footer";
import Actionlink from "./components/profil/Actionlink";  
import imgSrc from "./images/img.jpg";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.jpg";
import project4 from "./images/project4.png";

import "./App.css";

const navLinks = [
  {
    link: "About",
    href: "#about-me"
  },
  {
    link: "Project",
    href: "#projects"
  },
  {
    link: "Contact",
    href: "#about"
  }
];

const projects = [
  {
    projectName: "Mobile Chat App",
    imgSrc: project1
  },

  {
    projectName: "Connect Web Application",
    imgSrc: project2
  },
  {
    projectName: "E-commerce App",
    imgSrc: project3
  },
  {
    projectName: "Portfolio",
    imgSrc: project4
  }
];
const footerCopyRights = {
  name: "Jasser Heni ",
  year: 2020
};

function App() {
  return (
    <div>
      <NavBar navLinks={navLinks} name="Profile user" />
      
      <Introduction imgSrc={imgSrc} name="Profile user" />
      
      <ProjectsList listOfProjects={projects} />

      <Contact />
     
      <Actionlink alert="Profile of user" />
      
      <Footer copyrights={footerCopyRights} />
      
    </div>
  );
}

export default App;
