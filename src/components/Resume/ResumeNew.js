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
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Top Download Button */}
        <Row className="justify-content-center my-3">
          <Col xs="auto">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              className="w-100"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload /> &nbsp;Download CV
            </Button>
          </Col>
        </Row>

        {/* PDF Preview */}
        <Row className="justify-content-center">
          <Col xs={12} md={10} className="text-center">
            <Document file={pdf} className="d-flex justify-content-center">
              <Page
                pageNumber={1}
                scale={width > 786 ? 1.7 : 0.6}
              />
            </Document>
          </Col>
        </Row>

        {/* Bottom Download Button */}
        <Row className="justify-content-center my-3">
          <Col xs="auto">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              className="w-100"
              style={{ maxWidth: "250px" }}
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
