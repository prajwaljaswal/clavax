import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import StudentData from "./StudentData";

function Dashboard() {
  return (
    <div>
      <Card
        style={{
          width: "65rem",
          height: "25rem",
          marginLeft: "10rem",
          marginTop: "7rem",
          borderRadius: "15px",
        }}
      >
        <Card.Body>
          <div style={{ marginRight: "55rem", border: "solid" }}>
            Enrollement App
          </div>

          <Link to="/form">
            {" "}
            <button style={{ marginLeft: "45rem", marginTop: "1rem" }}>
              New Student
            </button>
          </Link>
          <StudentData></StudentData>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Dashboard;
