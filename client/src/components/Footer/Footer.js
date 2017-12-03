import React from "react";
import "./Footer.css";

const Footer = () => (

  <footer className="container-fluid footer">

    <div className="row foot-row">
      <div className="col-sm-6 cs">
        <div className="cs-body">
          <p className="cs-title">CUSTOMER SERVICE</p>
          <p className="ic cs-num">
            <i className="fa fa-phone" aria-hidden="true"></i>
              (555) 555-5552
          </p>
          <hr className="this-line"/>
          <p className="ic cs-email">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <a href="mailto:mari.vlz13@gmail.com?subject=Check out this app&body=MAJiKBot is a banking chatbot that allows you to easily complete financial services. Check it out.">johndoe@email.com</a>
          </p>
          <hr className="this-line"/>
          <p className="ic cs-address">
            <i className="fa fa-home" aria-hidden="true"></i>
            9990 Richmond Ave, Houston TX
          </p>
          <hr className="this-line"/>
        </div>
      </div>
      <div className="col-sm-6 sit">
        <div className="sit-body">
          <p className="sit-title">STAY IN TOUCH</p>
          <div className="st sit-git">
            <img alt="github icon" className="img" src="/images/github.png"/>
          </div>
          <div className="st sit-li">
            <img alt="linkedin icon" className="img" src="/images/linkedin.png"/>
          </div>
          <div className="st sit-fb">
            <img alt="facebook icon" className="img" src="/images/fb.png"/>
          </div>
        </div>
      </div>
    </div>

    <small className="foot-text">
      &#169; MAJiKBot. All rights reserved.
    </small>
  </footer>


);

export default Footer;
