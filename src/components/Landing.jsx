import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { HomeNav } from './HomeNav';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
// import silver from './silver.png'
//import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Image from "react-bootstrap/Image";
// import "./homebackground.css";
import "./footer.css";
import Footer from "./Footer";
import swal from "sweetalert2";
import axios from "axios";

// import Navbar from "./Navbar";
// import
// import gold from './images/gold.jpeg';

function Landing() {
  useEffect(() => {}, []);

  const [custfirstName, setFirstName] = useState("");
  const [custlastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [custmobileNo, setMobileNo] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstname = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileNo = (e) => {
    setMobileNo(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const data = {
    custfirstName: custfirstName,
    custlastName: custlastName,
    email: email,
    custmobileNo: custmobileNo,
    message: message,
  };

  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobileNo("");
    setMessage("");
  };

  const onContact = (data) => {
    const url = "http://localhost:8080/ebanking/Employee/addAccount";
    axios.post(url, data).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            icon: "success",
            title: "Hurreh!!!",
            text: "Your message hai been successfully sent please check your mail",
          });

          clearFields();
        }
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Server Down",
          text: "Unable to insert data in the database please try again!!",
        });
      }
    );
  };

  const [errorfirstName, setErrorFirstName] = useState("");
  const [errorlastName, setErrorLastName] = useState("");
  const [erroremail, setErrorEmail] = useState("");
  const [errormobileNo, setErrorMobileNo] = useState("");
  const [errormessage, setErrorMessage] = useState("");

  function clearErrors() {

    document.getElementById("email").classList.remove("is-invalid");
    setErrorEmail("");

    document.getElementById("first_Name").classList.remove("is-invalid");
    setErrorFirstName("");

    document.getElementById("mobile_No").classList.remove("is-invalid");
    setErrorMobileNo("");

    document.getElementById("last_Name").classList.remove("is-invalid");
    setErrorLastName("");

    document.getElementById("message").classList.remove("is-invalid");
    setErrorMessage("");
  }

  const validate = () => {
    if (
      custfirstName.trim === "" ||
      custlastName.trim() === "" ||
      email.trim() === "" ||
      custmobileNo.trim() === "" ||
      message.trim() === ""
    ) {
      swal.fire("All fields are  required");
    } else if (
      custfirstName.search(/^[a-zA-Z ]*$/) < 0 ||
      custfirstName.length < 3 ||
      custfirstName.length > 40
    ) {
      document.getElementById("first_Name").classList.add("is-invalid");
      setErrorFirstName(
        "Please enter characters only and must have length of minimum 3 and maximum 30"
      );
    }
    /////////////////////
    else if (
      custlastName.search(/^[a-zA-Z ]*$/) < 0 ||
      custlastName.length < 3 ||
      custlastName.length > 40
    ) {
      document.getElementById("last_Name").classList.add("is-invalid");
      setErrorLastName(
        "Please enter characters only and must have length of minimum 3 and maximum 30"
      );
    }
    ///////////////////
    else if (custmobileNo === "" || custmobileNo.search(/^[789][0-9]{9}$/) < 0) {
      document.getElementById("mobile_No").classList.add("is-invalid");
      setErrorMobileNo("Enter valid Mobile Number");
    } else if (
      email === "" ||
      email.search(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) < 0
    ) {
      document.getElementById("email").classList.add("is-invalid");
      setErrorEmail("Enter valid Email ID");
      ///////////////////////////
    } else {
      onContact(data);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      {/* <HomeNav /> */}
      <div className="">
        <Navbar bg="light">
          <Navbar.Brand className="ml-5" href="#home">
            Transaction
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" bg-light>
              <Nav.Link className="ml-5" href="#home" bg-light>
                {" "}
                Home
              </Nav.Link>
              <Nav.Link className="ml-5" href="#about_us">
                About Us
              </Nav.Link>
              {/* <NavDropdown
                className="ml-5"
                title="Loan"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Home Loan
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Gold Loan
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Car Loan</NavDropdown.Item>
              </NavDropdown> */}
              {/* <NavDropdown
                className="ml-5"
                title="Card"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Silver</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Gold </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Platinium
                </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link className="ml-5">
                <Link to="/cardapply">Cards </Link>
              </Nav.Link>
              <Nav.Link className="ml-5">
                <Link to="/custhome">Savings </Link>
              </Nav.Link>
              <Nav.Link className="ml-5">
                <Link to="/welcome">Login </Link>
              </Nav.Link>
              <Nav.Link className="ml-5" href="#home_section">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div>
          <div className="container justify-content-end text-danger">
            <marquee
              attribute_name="attribute_value"
              attributes
              className="font-weight-bolder mt-1"
              sticky-lg-top
            >
              <h3>Your Trust is Our Responsibility !!!</h3>
            </marquee>
          </div>

          <Carousel>
            <Carousel.Item className="center mr-md-auto">
              <center>
                <img
                  className=" w-50 "
                  // body {{background-color: coral}}
                  // src={require("./silver.png")}
                  // src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Frupay%2Bdebit%2Bcard&psig=AOvVaw2lpzKJUE9HIuukwwY06EQw&ust=1649660497354000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCIi71rn2iPcCFQAAAAAdAAAAABAK"
                  // src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fakm-img-a-in.tosshub.com%2Fbusinesstoday%2Fimages%2Fstory%2F202204%2Frupay1200-sixteen_nine_0.jpg%3Fsize%3D948%3A533&imgrefurl=https%3A%2F%2Fwww.businesstoday.in%2Flatest%2Feconomy%2Fstory%2Findias-rupay-payment-card-launched-in-nepal-328386-2022-04-03&tbnid=PivwTtLdHuIDWM&vet=12ahUKEwiM-emw9oj3AhWYFLcAHdJMC-gQMygregUIARC1Ag..i&docid=sJpFIgE0GNHtXM&w=948&h=533&itg=1&q=rupay%20card%20india&ved=2ahUKEwiM-emw9oj3AhWYFLcAHdJMC-gQMygregUIARC1Ag"
                  // src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Fbusiness%2Findia-business%2Frupay-to-be-accepted-in-saudi%2Farticleshow%2F71827883.cms&psig=AOvVaw1pMJtcRxdvPPWRn6FDGO4d&ust=1649660856011000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOi519z3iPcCFQAAAAAdAAAAABAD"
                  src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fs3.ap-southeast-1.amazonaws.com%2Fimages.deccanchronicle.com%2Fdc-Cover-l7j3s3egqqleshsifuuanvo212-20181105005520.Medi.jpeg&imgrefurl=https%3A%2F%2Fwww.deccanchronicle.com%2Fnation%2Fcurrent-affairs%2F051118%2Frupay-cards-fail-to-strike-roots.html&tbnid=J4nTLAFVO_3PDM&vet=12ahUKEwj2hN7Jt4_3AhWo_jgGHeDXANQQMyhOegUIARCJAQ..i&docid=GYTGX-5WYy9ToM&w=800&h=448&q=rupay%20card%20image&ved=2ahUKEwj2hN7Jt4_3AhWo_jgGHeDXANQQMyhOegUIARCJAQ"
                  alt="First Slide"
                />
              </center>
              <Carousel.Caption>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <center>
                <img
                  className=" w-50"
                  // src={require("./platinum.png")}
                  src="https://media.istockphoto.com/photos/card-picture-id459229763?k=20&m=459229763&s=612x612&w=0&h=4M1KjE6o9MtarU1ZreHCRPDkFFCF9NKfHTeKWhYiCwo="
                  alt="First Slide"
                />
              </center>

              <Carousel.Caption>
                {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <center>
                <img
                  className=" w-50"
                  // src="data:image/jpeg;base64,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"
                  src="https://media.istockphoto.com/photos/mastercard-platinum-credit-cards-picture-id458072703?k=20&m=458072703&s=612x612&w=0&h=wMydSUe6Z0uhIbSECG9N9nbaTZKsjZoB8ry_3Flw1q8="
                  alt="First Slide"
                />
              </center>
              <Carousel.Caption>
                {/* <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="columns small-12 ml-4 ">
          <div className="top-section text-black">
            <p>
              <a
                id="footer_bofa_online_banking_service_agreement"
                href="/online-banking/service-agreement.go?request_locale=en_US"
                target="_blank"
              >
                Online Banking Service Agreement
              </a>
            </p>
            <p>
              Investing in securities involves risks, and there is always the
              potential of losing money when you invest in securities. You
              should review any planned financial transactions that may have tax
              or legal implications with your personal tax or legal advisor.
            </p>
            <p>
              Securities products are provided by Merrill Lynch, Pierce, Fenner
              &amp; Smith Incorporated (also referred to as "MLPF&amp;S", or
              "Merrill"), a registered broker-dealer, registered investment
              adviser,
              <a
                id="footer_sipc2"
                href="https://www.sipc.org/"
                className="spa-ui-layer-link spa-fn spa-ui-layer-modal-link"
                data-options='{"interstitialType":"leaving-site","interstitialBranding":"default","targetAction":"new-tab"}'
              >
                Member SIPC
                <span className="spa-ada-text ada-hidden">&nbsp;layer</span>
              </a>
              , and a wholly-owned subsidiary of Bank of America Corporation.
              MLPF&amp;S makes available certain investment products sponsored,
              managed, distributed or provided by companies that are affiliates
              of Bank of America Corporation.
            </p>
            SX CVBNK
          </div>
        </div>

        <section id="about_us">
          <div className="mt-5">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://about.bankofamerica.com/content/dam/about/images/slider/en/masthead-1-v3-gettyimages-1282319893.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://about.bankofamerica.com/content/dam/about/images/slider/en/masthead-2.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://about.bankofamerica.com/content/dam/about/images/slider/en/masthead-3.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>

        <section id="home_section">
          <div className="container-fluid mt-0">
            <div className="mt-0">
              <div className="   w-50  mx-auto  ml-0">
                <h4 className="title text-center mt-1 mb-5">Contact Us</h4>

                <form>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="first_Name"
                      name="first_Name"
                      placeholder="Enter Your First Name"
                      onChange={handleFirstname}
                      onFocus={clearErrors}
                      value={custfirstName}
                    />
                    <div class="invalid-feedback fs-6 fw-bold">
                      {errorfirstName}
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="last_Name"
                      name="last_Name"
                      placeholder="Enter Your Last Name"
                      onChange={handleFirstname}
                      onFocus={clearErrors}
                      value={custlastName}
                    />
                    <div class="invalid-feedback fs-6 fw-bold">
                      {errorlastName}
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail Address</label>
                    <label className="form-label">E-mail</label>
                    <input
                      id="email"
                      name="email"
                      onChange={handleEmail}
                      onFocus={clearErrors}
                      type="email"
                      value={email}
                      placeholder="please enter Primary mail id: example@org.com"
                      className="form-control bg-white "
                    />
                  </div>
                  <div class="invalid-feedback fs-6 fw-bold">{erroremail}</div>
                  <div className="form-group">
                    <input
                      id="mobile_No"
                      name="mobile_No"
                      onChange={handleMobileNo}
                      onFocus={clearErrors}
                      type="text"
                      maxLength="10"
                      value={custmobileNo}
                      placeholder="please enter Primary mobile number"
                      className="form-control bg-white "
                    />
                    <div class="invalid-feedback fs-6 fw-bold">
                      {errormobileNo}
                    </div>
                  </div>
                  Enter Your message
                  <div className="mt-3">
                    <textarea
                      name="message"
                      id="message"
                      cols="150"
                      rows="5"
                      style={{ resize: "none" }}
                    ></textarea>
                    <Button
                      variant="success"
                      type="reset"
                      onClick={validate}
                      size="md"
                      className="btn btn-success"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Landing;
