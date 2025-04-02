import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-header"></div>
      <div className="shimmer-table">
        {[...Array(5)].map((_, index) => (
          <div className="shimmer-row" key={index}>
            <div className="shimmer-cell"></div>
            <div className="shimmer-cell"></div>
            <div className="shimmer-cell"></div>
            <div className="shimmer-cell"></div>
            <div className="shimmer-cell"></div>
            <div className="shimmer-cell"></div>
            <div className="shimmer-cell"></div>
            <div className="shimmer-cell"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
