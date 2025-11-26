import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading-page">
      <div className="modern-loader">
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
        <div className="loader-text">Loading...</div>
      </div>
    </div>
  );
};

export default Loading;