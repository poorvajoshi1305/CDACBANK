import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import swal from "sweetalert2";
import axios from "axios";

const ChangeEmail = (props) => {
  
    useEffect(() => {
        document.title = "ChangeEmail";
      }, []);
    
      const getProfile = () => {

        const url = `http://localhost:8080/ebanking/customer/getProfile/${sessionStorage.getItem("customer_Id")}`;
        // const data = email
        axios
          .get(url)
          .then((response) => {

            
            }
          );
          
      };
    
      useEffect(() => getProfile(), []);
    const [email, setEmail] = useState(`{localStorage.getItem("customer")}`);
      const [newemail, setNewEmail] = useState("");
      
      
      const handleEmail = (e) => {
        setEmail(e.target.value);
      };
    
      const handleNewEmail = (e) => {
        setNewEmail(e.target.value);
      };
    
    
    const onUpdateEmail = async (customerId) => {
    
      const url = `http://localhost:8080/ebanking/customer/updateEmail/${sessionStorage.getItem("customer_Id")}`;
      const data = {
        // email: email,
        email: newemail,
        
          
      };
      
      const clearFields = () =>{
         setEmail("");
         setNewEmail("");
      }
      await axios.put(url, data).then(
        (response) => {
          // clearFields();
          
            swal.fire({
              icon: "success",
              title: "congratulation!!",
              text: "Email has been successfully updated!! ",
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
    
    useEffect(() => {
      
    }, []);

  return (
    <div>
      <Container className="">
        <Card className={"border border-secondry bg-white "}>
          <Card.Header>Change Email</Card.Header>
          <Card.Body>
          <div className="mb-3">
              <label className="form-label"> Previous Email </label>
              <input
                // onChange={(e) => {
                //   setSenderAccountNo(e.target.value);
                // }}
                className="form-control"
                value={localStorage.getItem("customer")}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label className="form-label"> New Email </label>
              <input
                onChange={handleNewEmail}
                className="form-control"
                type="email"
                placeholder="example@org.com"
                value={newemail}
                required
              />
            </div>
            <div className="mb-3">
              <button
                onClick={onUpdateEmail}
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
export default ChangeEmail;
