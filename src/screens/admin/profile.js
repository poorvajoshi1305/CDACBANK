import React, { Component, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import axios from 'axios'

const Profile = () => {
  const admin = JSON.parse(sessionStorage.getItem('admin'))

  useEffect(() => {
    document.title = "index";
    if (sessionStorage.getItem("adminSession") == null) {
        window.location = "/adminlogin"
    } else if (localStorage.getItem("admin") == null) {
        window.location = "./adminlogin"
    }

})

// useEffect(() => getProfile(), []);
  return (
    <div>
      <Container className="mb-5">
        <Card className={'border border-secondry bg-white w-75'}>
          <Card.Header>Profile</Card.Header>
          <Card.Body className='p-5'>
            <h4>Personal Information</h4>
            {/* <div className="container py-5 mt-2">
          <div className="card border-0 shadow w-75 p-5 mx-auto">
            <h4 class="d-flex justify-content-center mt-3 mb-2">
              Admin Login
            </h4>
            <hr /> */}
            <div className='mt-3'>Name : 
              {localStorage.getItem("name")}
              </div>
            <div>Email : 
            {sessionStorage.getItem("email")}
              </div>
          </Card.Body>
        </Card>

      </Container>
    {/* </div> */}
    {/* </div> */}
    </div>
  )
};

export default Profile;
