// LoadingOverlay.js

import React from "react";
import "./styles/LoadingOverlay.css"; // Add styles for the loading overlay

const LoadingOverlay = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingOverlay;
