import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ParticlesBackground from "../ParticlesBackground"; // ✅ Correct import

// ✅ Import images properly
import project1Image from "../../Assets/Projects/project11.jpg";
import project2Image from "../../Assets/Projects/project22.jpg";
import project3Image from "../../Assets/Projects/project11.jpg";
import project4Image from "../../Assets/Projects/project22.jpg";
import project5Image from "../../Assets/Projects/project11.jpg";
import project6Image from "../../Assets/Projects/project22.jpg";
import port from "../../Assets/Projects/port.jpg";
import sate from "../../Assets/Projects/sate.jpg";
import sie from "../../Assets/Projects/sie.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <ParticlesBackground /> {/* ✅ Particle effect */}
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sate}
              isBlog={false}
              title="Saterlon Engineering"
              description="Built a weather application using React.js and OpenWeather API to fetch real-time weather updates for any city."
              ghLink="https://github.com/prakash2004k/SaterlonEng"
              demoLink="https://saterlonengineering.onrender.com"
            />
          </Col>

          {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2Image}
              isBlog={false}
              title="A2B Clone"
              description="Created a Products page with a dynamic navbar and product cards featuring an enquiry button that redirects to email."
              ghLink="https://github.com/prakash2004k/A2B-CLONE_F"
              demoLink="https://a2bclone.netlify.app/"
            />
          </Col>

          {/* Project 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Portfolio Website"
              description="Designed a personal portfolio website to showcase my projects, skills, and achievements. Built using React.js and Bootstrap."
              ghLink="https://github.com/your-username/portfolio-website"
              demoLink="https://portfolio.example.com"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Project 4 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sie}
              isBlog={false}
              title="Staff Hub"
              description="Developed an e-commerce website with shopping cart functionality and payment integration using React.js and Firebase."
              ghLink=""
              demoLink=""
            />
          </Col>

          {/* Project 5 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project5Image}
              isBlog={false}
              title="Contact Us"
              description="Developed a responsive Contact Us page for SIET, integrated with email functionality to handle user inquiries efficiently."
              ghLink="https://github.com/prakash2004k/CONTACT-US-MAIL-RESPONSIVE"
              demoLink="https://contact-page-demo.example.com"
            />
          </Col>

        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project6Image}
              isBlog={false}
              title="Toll Booth System"
              description="Created a to-do list app with task management features like adding, updating, and deleting tasks. Built using React.js."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
