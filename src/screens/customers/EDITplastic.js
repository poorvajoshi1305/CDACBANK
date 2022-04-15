import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";
// import  from "../api/bootapi";
const EDITplastic = () => {

  return (
    <div
      class="mt-5 pt-5  min-vh-100 pb-5"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #019904, #00971d, #00942a, #009235, #008f3e)",
      }}
    >
      <h5 class="text-center text-white display-4 fw-bold mb-3 pt-5 pb-5">
        Update Request
      </h5>
      <form class="row g-3 w-50 m-auto bg-light p-5 fs-5  ">
        <div className="col-md-12 ">
          <label for="name" className="form-label fs-4">
            Request Id :-
          </label>
          <span className="fs-3 fw-bold text-grey">donatereq</span>
          <input
            style={{ border: "0px none" }}
            type="text"
            className=" bg-light fs-3 fw-bold text-black"
            id="reqid"
            name="reqid"
            
            disabled
          />
        </div>
        <div className="col-md-12 mb-3">
          <label for="name" className="form-label fs-4">
            Name :-
          </label>
          <input
            style={{ border: "0px none" }}
            type="text"
            className=" bg-light fs-3 fw-bold "
            id="name"
            name="name"
            
            disabled
          />
        </div>

        <div className="col-md-12 mb-3">
          <label for="email" className="form-label fs-4">
            Email :-
          </label>
          <input
            type="email"
            style={{ border: "0px none" }}
            className="bg-light fs-3 fw-bold "
            id="email"
            name="email"
            
            disabled
          />
        </div>

        <div className="col-12 mb-3">
          <label for="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Building no or Bunglow no./Apartment/Locality/Road or Landmark-Zipcode"
            name="address"
            // onChange={addressinp}
            // onFocus={clear}
            // value={uaddress}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label for="city" className="form-label">
            City
          </label>
          <div className="col-md-6 "></div>
          <select
            id="city"
            className="form-select"
            // id="city"
            name="city"
            // onFocus={clear}
            // onChange={cityinp}
            // value={ucity}
          >
            <option selected>Choose City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Banglore">Banglore</option>
          </select>
        </div>

        <div className="col-md-12 mb-1">
          <label for="plasticQty" className="form-label">
            Mention description of Plastic
          </label>
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            id="plasticQty"
            name="plasticQty"
            placeholder="Eg:-50 plastic bottles,20 kgs of plastic waste etc....."
            // onFocus={clear}
            // onChange={plasticinp}
            // value={uplasticQty}
          />
        </div>

        <div className="col-md-8 mb-1">
          <label for="ewasteQty" className="form-label">
            Mention description of Plastic E-Waste
          </label>
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            id="ewasteQty"
            name="ewasteQty"
            placeholder="Eg:-2 mobiles, 1 Televsion etc......"
            // onFocus={clear}
            // onChange={ewasteinp}
            // value={uewasteQty}
          />
        </div>
        <div className="col-md-6 text-center mt-5 mb-5  ">
          <Link to="/view" className="btn btn-primary btn-lg ps-5 pe-5 p-3">
            Back
          </Link>
        </div>
        <div className="col-md-6 text-center mt-5 mb-5  ">
          <input
            type="button"
            className="btn btn-primary btn-lg ps-5 pe-5 p-3"
            value="Update"
            // onClick={validate}
          />
        </div>
      </form>
    </div>
  );
};

export default EDITplastic;
