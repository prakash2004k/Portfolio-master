import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import ParticlesBackground from "../ParticlesBackground"; // Import animated background

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_15yc6fk";  
    const templateID = "template_kpvk5oi";
    const publicKey = "JfVG70iOZUpiuTV1B";

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setSuccessMessage("There was an error sending your message. Please try again.");
      });
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <ParticlesBackground /> {/* Animated Background */}
      <Container fluid className="about-section" style={{ position: "relative", zIndex: 2 }}>
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="text-center">Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="formName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="formName"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="formEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="formEmail"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="formMessage">Message</label>
                <textarea
                  className="form-control"
                  id="formMessage"
                  rows="3"
                  placeholder="Type your message here"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button variant="primary" type="submit" className="mt-3">
                Send Message
              </Button>
            </form>
            {successMessage && <p className="mt-3">{successMessage}</p>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
