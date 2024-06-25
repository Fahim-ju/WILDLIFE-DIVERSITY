import React from "react";
import Detect from "./Detect";

const Landing = () => {
  return (
    <div className="App">
      <div id="overlayer"></div>

      <div className="loader">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <div className="site-wrap">
        <div class="navbar">
          <div className="d-flex align-items-center">
            <div className="site-logo">
              <img src={process.env.PUBLIC_URL + "/imgs/Logo.png"} alt="WildEye-Logo" height="50" width="50" />
            </div>
            <h5>&nbsp;&nbsp;&nbsp;MONITORING WILDLIFE DIVERSITY THROUGH CAMERA TRAPS</h5>
          </div>
        </div>

        <br />
        <div className="" id="glance-section" data-aos="fade">
          <div className="site-section bg-dark" id="demo-section" data-aos="fade">
            <div style={{ minHeight: "100vh" }}>
              <Detect />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
