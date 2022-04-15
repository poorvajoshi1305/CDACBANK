import React, { useState, useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert2";

const ListCustomer = (props) => {
  

//   useEffect(() => {}, );

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
    const url = "http://localhost:8080/ebanking/Employee/customerList";
    const result = await axios.get(url);

    const list = result.data;
    const newList = [...list];
    setList(newList);
  };

  useEffect(() => getCustomer(), []);
  const onDelete = async (customerId) => {
    await  axios
      .delete(
        `http://localhost:8080/ebanking/Employee/deleteCustomer/${customerId}`
      )
            .then(
        () => {
        //   console.log(response);
          swal.fire({
            icon: "success",
            title: "Hurreh!!!",
            text: "Customer deleted successfully",
          });
        },
        (error) => {
            console.log(error);
            swal.fire({
              icon: "error",
              title: "Server Down",
              text: "Unable to delete data from the database please try again!!",
            });
          }
      );



};

  return (
    <Card className={"border border-secondry bg-white "}>
      <Card.Header>List Of All Customers</Card.Header>
      <Card.Body>
        <div>
          <Table bordered hover striped variant="white">
            <thead className="">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email </th>
                <th>Mobile Number</th>
                <th>Account Number</th>
                <th>Account Balance</th>
                <th>Branch Name</th>
                <th>Net Banking Activation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* { */}
                 {/* list.map((item, index) => { */}
                     {/* {list.map((item, index) =>( */}
                    {/* //     <div key={index}> */}
                    {list.map((item, index) =>{
                  return (
                    //   <div key={index}>
                    <tr>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{item.mobileNo}</td>
                      <td>{item.savingsAccount.accountNumber}</td>
                      <td>{item.savingsAccount.accountBalance}</td>
                      <td>{item.savingsAccount.branchName}</td>
                      <td>{item.savingsAccount.isNetBankingActive}</td>
                      <td>
                        <button
                          size="md"
                          type="button"
                          class="btn btn-danger btn-sm"
                          onClick={() => {
                            onDelete(list.customerId);
                          }}
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                    // </div>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ListCustomer;
