import React from "react";
import "./loading.css";
import loader from "../../../src/loader.gif";
const Loading = () => {
  return (
    <div className="loading-page">
      {/* <div className="loading"></div> */}
      <img src={loader} alt="Loading..." className="loader-svg" />
    </div>
  );
};

export default Loading;
