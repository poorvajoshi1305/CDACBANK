import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = (props) => {
  return (
    <Navbar variant="dark" style={{background : "#2d50b6",height:"65px"}}>
      <Navbar.Brand href="/">E BANK</Navbar.Brand>

      <Nav className="mr-auto">
        <Link to="/home" className="nav-link"></Link>
      </Nav>
      <Nav className="navbar-right">
        <Link to="/adminlogin" className="nav-link">
          EmployeeLogin
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
