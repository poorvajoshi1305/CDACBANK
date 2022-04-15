import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Table } from "react-bootstrap";

const TransactionHistory = (props) => {

  const customerId = sessionStorage.getItem("customer_Id");
useEffect(() => getHistory(), []);

  const [list, setList] = useState([]);


  const getHistory = async (customerId) => {
    const result = await  axios
      .get(
        `http://localhost:8080/ebanking/customer/getTransaction/${sessionStorage.getItem("customer_Id")}`
      )

    // const url = `http://localhost:8080/ebanking/customer/getTransaction/${customerId}`;
    // const result = await axios.get(url);
            
  const list = result.data;
  const newList = [...list];
  setList(newList);
};
useEffect(() => getHistory(), []);


  return (
      <>
    <Card className={"border border-secondry bg-white "}>
      <Card.Header>Transaction History</Card.Header>
      <Card.Body className="p-5">
        <div>
          <Table bordered hover striped variant="white">
            <thead className="">
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Available Balance</th>
              </tr>
            </thead>
            <tbody>
              {/* {response &&
                response.length > 0 &&
                response.map((list) => {  */}
                 {list.map((item, index) =>{
                   return (
                    <tr>
                      {/* <div key={index}> */}
                        <td>
                          {item.date}
                        </td>
                      <td>
                          {item.time}
                          </td>
                      <td>
                          {item.description}
                      </td>
                      <td>
                          {item.type}
                          </td>
                      <td>
                          {item.amount}
                          </td>
                      <td>
                          {item.availableBalance}
                          </td>
                          {/* </div> */}
                    </tr>
                   ); 
                 })} 
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
    </>
  );
};

export default TransactionHistory;
