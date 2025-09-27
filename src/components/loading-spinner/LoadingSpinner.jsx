import React from "react";
import "./Loading.css";

function LoadingSpinner(props) {
  return (
    <div
      className="spinner-container"
      style={{ height: props.height ? props.height : "" }}
    >
      <div className="loading-spinner"></div>
    </div>
  );
}

export default LoadingSpinner;
