import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = (props) => {
  return (
    <Navbar variant="dark" style={{background : "rgb(53, 53, 174)",height:"65px"}}>

      {/* style={{ background: '#2E3B55' }} */}
      <Navbar.Brand href="/">CDAC BANK</Navbar.Brand>

      <Nav className="mr-auto">
        <Link to="/home" className="nav-link"></Link>
      </Nav>
      <Nav className="navbar-right">
      
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/adminlogin" className="nav-link">
          Employee Login
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
