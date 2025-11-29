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
        <div className="loader-info">
          <p>Backend deployed on Render free version</p>
          <p>Will take ~50s to load, have patience 🙏</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
