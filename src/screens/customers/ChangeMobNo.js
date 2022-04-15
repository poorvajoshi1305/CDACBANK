import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import swal from "sweetalert2";
import axios from "axios";

const ChangeMobNo = (props) => {
  useEffect(() => {
    document.title = "ChangeMobNo";
  }, []);

  // const acc = JSON.parse(localStorage.getItem("customer"));

  const [mobileNo, setMobileNo] = useState(
    `{localStorage.getItem("customer")}`
  );
  const [newmobileNo, setNewMobileNo] = useState("");

  const handlemobileNo = (e) => {
    setMobileNo(e.target.value);
  };

  const handleNewMobileNo = (e) => {
    setNewMobileNo(e.target.value);
  };

  const onUpdateMobileNo = async (customerId) => {
    const url = `http://localhost:8080/ebanking/customer/updateMobileNumber/${sessionStorage.getItem(
      "customer_Id"
    )}`;
    const data = {
      mobileNo: mobileNo,
      newmobileNo: newmobileNo,
    };

    const clearFields = () => {
      setMobileNo("");
      setNewMobileNo("");
    };
    await axios.put(url, data).then(
      (response) => {
        // clearFields();
        swal.fire({
          icon: "success",
          title: "congratulation!!",
          text: "Mobile Number has been successfully updated!! ",
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
      <Container className="">
        <Card className={"border border-secondry bg-white "}>
          <Card.Header>Change mobile No</Card.Header>
          <Card.Body>
            <div className="mb-3">
              <label className="form-label"> Previous mobileNo </label>
              <input
                // onChange={(e) => {
                //   setSenderAccountNo(e.target.value);
                // }}
                className="form-control"
                value={sessionStorage.getItem("mobile")}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label className="form-label"> New mobileNo </label>
              <input
                onChange={handleNewMobileNo}
                className="form-control"
                type="text"
                placeholder="Enter Mobile Number"
                value={newmobileNo}
                required
              />
            </div>
            <div className="mb-3">
              <button
                onClick={onUpdateMobileNo}
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
export default ChangeMobNo;