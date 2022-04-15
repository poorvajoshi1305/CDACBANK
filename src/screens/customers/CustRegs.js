import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import { Card, Form, Col, Button } from "react-bootstrap";
import swal from "sweetalert2";
import axios from "axios";

const CustRegs = (props) => {
  useEffect(() => {
    document.title = "CustRegs";
  }, []);

  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [branchName, setBranchName] = useState("");
  const [ifscCode, setIfsccode] = useState("");

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAccountNumber = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleMobileNo = (e) => {
    setMobileNo(e.target.value);
  };

  const handleBranchName = (e) => {
    setBranchName(e.target.value);
  };

  const handleIfscCode = (e) => {
    setIfsccode(e.target.value);
  };

  const clearFields = () => {
    setPassword("");
    setConfirmPassword("");
    setEmail("");
    setMobileNo("");
    setAccountNumber("");
    setBranchName("");
    setIfsccode("");
  };

  const data = {
    password: password,
    email: email,
    mobileNo: mobileNo,
    accountNumber: accountNumber,
    branchName: branchName,
    ifscCode: ifscCode,
  };

  const onRegister = (data) => {
    const url = "http://localhost:8080/ebanking/customer/register";
    axios.post(url, data).then(
      (response) => {
        swal.fire({
          icon: "success",
          title: "Hurreh!!!",
          text: "Rigestered successfully please your mail and click on provided link to activate your online banking account!!",
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

  const [errorpassword, setErrorPassword] = useState("");
  const [errorconfirmpassword, setErrorConfirmPassword] = useState("");
  const [erroremail, setErrorEmail] = useState("");
  const [errormobileNo, setErrorMobileNo] = useState("");
  const [erroraccountNumber, setErrorAccountNumber] = useState("");
  const [errorbranchName, setErrorBranchName] = useState("");
  const [errorifscCode, setErrorIfsccode] = useState("");

  function clearErrors() {
    document.getElementById("account_Number").classList.remove("is-invalid");
    setErrorAccountNumber("");

    document.getElementById("pass_word").classList.remove("is-invalid");
    setErrorPassword("");

    document.getElementById("confirmpass_word").classList.remove("is-invalid");
    setErrorConfirmPassword("");

    document.getElementById("ifsc_Code").classList.remove("is-invalid");
    setErrorIfsccode("");

    document.getElementById("branch_Name").classList.remove("is-invalid");
    setErrorBranchName("");

    document.getElementById("email").classList.remove("is-invalid");
    setErrorEmail("");

    document.getElementById("mobile_No").classList.remove("is-invalid");
    setErrorMobileNo("");
  }

  const validate = () => {
    if (
      password.trim() === "" ||
      confirmpassword.trim() === "" ||
      accountNumber.trim() === "" ||
      branchName.trim() === "" ||
      ifscCode.trim() === "" ||
      email.trim() === "" ||
      mobileNo.trim() === ""
    ) {
      swal.fire("All fields are  required");
    }

    /////////////////////
    else if (
      branchName.search(/^[a-zA-Z ]*$/) < 0 ||
      branchName.length < 3 ||
      branchName.length > 40
    ) {
      document.getElementById("branch_Name").classList.add("is-invalid");
      setErrorBranchName(
        "Please enter characters only and must have length of minimum 3 and maximum 30"
      );
    }
    ///////////////////
    else if (mobileNo === "" || mobileNo.search(/^[789][0-9]{9}$/) < 0) {
      document.getElementById("mobile_No").classList.add("is-invalid");
      setErrorMobileNo("Enter valid Mobile Number");
    }
    ///////////////////
    else if (ifscCode === "" || ifscCode.search(/^[0-9]{9}$/) < 0) {
      document.getElementById("ifsc_Code").classList.add("is-invalid");
      setErrorIfsccode("Enter valid Ifsc Code");
    }
    //////////////////////////////////////
    else if (accountNumber === "" || accountNumber.search(/^[0-9]{9}$/) < 0) {
      document.getElementById("account_Number").classList.add("is-invalid");
      setErrorAccountNumber("Enter valid Account Number");

      ///////////////////
    } else if (
      email === "" ||
      email.search(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) < 0
    ) {
      document.getElementById("email").classList.add("is-invalid");
      setErrorEmail("Enter valid Email ID");
    }
    ///////////////////////////
    else if (
      password === "" ||
      password.search(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
      ) < 0 ||
      password.length < 6
    ) {
      document.getElementById("pass_word").classList.add("is-invalid");
      setErrorPassword(
        "Enter a password with atleast 8 characters and must include 1 capital, 1 number and 1 special character"
      );
    } else if (confirmpassword !== confirmpassword) {
      document.getElementById("confirmpass_word").classList.add("is-invalid");
      setErrorConfirmPassword("Password mismatch.");
    } else {
      onRegister(data);
    }
  };

  useEffect(() => {}, []);
  return (
    <div>
      {/* <Card className={"border border-secondry bg-white "}>
        <Card.Header>Registration</Card.Header>
        <Card.Body> */}
        <div className="container py-5 mt-2">
          <div className="card border-0 shadow w-90 p-5 mx-auto">
            <h4 class="d-flex justify-content-center mt-2 mb-3">
              Customer Registration
            </h4>
            <hr />
          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">Email</label>
              <input
                id="email"
                name="email"
                onChange={handleEmail}
                onFocus={clearErrors}
                type="email"
                value={email}
                placeholder="please enter Registered Email"
                className="form-control bg-white "
              />
               <div class="invalid-feedback fs-6 fw-bold">
                {erroremail}
              </div>
            </Form.Group>
            <Form.Group as={Col}>
              <label className="form-label">Mobile Number</label>
              <input
                id="mobile_No"
                name="mobile_No"
                onChange={handleMobileNo}
                onFocus={clearErrors}
                type="text"
                maxLength="10"
                value={mobileNo}
                placeholder="please enter Registered mobile number"
                className="form-control bg-white "
              />
               <div class="invalid-feedback fs-6 fw-bold">
                {errormobileNo}
              </div>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            

            <Form.Group as={Col}>
              <label className="form-label">Account Number</label>
              <input
                id="account_Number"
                name="account_Number"
                onChange={handleAccountNumber}
                onFocus={clearErrors}
                type="text"
                maxLength="10"
                value={accountNumber}
                placeholder="please enter Account number given by Bank"
                className="form-control bg-white "
              />
               <div class="invalid-feedback fs-6 fw-bold">
                {erroraccountNumber}
              </div>
            </Form.Group>
            <Form.Group as={Col}>
              <label className="form-label">IFSC Code</label>
              <input
                id="ifsc_Code"
                name="ifsc_Code"
                onChange={handleIfscCode}
                onFocus={clearErrors}
                type="text"
                maxLength="11"
                value={ifscCode}
                placeholder="please enter your banks IFSC code"
                className="form-control bg-white "
              />
               <div class="invalid-feedback fs-6 fw-bold">
                {errorifscCode}
              </div>
            </Form.Group>
            <Form.Group as={Col}>
              <label className="form-label">Branch Name</label>
              <input
                id="branch_Name"
                name="branch_Name"
                onChange={handleBranchName}
                onFocus={clearErrors}
                type="text"
                value={branchName}
                maxLength="20"
                placeholder="please enter your Branch Name"
                className="form-control bg-white "
              />
               <div class="invalid-feedback fs-6 fw-bold">
                {errorbranchName}
              </div>
            </Form.Group>
          </Form.Row>
          {/* <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">Branch Name</label>
              <input
                id="branch_Name"
                name="branch_Name"
                onChange={handleBranchName}
                onFocus={clearErrors}
                type="text"
                value={branchName}
                maxLength="20"
                placeholder="please enter your Branch Name"
                className="form-control bg-white "
              />
               <div class="invalid-feedback fs-6 fw-bold">
                {errorbranchName}
              </div>
            </Form.Group>
            {/* <Form.Group as={Col}>
              
            </Form.Group> */}
            
          {/* </Form.Row>  */}
          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">Password</label>
              <input
                id="pass_word"
                name="pass_word"
                onChange={handlePassword}
                type="pass_word"
                onFocus={clearErrors}
                placeholder="******"
                value={password}
                className="form-control bg-white "
                required
              />
               <div class="invalid-feedback fs-6 fw-bold">
                {errorpassword}
              </div>
            </Form.Group>

            <Form.Group as={Col}>
              <label className="form-label">Confirm password</label>
              <input
                id="confirmpass_word"
                name="confirmpass_word"
                onChange={handleConfirmPassword}
                onFocus={clearErrors}
                type="confirmpass_word"
                value={confirmpassword}
                placeholder="please enter Registered Email"
                className="form-control bg-white "
              />
               <div class="invalid-feedback fs-6 fw-bold">
                {errorconfirmpassword}
              </div>
            </Form.Group>
          </Form.Row>
        {/* </Card.Body> */}
        {/* <Card.Footer style={{ textAlign: "right" }}> */}
        <div className="text-center mt-5">
          <Button onClick={validate} size="md" className="btn btn-success">
            Register
          </Button>
          </div>
        {/* </Card.Footer> */}
        {/* <div className="text-green"> */}
          {/*Registerd Successfully, check your registerd email*/}
        </div>
      {/* </Card> */}
    </div>
    </div>
  );
};

export default CustRegs;
