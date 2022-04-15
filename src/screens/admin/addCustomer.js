// import {} from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Card, Form, Col, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import swal from "sweetalert2";
import axios from "axios";
import NavigationBar from "../../components/NavigationBar";

const AddCustomer = (props) => {
  useEffect(() => {
    document.title = "AddCustomer";
  }, []);

  const [accountNumber, setAccountNumber] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [cifNo, setCIFNo] = useState("");
  const [branchName, setBranchName] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");

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

  const handleMobileNo = (e) => {
    setMobileNo(e.target.value);
  };

  const handleBranchName = (e) => {
    setBranchName(e.target.value);
  };

  const handleCIFNo = (e) => {
    setCIFNo(e.target.value);
  };

  const handleIfscCode = (e) => {
    setIfscCode(e.target.value);
  };

  const handleAccountBalance = (e) => {
    setAccountBalance(e.target.value);
  };

  const data = {
    accountNumber: accountNumber,
    accountBalance: accountBalance,
    cifNo: cifNo,
    branchName: branchName,
    ifscCode: ifscCode,
    firstName: firstName,
    lastName: lastName,
    email: email,
    mobileNo: mobileNo,
    customer: {
      firstName : firstName,
      lastName : lastName,
      email : email,
      mobileNo : mobileNo,
    },
  };

  const clearFields = () => {
    setAccountNumber("");
    setAccountBalance("");
    setCIFNo("");
    setBranchName("");
    setIfscCode("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobileNo("");
    // document.getElementById("tnc").checked = false;
  };

  const onaddCust = (data) => {
    const url = "http://localhost:8080/ebanking/Employee/addAccount";
    axios.post(url, data).then(
      (response) => {
        // if ((response.data.length == 0)&& (response && response.email !== email)) {
          // if (response &&  response.email !== email) {
            // if (response.data.length == 0){
          swal.fire({
            icon: "success",
            title: "Hurreh!!!",
            text: "Customer Added successfully",
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

  // Check Email
  // const checkEmail = (data) => {
  //   const url=""
  //   axios.post(url, data).then(
  //     (response) => {
  //       console.log(response);
  //       if ((response.data.length == 0)&&(response &&  response.email === email)) {
  //         // if (response &&  response.email === email) {
  //         onaddCust(cust);
  //         clearErrors();
  //         clearFields();
  //       } else {
  //         swal.fire({
  //           icon: "error",
  //           title: "Oh no!!!",
  //           text: "Email is already Registered",
  //         });
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //       swal.fire({
  //         icon: "error",
  //         title: "Oh no!",
  //         text: "Server is down",
  //       });
  //     }
  //   );
  // };

  const [erroraccountNumber, setErrorAccountNumber] = useState("");
  const [erroraccountBalance, setErrorAccountBalance] = useState("");
  const [errorcifNo, setErrorCIFNo] = useState("");
  const [errorbranchName, setErrorBranchName] = useState("");
  const [errorifscCode, setErrorIfscCode] = useState("");
  const [errorfirstName, setErrorFirstName] = useState("");
  const [errorlastName, setErrorLastName] = useState("");
  const [erroremail, setErrorEmail] = useState("");
  const [errormobileNo, setErrorMobileNo] = useState("");

  function clearErrors() {
    document.getElementById("account_Number").classList.remove("is-invalid");
    setErrorAccountNumber("");

    document.getElementById("account_Balance").classList.remove("is-invalid");
    setErrorAccountBalance("");

    document.getElementById("cif_No").classList.remove("is-invalid");
    setErrorCIFNo("");

    document.getElementById("branch_Name").classList.remove("is-invalid");
    setErrorBranchName("");

    document.getElementById("email").classList.remove("is-invalid");
    setErrorEmail("");

    document.getElementById("first_Name").classList.remove("is-invalid");
    setErrorFirstName("");

    document.getElementById("mobile_No").classList.remove("is-invalid");
    setErrorMobileNo("");

    document.getElementById("last_Name").classList.remove("is-invalid");
    setErrorLastName("");

    // document.getElementById("tnc").classList.remove("is-invalid");
    // setErrorIfscCode("");
  }

  const validate = () => {
    if (
      accountNumber.trim() === "" ||
      accountBalance === "" ||
      cifNo.trim() === "" ||
      branchName.trim() === "" ||
      ifscCode.trim() === "" ||
      firstName.trim === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      mobileNo.trim() === ""
    ) {
      swal.fire("All fields are  required");
    } else if (
      firstName.search(/^[a-zA-Z ]*$/) < 0 ||
      firstName.length < 3 ||
      firstName.length > 40
    ) {
      document.getElementById("first_Name").classList.add("is-invalid");
      setErrorFirstName(
        "Please enter characters only and must have length of minimum 3 and maximum 30"
      );
    }
    /////////////////////
    else if (
      lastName.search(/^[a-zA-Z ]*$/) < 0 ||
      lastName.length < 3 ||
      lastName.length > 40
    ) {
      document.getElementById("last_Name").classList.add("is-invalid");
      setErrorLastName(
        "Please enter characters only and must have length of minimum 3 and maximum 30"
      );
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
    else if (cifNo === "" || cifNo.search(/^[0-9]{9}$/) < 0) {
      document.getElementById("cif_No").classList.add("is-invalid");
      setErrorCIFNo("Enter valid CIF Number");
    }
    /////////////////////
    else if (ifscCode === "" || ifscCode.search(/^[0-9]{9}$/) < 0) {
      document.getElementById("ifsc_Code").classList.add("is-invalid");
      setErrorIfscCode("Enter valid Ifsc Code");
    }
    //////////////////////////////////////
    else if (accountNumber === "" || accountNumber.search(/^[0-9]{9}$/) < 0) {
      document.getElementById("account_Number").classList.add("is-invalid");
      setErrorAccountNumber("Enter valid Account Number");
    }
    ///////////////
    else if (accountBalance === "") {
      document.getElementById("account_Balance").classList.add("is-invalid");
      setErrorAccountBalance("Enter valid Account Balance");
      // || accountBalance.search(/^[0-9]{9}$/) < 0
      ////////////////////////////////////
    } else if (
      email === "" ||
      email.search(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) < 0
    ) {
      document.getElementById("email").classList.add("is-invalid");
      setErrorEmail("Enter valid Email ID");
      ///////////////////////////
    } else {
      onaddCust(data);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
    {/* <NavigationBar /> */}
    <div>
      <Card className={"border border-secondry bg-white "}>
        <Card.Header>Add New Customer</Card.Header>
        <Card.Body>
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
                placeholder="please enter numbers only"
                className="form-control bg-white "
              />
              <div class="invalid-feedback fs-6 fw-bold">
                {erroraccountNumber}
              </div>
            </Form.Group>

            <Form.Group as={Col}>
              <label className="form-label">First Name</label>
              <input
                id="first_Name"
                name="first_Name"
                onChange={handleFirstname}
                onFocus={clearErrors}
                type="text"
                maxLength="20"
                value={firstName}
                placeholder="please enter First Name only"
                className="form-control bg-white "
              />
              <div class="invalid-feedback fs-6 fw-bold">{errorfirstName}</div>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">Account Balance</label>
              <input
                id="account_Balance"
                name="account_Balance"
                onChange={handleAccountBalance}
                onFocus={clearErrors}
                type="text"
                maxLength="20"
                value={accountBalance}
                placeholder="please enter amount in number"
                className="form-control bg-white "
              />
              <div class="invalid-feedback fs-6 fw-bold">{erroraccountBalance}</div>
            </Form.Group>

            <Form.Group as={Col}>
              <label className="form-label">Last Name</label>
              <input
                id="last_Name"
                name="last_Name"
                onChange={handleLastName}
                onFocus={clearErrors}
                type="text"
                maxLength="20"
                value={lastName}
                placeholder="please enter Last Name only"
                className="form-control bg-white "
              />
              <div class="invalid-feedback fs-6 fw-bold">{errorlastName}</div>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">CIF Number</label>
              <input
                id="cif_No"
                name="cif_No"
                onChange={handleCIFNo}
                onFocus={clearErrors}
                type="text"
                maxLength="11"
                value={cifNo}
                placeholder="please enter 11 digit number"
                className="form-control bg-white "
              />
              <div class="invalid-feedback fs-6 fw-bold">{errorcifNo}</div>
            </Form.Group>

            <Form.Group as={Col}>
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
              <div class="invalid-feedback fs-6 fw-bold">{erroremail}</div>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">Branch Name</label>
              <input
                id="branch_Name"
                name="branch_Name"
                onChange={handleBranchName}
                onFocus={clearErrors}
                type="text"
                maxLength="20"
                value={branchName}
                placeholder="please enter branch name"
                className="form-control bg-white "
              />
              <div class="invalid-feedback fs-6 fw-bold">{errorbranchName}</div>
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
                placeholder="please enter Primary mobile number"
                className="form-control bg-white "
              />
              <div class="invalid-feedback fs-6 fw-bold">{errormobileNo}</div>
            </Form.Group>
          </Form.Row>

          <Form.Row>
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
                placeholder="please enter 11 character only"
                className="form-control bg-white "
                //className={'bg-white '}
              />
              <div class="invalid-feedback fs-6 fw-bold">{errorifscCode}</div>
            </Form.Group>
          </Form.Row>
        </Card.Body>
        <Card.Footer style={{ textAlign: "right" }}>
          <Button
            type="reset"
            onClick={validate}
            size="md"
            className="btn btn-success"
          >
            ADD
          </Button>
        </Card.Footer>

        {/* {adminAddCust.loading && <div>waiting for response</div>} */}
      </Card>
    </div>
    </>
  );
};

export default AddCustomer;
