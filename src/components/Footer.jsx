import React from "react";
// import { Footer } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Footer = (props) => {
  return (
<div className="main-footer mt-4">
            <div className="container">
              <div className="row ">
                {/* Column1 */}
                <div className="col">
                  <Link to="/aboutus">
                    <a className="nav-link">
                      <h5 style={{ color: "white" }}>About Us</h5>
                    </a>
                  </Link>
                  <h6 className="list-unstyled">
                    <li>+91 8446938008</li>
                    <li>Pune, India</li>
                    <li>Katraj 411048</li>
                  </h6>
                </div>
                {/* Column2 */}

                <div className="col">
                  <Nav.Link href="#home_section">
                    <a className="nav-link">
                      <h5 style={{ color: "white" }}>Contact Us</h5>
                    </a>
                  </Nav.Link>
                  <h6 className="list-unstyled">
                    <li>Shubham Suryawanshi </li>
                    <li>+91 7774849951</li>
                    <li>shingan447@gmail.com</li>
                  </h6>
                </div>

                {/* Column3 */}
                <div className="col">
                  <Link to="/termsnconditions">
                    <a className="nav-link">
                      <h5 style={{ color: "white" }}>Terms & Conditions</h5>
                    </a>
                  </Link>
                  <h6 className="list-unstyled">
                    <li>Personal Information</li>
                    <li>Services overview</li>
                    <li>Eligibility</li>
                  </h6>
                </div>
                <div className="col">
                  <Link to="/privacypolicy">
                    <a className="nav-link">
                      <h5 style={{ color: "white" }}>Privacy Policy</h5>
                    </a>
                  </Link>
                  <h6 className="list-unstyled">
                    <li>Personal Information</li>
                    <li></li>
                    <li></li>
                  </h6>
                </div>
                {/* Column3 */}
                <div className="col">
                  <Link to="/faqs">
                    <a className="nav-link">
                      <h5 style={{ color: "white" }}>FAQs</h5>
                    </a>
                  </Link>
                  <h6 className="list-unstyled">
                    <li>Registration</li>
                    <li>Eligibility</li>
                    <li></li>
                  </h6>
                </div>
              </div>
            </div>
            <hr />
            <div className="row text-center">
              <p className="col-sm">
                &copy;{new Date().getFullYear()} THICC MEMES | All rights
                reserved | Terms Of Service | Privacy
              </p>
            </div>
          </div>
);
};

export default Footer;        