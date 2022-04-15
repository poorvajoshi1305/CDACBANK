import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import swal from "sweetalert2";
import axios from "axios";

const ChangePass = (props) => {
  useEffect(() => {
    document.title = "ChangePass";
  }, []);

  // const acc = JSON.parse(localStorage.getItem("customer"));

  const [password, setpassword] = useState(
    `{localStorage.getItem("customer")}`
  );
  const [newpassword, setNewPassword] = useState("");

  const handlepassword = (e) => {
    setpassword(e.target.value);
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const onUpdatePassword = async (customerId) => {
    const url = `http://localhost:8080/ebanking/customer/updatePassword/${sessionStorage.getItem(
      "customer_Id"
    )}`;
    const data = {
      password: password,
      newpassword: newpassword,
    };

    const clearFields = () => {
      setpassword("");
      setNewPassword("");
    };
    await axios.put(url, data).then(
      (response) => {
        // clearFields();
        swal.fire({
          icon: "success",
          title: "congratulation!!",
          text: "Password has been successfully updated!! ",
        });
        clearFields();
        // setReciverAccountNo("");
        // setAmount("");
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

  useEffect(() => {}, []);

  return (
    <div>
      <Container className="mb5">
        <Card className={"border border-secondry bg-white "}>
          <Card.Header>Change Password</Card.Header>
          <Card.Body className="p-5">
            
            <div className="mb-3">
              <label className="form-label"> New Password </label>
              <input
                onChange={handleNewPassword}
                className="form-control"
                type="text"
                placeholder="Enter Password"
                value={newpassword}
                required
              />
            </div>
            <div className="mb-3">
              <button
                onClick={onUpdatePassword}
                className="btn btn-success float-right"
              >
                Change
              </button>
            </div>
          </Card.Body>
        </Card>
      </Container>
      <div>
        {/* <button>
          <a className="btn btn-outline-secondary float-left" href="/custhome">
            Profile
          </a>
        </button> */}
      </div>
    </div>
  );
};
export default ChangePass;