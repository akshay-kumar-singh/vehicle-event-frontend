import React from "react";
import { useNavigate } from "react-router-dom";
import "./Diagrams.css";

const Diagrams = () => {
  const navigate = useNavigate();

  return (
    <div className="diagram-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        🔙 Back
      </button>

      <h1>📌 Sequence Diagram</h1>
      <img src="/sequence.png" alt="Sequence Diagram" className="diagram-img" />

      <h1>📌 Use Case Diagram</h1>
      <img src="/usecase.png" alt="Use Case Diagram" className="diagram-img" />
    </div>
  );
};

export default Diagrams;
