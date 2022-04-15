import React from "react";
import axios from "axios";
//import sweetalert from "sweetalert";
//import swal from "sweetalert";
import { useForm } from "react-hook-form";
//import { useEffect, usestate } from "react";
//import "./styles.css";
//import "bootstrap/dist/css/bootstrap.min.css";
//import se from "./se.js";
import { useEffect } from "react";
import { Button } from 'react-bootstrap';
import {textarea} from 'react-bootstrap'
function ContactUs() {
    useEffect(() => {
        //   se();
    }, []);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    //console.log(errors);
    const onSubmit = (data) => {
        console.log(data);

        // axios
        //   .post("http://localhost:8080/register", data)
        //   .then((response) => {
        //     swal(response.data);
        //     window.location.href = "/signin";
        //   })
        //   .catch((error) => {
        //     swal("something went wrong");
        //   });
    };

    // const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    // const emailIsUnique = async (email) => {
    //   await wait(1000);
    //   return email !== "someone@somewhere.com";
    // };

    return (
        <div className="container justify-content-end">

            <marquee attribute_name="attribute_value" attributes className="font-weight-bolder mt-5" sticky-lg-top>
                     Your Trust is Our Responsibility !!!
            </marquee>

          
            <div className="container-fluid mt-0">
                <div className="container mt-0">

                    <div className=" card border-0 shadow w-50 p-5 mx-auto  ml-0">
                        <h4 className="title text-center mt-0 mb-5">
                            Contact Us
                        </h4>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">

                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Enter Your First Name"
                                    {...register("firstName", {
                                        required: true,
                                        pattern: /[A-Za-z]{3}/,
                                        min: 4,
                                        max: 10,
                                    })}
                                />
                                {errors.firstName && errors.firstName.type === "required" && (
                                    <span role="alert" class="imp">
                                        *This field is required
                                    </span>
                                )}
                                {errors.firstName && errors.firstName.type === "pattern" && (
                                    <span role="alert" class="imp">
                                        *Invalid First Name
                                    </span>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Enter Your Last Name"
                                    {...register("lastName", {
                                        required: true,
                                        pattern: /[A-Za-z]{3}/,
                                        min: 4,
                                        max: 10,
                                    })}
                                />
                                {errors.lastName && errors.lastName.type === "required" && (
                                    <span role="alert" class="imp">
                                        *This field is required
                                    </span>
                                )}
                                {errors.lastName && errors.lastName.type === "pattern" && (
                                    <span role="alert" class="imp">
                                        *Invalid Last Name
                                    </span>
                                )}
                            </div>






                            <div className="form-group">
                                <label htmlFor="email">E-mail Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Enter Your E-mail Address"
                                    {...register("email", {
                                        required: true,
                                        //validate: emailIsUnique,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    })}
                                />
                                {errors.email && errors.email.type === "required" && (
                                    <span role="alert" class="imp">
                                        *This field is required
                                    </span>
                                )}
                                {errors.email && errors.email.type === "validate" && (
                                    <div className="error" class="imp">
                                        This email address already exists
                                    </div>
                                )}
                                {errors.email && errors.email.type === "pattern" && (
                                    <div className="error" class="imp">
                                        *Invalid email address
                                    </div>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="mobileNo">mobileNo Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="mobileNo"
                                    name="mobileNo"
                                    placeholder="Enter Your mobileNo Number"
                                    {...register("mobileNo", {
                                        required: true,
                                        minLength: 8,
                                        maxLength: 12,
                                    })}
                                />
                                {errors.mobileNo && errors.mobileNo.type === "required" && (
                                    <span role="alert" class="imp">
                                        *This field is required
                                    </span>
                                )}
                                {errors.mobileNo && errors.mobileNo.type === "minLength" && (
                                    <span role="alert" class="imp">
                                        *Invalid mobileNo no minLength:10 maxLength: 12
                                    </span>
                                )}
                            </div>


                            <div className="mt-3">
                                Enter Your message
                                <textarea  disable name="" id="" cols="70" rows="5"></textarea>
                            </div>

                            <Button variant="success">Submit</Button>




                            {/* <-- <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className="form-control"
                  className="form-check-input"
                  type="checkbox"
                  id="tnc"
                  name="tnc"
                  {...register("tnc", { required: true })}
                />
                {errors.tnc && errors.tnc.type === "required" && (
                  <span role="alert" class="imp">
                    *This field is required
                  </span>
                )} 
                <label className="form-check-label" htmlFor="tnc">
                  I agree all terms & conditions
                </label>
              </div>
            </div> --> */}



                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;