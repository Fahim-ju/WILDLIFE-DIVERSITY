import React from "react";
import Detect from "./Detect";
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'


const Landing = () => {
  return (
    <div className="App">
      <div id="overlayer"></div>
      <Modal show={true}  size="lg" dialogClassName={`site-modal-ctl modal-dialog-mid`} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header bsPrefix="custom-modal-header">
          Footage Analysis Report
        </Modal.Header>
        <ModalBody as={<div style={{background: "red"}}>Hello</div>}></ModalBody>
        <Modal.Footer><div><button style={{margin: "10px", border:"none"}}>Close</button><button>Export to CSV</button></div></Modal.Footer>
      </Modal>

      <div className="loader">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <div className="site-wrap">
        <div class="navbar bg-top-bar">
          <div className="d-flex align-items-center ">
            <div className="site-logo logo-img">
              <img src={process.env.PUBLIC_URL + "/imgs/Logo.png"} alt="WildEye-Logo" height="50" width="50" />
            </div>
            <h5>&nbsp;&nbsp;&nbsp;MONITORING WILDLIFE DIVERSITY THROUGH CAMERA TRAPS</h5>
          </div>
          <span>&copy; MD FAHIMUL KARIM</span>
        </div>

        <br />
        <div className="bg-dark" id="glance-section" data-aos="fade">
          <div className="site-section" id="demo-section" data-aos="fade">
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
