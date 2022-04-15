import React from "react";
// import './Login.css';
import { useState } from "react";
import axios from "axios";
// import './Login.css';
import swal from "sweetalert2";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Form } from "react-bootstrap";
// import NavigationBar from "../../components/NavigationBar";



const  AdminLogin = () => {



  useEffect(() => {
    document.title = "AdminLogin";
  }, []);

  const [validationError, setValidationError] = useState(false);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const [adminList, setadminList] = useState([]);


  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };



  const loginAdmin = () => {

    if (password === "" || email === "") {
      setValidationError(true);
      return;
    }





    const url = "http://localhost:8080/ebanking/Employee/login";
    const data = {

      email: email,
      password: password,
    };

    axios.post(url, data)
      .then((response) => {
        // if (response.data.role === "admin") {
        //   sessionStorage.setItem("adminname", response.data.firstName)
        //   const admindata = {
        //     firstName: response.data.firstName,
        //     lastName: response.data.lastName,
        //     email: response.data.email
        //   };
        //   sessionStorage.setItem("admindata", JSON.stringify(admindata));
        //   sessionStorage.setItem("adminSession", response.data.email);
        //   localStorage.setItem("admin_id", response.data.id);
        //   localStorage.setItem("admin", response.data.email);
        //   localStorage.setItem("role", response.data.role);
        //   // console.log(JSON.parse(sessionStorage.admin).id);
        //   window.location = "./landing";
        // }
        if (response.data.email === email) {
          window.location = "/adminhome"
          sessionStorage.setItem("adminSession", response.data.email);
          sessionStorage.setItem("email", response.data.email);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("admin", response.data.email);
          localStorage.setItem("name", response.data.name);
        }

      }).catch((error) => {
        swal("Bad Credentials");
      });

    setValidationError(false);
  };
  useEffect(() => {
        
}, []);

  return (
    <>
    {/* <NavigationBar /> */}
      <div className="container py-5 mt-2">
          <div className="card border-0 shadow w-50 p-5 mx-auto">
            <h4 class="d-flex justify-content-center mt-3 mb-5">
              Admin Login
            </h4>
                <form className="form-box px-3">
                <Form.Group>
                  <div className="form-input mb-3">
                    <label>Enter your Email</label>
                    <input type="email" name="" placeholder="Email Address" value={email} onChange={handleEmail}
                      className= "form-control"
                      // {...email === "" && validationError ? "border border-danger" : ""} 
                      />
                  </div>
                  </Form.Group>
                  <Form.Group>
                  <div className="form-input">
                  <label>Enter your Password</label>
                    <input type="password" name="" placeholder="Password" value={password} onChange={handlePassword}
                      className="form-control"
                      // {...password === "" && validationError ? "border border-danger" : ""} 
                      />
                  </div>
                  </Form.Group>
                  <div className="text-center mt-5">
                    <button type="submit" class="btn btn-primary text-uppercase" onClick={loginAdmin}>
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
      {/* </Card.Body> */}
    {/* </Card> */}
    </>

  );
}

export default AdminLogin;


