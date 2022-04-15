import React from "react";
import axios from "axios";
//import sweetalert from "sweetalert";
import swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Card, Form, Col, Button } from "react-bootstrap";
// import { useEffect } from "react";

const CardApply = () => {
  const [custfirstName, setFirstName] = useState("");
  const [custlastName, setLastName] = useState("");
  const [custmiddleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [custmobileNo, setMobileNo] = useState("");
  const [custaccountNumber, setAccountNumber] = useState("");
  const [custadharNo, setAdharNo] = useState("");
  const [custbranchName, setBranchName] = useState("");
  const [cardType, setCardType] = useState("");

    const handleFirstname = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleAccountNumber = (e) => {
        setAccountNumber(e.target.value);
    };

    const handleAdharNo = (e) => {
        setAdharNo(e.target.value);
    };

    const handleCardType = (e) => {
        setCardType(e.target.value);
    };

    const handleMobileNo = (e) => {
        setMobileNo(e.target.value);
    };

    const handleBranchName = (e) => {
        setBranchName(e.target.value);
    };

    const handleMiddleName = (e) => {
        setMiddleName(e.target.value);
    };
  useEffect(() => {
    // se();
  }, []);



    // const url = "http://localhost:8080/ebanking/card/cardapply";
    const data = {

        custfirstName: custfirstName,
        custmiddleName:  custmiddleName,
        custlastName: custlastName,
        custadharNo : custadharNo,
        custaccountNumber : custaccountNumber,
        email: email,   
        custmobileNo : custmobileNo,
        custbranchName : custbranchName,
        cardType: cardType
    };
   

    const clearFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMiddleName("");
    setBranchName("");
    setMobileNo("");
    setAccountNumber("");
    setAdharNo("");
};

const oncardApply = (data) => {
  const url = "http://localhost:8080/ebanking/card/cardapply";
  axios.post(url, data).then(
    (response) => {
      
        swal.fire({
          icon: "success",
          title: "Congratulations !!!",
          text: "You have applied for card successfully",
        });
      
        clearFields();
      // } else {
      //   swal.fire({
      //     icon: "error",
      //     title: "Oh no!!!",
      //     text: "Email is already Registered",
      //   });
      // }
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

const [erroraccountNumber, setErrorAccountNumber] = useState("");
  const [erroradharNo, setErrorAdharNo] = useState("");
  const [errorbranchName, setErrorBranchName] = useState("");
  const [errorfirstName, setErrorFirstName] = useState("");
  const [errormiddleName, setErrorMiddleName] = useState("");
  const [errorlastName, setErrorLastName] = useState("");
  const [erroremail, setErrorEmail] = useState("");
  const [errormobileNo, setErrorMobileNo] = useState("");
  const [errorcardType, setErrorCardType]=useState("");

function clearErrors() {
  document.getElementById("account_Number").classList.remove("is-invalid");
  setErrorAccountNumber("");

  document.getElementById("adhar_No").classList.remove("is-invalid");
  setErrorAdharNo("");

  document.getElementById("branch_Name").classList.remove("is-invalid");
  setErrorBranchName("");

  document.getElementById("email").classList.remove("is-invalid");
  setErrorEmail("");

  document.getElementById("first_Name").classList.remove("is-invalid");
  setErrorFirstName("");

  document.getElementById("middle_Name").classList.remove("is-invalid");
  setErrorMiddleName("");

  document.getElementById("mobile_No").classList.remove("is-invalid");
  setErrorMobileNo("");

  document.getElementById("last_Name").classList.remove("is-invalid");
  setErrorLastName("");  

  document.getElementById("card_Type").classList.remove("is-invalid");
  setErrorCardType("");  
}

const validate = () => {
  if (
    custaccountNumber.trim() === "" ||
    custadharNo.trim() === "" ||
    custbranchName.trim() === "" ||
    custfirstName.trim === "" ||
    custmiddleName.trim === "" ||
    custlastName.trim() === "" ||
    email.trim() === "" ||
    cardType.trim() === "" ||
    custmobileNo.trim() === ""
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
    custmiddleName.search(/^[a-zA-Z ]*$/) < 0 ||
    custmiddleName.length < 3 ||
    custmiddleName.length > 40
  ) {
    document.getElementById("middle_Name").classList.add("is-invalid");
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
  /////////////////////
  else if (
    custbranchName.search(/^[a-zA-Z ]*$/) < 0 ||
    custbranchName.length < 3 ||
    custbranchName.length > 40
  ) {
    document.getElementById("branch_Name").classList.add("is-invalid");
    setErrorBranchName(
      "Please enter characters only and must have length of minimum 3 and maximum 30"
    );
  }
  ///////////////////
  else if (custmobileNo === "" || custmobileNo.search(/^[789][0-9]{9}$/) < 0) {
    document.getElementById("mobile_No").classList.add("is-invalid");
    setErrorMobileNo("Enter valid Mobile Number");
  }
  ///////////////////
  else if (custadharNo === "" || custadharNo.search(/^[0-9]{9}$/) < 0) {
    document.getElementById("adhar_No").classList.add("is-invalid");
    setErrorAdharNo("Enter valid CIF Number");
  }
  
  //////////////////////////////////////
  else if (custaccountNumber === "" || custaccountNumber.search(/^[0-9]{9}$/) < 0) {
    document.getElementById("account_Number").classList.add("is-invalid");
    setErrorAccountNumber("Enter valid Account Number");
  
  } else if (
    email === "" ||
    email.search(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) < 0
  ) {
    document.getElementById("email").classList.add("is-invalid");
    setErrorEmail("Enter valid Email ID");}
    ///////////////////////////
    else if (cardType === "") {
      document.getElementById("city").classList.add("is-invalid");
      setErrorCardType("Enter City");
  } else {
    oncardApply(data);
  }
};

useEffect(() => {}, []);

  return (
    <>
    <div className="">
      {/* <section>

        </section> */}
      <div>
        <div class="card text-center mt-5 mb-5">
          <div class="card-header">Master Card</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#card_form" class="btn btn-primary">
              Apply Now
            </a>
          </div>
          {/* <div class="card-footer text-muted">
    2 days ago
  </div> */}
        </div>
        <div class="card text-center mt-5 mb-5 text-black">
          <div class="card-header">Visa Card</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#card_form" class="btn btn-primary">
              Apply Now
            </a>
          </div>
          {/* <div class="card-footer text-muted">
    2 days ago
  </div> */}
        </div>
        <div class="card text-center mt-5 mb-5">
          <div class="card-header">Rupay Card</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#card_form" class="btn btn-primary">
              Apply Now
            </a>
          </div>
          {/* <div class="card-footer text-muted">
    2 days ago
  </div> */}
        </div>
        </div>
      </div>
      <section id="card_form">
        <div className="container py-5">
          <div className="card border-0 shadow w-85 p-5 mx-auto">
            <h4 class="d-flex justify-content-center mt-3 mb-5">
              Application form for Card
            </h4>
            <form >
              {/* <div className="form-group"> */}
              <Form.Row>
                <Form.Group as={Col}>
                  <label htmlFor="custfirstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="first_Name"
                    name="first_Name"
                    value={custfirstName}
                    onChange={handleFirstname}
                    onFocus={clearErrors}
                    placeholder="Enter Your First Name"
                    required
                  />
                <div class="invalid-feedback fs-6 fw-bold">{errorfirstName}</div>
                </Form.Group>
                {/* </div> */}

                <Form.Group as={Col}>
                  <div className="form-group">
                    <label htmlFor="custmiddleName">middle Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="middle_Name"
                      name="middle_Name"
                      placeholder="Enter Your Middle Name"
                      value={custmiddleName}
                      onChange={handleMiddleName}
                      onFocus={clearErrors}
                      required
                    />
                    <div class="invalid-feedback fs-6 fw-bold">{errormiddleName}</div>
                  </div>
                </Form.Group>
                <Form.Group as={Col}>
                  {/* <div className="form-group"> */}
                  <label htmlFor="last_Name">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last_Name"
                    name="last_Name"
                    placeholder="Enter Your Last Name"
                    value={custlastName}
                    onChange={handleLastName}
                    onFocus={clearErrors}
                    required
                  />
                  <div class="invalid-feedback fs-6 fw-bold">{errorlastName}</div>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  {/* <div className="form-group"> */}
                  <label htmlFor="adhar_No">Adhar No.</label>
                  <input
                    type="text"
                    className="form-control"
                    id="adhar_No"
                    name="adhar_No"
                    placeholder="Enter Your Adhar no."
                    value={custadharNo}
                    onChange={handleAdharNo}
                    onFocus={clearErrors}
                    required
                  />
                 <div class="invalid-feedback fs-6 fw-bold">{erroradharNo}</div>
                </Form.Group>
                <Form.Group as={Col}>
                  {/* <div className="form-group"> */}
                  <label htmlFor="accountNumber">Account Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="account_Number"
                    name="account_Number"
                    placeholder="Enter Your account number Number"
                    value={custaccountNumber}
                    onChange={handleAccountNumber}
                    onFocus={clearErrors}
                    required
                  />
                  <div class="invalid-feedback fs-6 fw-bold">{erroraccountNumber}</div>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  {/* <div className="form-group"> */}
                  <label htmlFor="email">E-mail Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter Your E-mail Address"
                    value={email}
                    onChange={handleEmail}
                    onFocus={clearErrors}
                   required
                  />
                  <div class="invalid-feedback fs-6 fw-bold">{erroremail}</div>
                </Form.Group>
                <Form.Group as={Col}>
                  {/* <div className="form-group"> */}
                  <label htmlFor="mobile_No">mobileNo Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile_No"
                    name="mobile_No"
                    placeholder="Enter Your mobileNo Number"
                    value={custmobileNo}
                    onChange={handleMobileNo}
                    onFocus={clearErrors}
                    required
                  />
                  <div class="invalid-feedback fs-6 fw-bold">{errormobileNo}</div>
                </Form.Group>
              </Form.Row>

              <Form.Row>
              <Form.Group as={Col}>
                  <div className="form-group">
                    <label htmlFor="branch_Name">Branch Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="branch_Name"
                      name="branch_Name"
                      placeholder="Enter Your Middle Name"
                      value={custbranchName}
                      onChange={handleBranchName}
                      onFocus={clearErrors}
                      required
                    />
                    <div class="invalid-feedback fs-6 fw-bold">{errorbranchName}</div>
                  </div>
                </Form.Group>
                <Form.Group as={Col}>
                  
                  <div className="form-group">
                    <label htmlFor="card_Type">Card Type</label>
                    <select
                id="card_Type"
                className="form-select"
                name="card_Type"
                onChange={handleCardType}
                onFocus={clearErrors}
                value={cardType}
                required
              >
                <option value="">Select Card</option>
                <option value="Master">Master</option>
                <option value="Visa">Visa</option>
                <option value="Rupay">Rupay</option>
                
              </select>
              <div class="invalid-feedback fs-6 fw-bold">{errorcardType}</div>
            </div>
                  {/* </div> */}
                </Form.Group>
              </Form.Row>
              <div className="text-center mt-5">
                <button className="btn btn-primary text-center" onClick={validate} type="submit">
                  Submit
                </button>
              </div>

              <br />
              <br></br>

              {/* <a href="signin">Existing User? Login</a> */}
            </form>
          </div>
        </div>
      </section>
      {/* </div> */}
    {/* </div> */}
    </>
  );
};

export default CardApply;