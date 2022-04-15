import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { LocalActivity } from "@material-ui/icons";

const CustProfile = (props) => {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    document.title = "index";
    if (sessionStorage.getItem("customerSession") == null) {
      window.location = "/custlogin";
    } else if (localStorage.getItem("customer") == null) {
      window.location = "./custlogin";
    }
  });


  let details;
      const getProfile = async() => {

        const url = `http://localhost:8080/ebanking/customer/getProfile/${sessionStorage.getItem("customer_Id")}`;
        
        // let response;
        const result = await axios.get(url);
        
        details=result.data;
          
      };
      useEffect(() => getProfile(), []);

      // const custDetails =sessionStorage.getItem("CustomerDetails")  
  // const getProfile = async (customerId) => {
  //   const url = "http://localhost:8080/customer/getProfile/${customerId}";
  //   const Data = {
  //     email: localStorage.getItem("customer"),

  //   }
  //     const result = await axios.get(url);

  //   const customer = result.data;
  //   // await axios.post(url, Data).then((response) => {
  //     // sessionStorage.setItem("firstName", response.data.firstName);
  //     // sessionStorage.setItem("lastName", response.data.lastName);
  //     // // sessionStorage.setItem("jobTitle", response.data.jobTitle);
  //     // sessionStorage.setItem("email", response.data.email);
  //     // // sessionStorage.setItem("website", response.data.website);
  //     // sessionStorage.setItem("mobileNo", response.data.mobileNo);
  //     // sessionStorage.setItem("summary", response.data.summary);
  //   // })
  // }

  // const getCustomer = async () => {
  //   const url = "http://localhost:8080/ebanking/Employee/customerList";
  //   const result = await axios.get(url);

  //   const customer = result.data;
  //   // const newList = [...list];
  //   // setList(newList);
  // };

  // useEffect(() => getCustomer(), []);

  // useEffect(() => getProfile(), []);

  // const getProfile = async () => {
  //   const url = "http://localhost:8080/customer/getProfile/${customerId}";
  //   const Data = {
  //     email: localStorage.getItem("customer"),
  //   };
  //   await axios.post(url, Data).then((response) => {
  //     sessionStorage.setItem("mobileNo", response.data.mobileNo);
  //     sessionStorage.setItem("customermiddleName", response.data.middleName);
  //     sessionStorage.setItem("customerlastName", response.data.firstName);
  //     sessionStorage.setItem("customerlastName", response.dataaccountBalance);
  //     sessionStorage.setItem("customerbranchName", response.databranchName);
  //     sessionStorage.setItem("customercifNo", response.datacifNo);
  //     sessionStorage.setItem("customerifscCode", response.dataifscCode);
     
  //   });
  // };

  useEffect(() => []);


  return (
    <div>
      <Container className="">
        {" "}
        <Card className={"border border-secondry bg-white "}>
          <Card.Header>Profile</Card.Header>
          <Card.Body>
            <h4>Personal Information</h4>
            <div>First Name : {sessionStorage.getItem("firstname")}</div>
            <div>Last Name : {sessionStorage.getItem("lastname")}</div>
            
            <div>Email : {sessionStorage.getItem("customer")}</div>
            
            <div>Mobile Number : {sessionStorage.getItem("mobile")}</div>
            
            <br />

            <h4>Account Details</h4>
            <div>Account Number : {sessionStorage.getItem("accountnumber")}</div>
            
            <div>Account Balance :{sessionStorage.getItem("accountbalance")}</div>
            <div>CIF Number :{sessionStorage.getItem("cif")}</div>
            <div>Branch Name :{sessionStorage.getItem("branchname")}</div>
            <div>IFSC Code :{sessionStorage.getItem("ifsc")}</div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CustProfile;
