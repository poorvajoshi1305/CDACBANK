import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import swal from "sweetalert2";
import axios from "axios";

const CustomerFundTransfer = (props) => {


  useEffect(() => {
    document.title = "CustomerFundTransfer";
  }, []);

const acc = JSON.parse(sessionStorage.getItem("accountnumber"));

const [senderAccountNo, setSenderAccountNo] = useState(acc);
  const [reciverAccountNo, setReciverAccountNo] = useState("");
  const [amount, setAmount] = useState("");
  
  const handleReciverAccountNo = (e) => {
    setReciverAccountNo(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };


const onTransfer = async () => {

  const url = "http://localhost:8080/ebanking/transaction";
  const data = {
    senderAccountNo: senderAccountNo,
    reciverAccountNo: reciverAccountNo,
      amount: amount,
      // email: localStorage.getItem("user"),
  };
  
  const clearFields = () =>{
     setReciverAccountNo("");
     setAmount("");
  }
  await axios.post(url, data).then(
    (response) => {
      // clearFields();
        swal.fire({
          icon: "success",
          title: "congratulation!!",
          text: "Amount has been successfully tranfered to "+ `${response.data.reciverAccountNo}`,
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
          <Card.Header>Fund Transfer</Card.Header>
          <Card.Body>
            <div className="mb-3">
              <label className="form-label">Your Account Number</label>
              <input
                // onChange={(e) => {
                //   setSenderAccountNo(e.target.value);
                // }}
                className="form-control"
                value={sessionStorage.getItem("accountnumber")}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Beneficiary Account Number</label>
              <input
                // onChange={(e) => {
                //   setReciverAccountNo(e.target.value);
                // }}
                className="form-control"
                // value={reciverAccountNo}
                placeholder="0"
                onChange={handleReciverAccountNo}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Amount </label>
              <input
                // onChange={(e) => {
                //   setAmount(e.target.value);
                // }}
                className="form-control"
                // value={amount}
                placeholder="0"
                onChange={handleAmount}
                required
              />
            </div>
            <div className="mb-3">
              <button
                onClick={onTransfer}
                className="btn btn-success float-right"
              >
                Transfer
              </button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CustomerFundTransfer;
