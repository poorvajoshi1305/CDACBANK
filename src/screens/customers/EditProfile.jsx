import React, { useEffect, useState } from "react";
import { CustRegister } from "../../actions/customerActions/customerAction.js";
// import { Link } from 'react-router-dom'
import { Card, Form, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProfile = (props) => {

    // const cust = JSON.parse(sessionStorage.getItem("customer"));
    // const [senderAccountNo, setSenderAccountNo] = useState(
    //   cust.savingsAccount.accountNumber

    // );

    const pass = JSON.parse(sessionStorage.getItem("customer"));
    const [password, setPassword] = useState(
      cust.customer.password
    );

    const mail = JSON.parse(sessionStorage.getItem("customer"));
    const [email, setEmail] = useState(
      cust.customer.email
    );

    const mobile = JSON.parse(sessionStorage.getItem("customer"));
    const [mobileNo, setMobileNo] = useState(
      cust.customer.mobileNo
    );

    const accNo = JSON.parse(sessionStorage.getItem("customer"));
    const [accountNo, setAccountNo] = useState(
      cust.savingsAccount.accountNumber
    );

    const ifscode= JSON.parse(sessionStorage.getItem("customer"));
    const [ifscCode, setIfsccode] = useState(
      cust.savingsAccount.ifsccode
    );

    const brName= JSON.parse(sessionStorage.getItem("customer"));
    const [branchName, setBranchName] = useState(
      cust.savingsAccount.ifsccode
    );

//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobileNo, setMobileNo] = useState("");
//   const [accountNumber, setAccountNumber] = useState("");
//   const [branchName, setBranchName] = useState("");
//   const [ifscCode, setIfsccode] = useState("");

  const dispatch = useDispatch();
  const CustRegisterStore = useSelector((store) => store.CustRegisterStore);
  const { loading, error, response } = CustRegisterStore;
  toast.configure();

  const clearForm = () => {
    setPassword("");
    setEmail("");
    setMobileNo("");
    setAccountNumber("");
    setBranchName("");
    setIfsccode("");
  };

  const onRegister = () => {
    dispatch(
      CustRegister(
        password,
        email,
        mobileNo,
        accountNumber,
        branchName,
        ifscCode
      )
    );
  };

  useEffect(() => {
    if (response && response === "Registered Succesfully..!!") 
    {
      // sessionStorage.setItem('token', response.data.token)
      // alert(
      //   "Your Registration is successfully completed !! Please activate your account through your registered Email"
      // );
      clearForm();
      toast.success(
        "Your Registration is Successfully Completed ..!! Please Activate your Account through your Registered Email",
        { autoClose: 10000 }
      );
      //<Redirect to="/custlogin" />;
      props.history.push("/custlogin");
    } 
    else if (response && response.status === "error")
    {
      alert(response.error);
    } 
    else if (error)
    {
      //alert("Error: Please check that you have filled form correctly !!!");
      toast.error("Please check that you have filled form correctly !!!",
      { autoClose: 5000 });
    }
  }, [loading, error, response]);

  return (
    <div>
      <Card className={"border border-secondry bg-white "}>
        <Card.Header>Registration</Card.Header>
        <Card.Body>
          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                maxLength="12"
                placeholder="******"
                value={pass}
                className="form-control bg-white "
              />
            </Form.Group>

            <Form.Group as={Col}>
              <label className="form-label">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                value={mail}
                placeholder="please enter Registered Email"
                className="form-control bg-white "
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">Mobile Number</label>
              <input
                onChange={(e) => {
                  setMobileNo(e.target.value);
                }}
                type="text"
                maxLength="10"
                value={mobile}
                placeholder="please enter Registered mobile number"
                className="form-control bg-white "
              />
            </Form.Group>

            <Form.Group as={Col}>
              <label className="form-label">Account Number</label>
              <input
                onChange={(e) => {
                  setAccountNumber(e.target.value);
                }}
                type="text"
                maxLength="10"
                value={accNo}
                placeholder="please enter Account number given by Bank"
                className="form-control bg-white "
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">Branch Name</label>
              <input
                onChange={(e) => {
                  setBranchName(e.target.value);
                }}
                type="text"
                value={brName}
                maxLength="20"
                placeholder="please enter your Branch Name"
                className="form-control bg-white "
              />
            </Form.Group>

            <Form.Group as={Col}>
              <label className="form-label">IFSC Code</label>
              <input
                onChange={(e) => {
                  setIfsccode(e.target.value);
                }}
                type="text"
                maxLength="11"
                value={ifscode}
                placeholder="please enter your banks IFSC code"
                className="form-control bg-white "
              />
            </Form.Group>
          </Form.Row>
        </Card.Body>
        <Card.Footer style={{ textAlign: "right" }}>
          <Button onClick={onRegister} size="md" className="btn btn-success">
            Register
          </Button>
        </Card.Footer>

        {loading && <div>waiting for response</div>}
        <div className="text-green">
          {/*Registerd Successfully, check your registerd email*/}
        </div>
      </Card>
    </div>
  );
};

export default EditProfile;
