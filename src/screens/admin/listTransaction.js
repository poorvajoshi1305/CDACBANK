import React, { useState, useEffect } from "react";
import axios from "axios";

import { Card, Table } from "react-bootstrap";
const ListTransaction = (props) => {

    const [list, setList] = useState([]);

    useEffect(() => {
        document.title = "index";
        if (sessionStorage.getItem("adminSession") == null) {
            window.location = "/adminlogin"
        } else if (localStorage.getItem("admin") == null) {
            window.location = "./adminlogin"
        }
    
    })
    
    const getCustomer = async () => {
        const url = "http://localhost:8080/ebanking/Employee/listOfTransactions";
        const result = await axios.get(url);
    
        const list = result.data;
        const newList = [...list];
        setList(newList);
      };
      useEffect(() => getCustomer(), []);

  return (
    <Card className={"border border-secondry bg-white "}>
      <Card.Header>List Of All Transaction</Card.Header>
      <Card.Body>
        <div>
          <Table bordered hover striped variant="white">
            <thead className="">
              <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Time</th>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Available Balance</th>
              </tr>
            </thead>
            <tbody>
            {list.map((item, index) =>{
                  return (
                    <tr>
                        {/* <div key={index}> */}
                      <td>{item.id}</td>
                      <td>{item.date}</td>
                      <td>{item.time}</td>
                      <td>{item.description}</td>
                      <td>{item.type}</td>
                      <td>{item.amount}</td>
                      <td>{item.availableBalance}</td>
                      {/* </div> */}
                    </tr>
                    
                  );
                })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ListTransaction;
