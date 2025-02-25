import React from "react";
import { Row } from "react-bootstrap";

function LeetCode() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">LeetCode</strong> Stats
      </h1>
      <img
        src="https://leetcard.jacoblin.cool/cse_220065?theme=dark"
        alt="LeetCode Stats"
        style={{ width: "100%", maxWidth: "500px" }}
      />
    </Row>
  );
}

export default LeetCode;
