import React from "react";
// import './Login.css';
import { useState } from "react";
import axios from "axios";
// import './Login.css';
import swal from "sweetalert2";
import { Card, Form } from "react-bootstrap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { Card,Form } from "react-bootstrap";

const Custlogin = () => {
  useEffect(() => {
    document.title = "Custlogin";
  }, []);

  const [validationError, setValidationError] = useState(false);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [customerList, setcustomerList] = useState([]);

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const loginCust = () => {
    if (password === "" || email === "") {
      setValidationError(true);
      return;
    }

    const url = "http://localhost:8080/ebanking/customer/login";
    const data = {
      email: email,
      password: password,
    };

    axios
      .post(url, data)
      .then((response) => {
        if (response.data.email === email) {
          window.location = "/custhome";
          sessionStorage.setItem("customerSession", response.data.email);
          //   sessionStorage.setItem("customername", response.data.firstName);
          localStorage.setItem("customer_Id", response.data.customerId);
          localStorage.setItem("customer", response.data.email);
          localStorage.setItem("firstname", response.data.firstName);
          localStorage.setItem(
            "accountnumber",
            response.data.savingsAccount.accountNumber
          );
          sessionStorage.setItem("customer_Id", response.data.customerId);
          sessionStorage.setItem("customer", response.data.email);
          sessionStorage.setItem("firstname", response.data.firstName);
          sessionStorage.setItem(
            "accountnumber",
            response.data.savingsAccount.accountNumber
          );
          // localStorage.setItem("lastname", response.data.lastName);
          // localStorage.setItem("mobile", response.data.mobileNo);
          // localStorage.setItem("accountbalance", response.data.savingsAccount.accountBalance);
          // localStorage.setItem("branchname", response.data.savingsAccount.branchName);
          // localStorage.setItem("ifsc", response.data.savingsAccount.ifscCode);
          // localStorage.setItem("cif", response.data.savingsAccount.cifNo);
          sessionStorage.setItem("lastname", response.data.lastName);
          sessionStorage.setItem("mobile", response.data.mobileNo);
          sessionStorage.setItem(
            "accountbalance",
            response.data.savingsAccount.accountBalance
          );
          sessionStorage.setItem(
            "branchname",
            response.data.savingsAccount.branchName
          );
          sessionStorage.setItem("ifsc", response.data.savingsAccount.ifscCode);
          sessionStorage.setItem("cif", response.data.savingsAccount.cifNo);
        }
      })
      .catch((error) => {
        swal("Bad Credentials");
      });

    setValidationError(false);
  };
  useEffect(() => {}, []);

  return (
    <div className="container py-5 mt-2">
          <div className="card border-0 shadow w-50 p-5 mx-auto">
            <h4 class="d-flex justify-content-center mt-3 mb-5">
              Customer Login
            </h4>
        
          {/* <div className="form"> */}
          <form className="form-box px-3">
          <Form.Group>
            <div className="form-input">
            <label>Enter your Email</label>
              <input
                type="email"
                name=""
                placeholder="Email Address"
                value={email}
                onChange={handleEmail}
                className="form-control"
                required
              />
            </div>
            </Form.Group>
            <Form.Group>
            <div className="form-input">
            <label>Enter your Password</label>
              <input
                type="password"
                name=""
                placeholder="Password"
                value={password}
                onChange={handlePassword}
                className="form-control"
                required
              />
            </div>
            </Form.Group>
            <div class="text-center mt-5">
              <button
                type="submit"
                class="btn btn-primary text-uppercase"
                onClick={loginCust}
              >
                Login
              </button>
            </div>
          </form>
        </div>
        </div>
        
  );
};
export default Custlogin;
