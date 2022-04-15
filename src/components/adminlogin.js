import React, { useEffect, useState } from "react";
import { signin } from "../../actions/adminActions/adminActions";
import { Card } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert2";

const AdminLogin = (props) => {
  useEffect(() => {
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminSignIn = useSelector((store) => store.adminSignIn);
  const { loading, error, response } = adminSignIn;

  const dispatch = useDispatch();

  const onSignin = () => {
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (response && response.email === email) {
      sessionStorage.setItem("admin", JSON.stringify(response));
      props.history.push("/adminhome");
    } else if (response && response.status === "error") {
      alert.error(response.error);
      // swal.error(response.error, {
      //   autoClose: 10000,
      // });
      // toast.error("Error: Please enter correct Credentials!!!", {
      //   autoClose: 3000,
      // });
    } else if (error) {
      alert("Error: Please enter correct Credentials");
      // toast.error("Error: Please enter correct Credentials!!!", {
        // autoClose: 3000,
      // });
    }
  }, [loading, error, response]);

  return (
    <Card className={"border border-secondry bg-white "}>
      <Card.Header>Admin Login</Card.Header>
      <Card.Body>
        <div>
          <div className="form">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="form-control"
                placeholder="***** "
                type="password"
              ></input>
            </div>
            <div className="mb-3">
              <button onClick={onSignin} className="btn btn-success">
                Login
              </button>
            </div>
          </div>
          {loading && <div>waiting for response</div>}
        </div>
      </Card.Body>
    </Card>
  );
};

export default AdminLogin;
