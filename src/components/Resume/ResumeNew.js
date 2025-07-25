// src/components/Resume/ResumeNew.js

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Prakash_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = width > 786 ? 1.5 : width > 480 ? 0.85 : 0.6;

  return (
    <div className="resume-section">
      <Container fluid>
        <Particle />

        {/* Top Download Button */}
        <Row className="justify-content-center my-3">
          <Col xs="auto">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              className="resume-button"
            >
              <AiOutlineDownload /> &nbsp;Download CV
            </Button>
          </Col>
        </Row>

        {/* PDF Preview */}
        <Row className="justify-content-center">
          <Col xs={12} md={10} className="text-center">
            <div className="pdf-container">
              <Document file={pdf}>
                <Page pageNumber={1} scale={scale} />
              </Document>
            </div>
          </Col>
        </Row>

        {/* Bottom Download Button */}
        <Row className="justify-content-center my-3">
          <Col xs="auto">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              className="resume-button"
            >
              <AiOutlineDownload /> &nbsp;Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
