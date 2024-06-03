import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setSignupData } from "../../slices/authSlice";
import { signUp } from "../../Services/Operations/apiAuth";
import axios from "axios";
import "./login.css";
import { courseOutline } from "../../dummydata";

export default function SubmissionForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [amount, setPrice] = useState(0);
  const currency = "INR";
  const receiptId = "sh@rpcode0288";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    domain: "",
  });

  const { firstName, lastName, email, password, confirmPassword, domain } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePayment = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch("http://localhost:4000/api/v2/order/payment",{
        method:"POST",
        body: JSON.stringify({
          amount,
          currency,
          receipt: receiptId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(response);
      const order= response.data
      console.log(response);
      const options = {
        "key": "rzp_test_sSPLa44klkrggI", // Enter the Key ID generated from the Dashboard
        amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency,
        "name": "SharCode",
        "description": "welcome to sharpcode",
        "image": process.env.PUBLIC_URL + "/images/logo.png",
        // "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": async function (response){
          const body ={
            ...response,
          }
          const validateRes=await fetch("http://localhost:4000/api/v2/order/validate",{
            method:"POST",
            body:JSON.stringify(body),
            headers:{
              "Content-Type":"application/json",
            }
          });
          const jsonres=await validateRes.json();
          console.log(jsonres);
        },
        "prefill": {
            "name": "SharpCode",
            "email": "team@sharpcode.in",
            "contact": "1234567890"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
    } catch (err) {
      toast.error("There is some error, please try again");
    }
  };

  const location = useLocation();
  const [courseDetails, setCourseDetails] = useState({});

  useEffect(() => {
    // Extract course details from URL parameters
    const searchParams = new URLSearchParams(location.search);
    const courseDetailsFromParams = {
      courseName: searchParams.get("courseName"),
      courseDescription: searchParams.get("courseDescription"),
      courseDuration: searchParams.get("courseDuration"),
      courseDetails: searchParams.get("courseDetails"),
      coursePrice: searchParams.get("coursePrice"),
      courseStartingDate: searchParams.get("courseStartingDate"),
    };
    setCourseDetails(courseDetailsFromParams);

    const selectedCourse = courseOutline.find(
      (course) => course.name === courseDetailsFromParams.courseName
    );
    if (selectedCourse) {
      setPrice(selectedCourse.price);
    }
  }, [location.search]);

  return (
    <div className="submission-login">
      <div className="submission-login__container">
        <div className="submission-course-details">
          <h3>{courseDetails.courseName}</h3>
          <div className="course-details">
            {courseOutline.map((val, index) => (
              val.name === courseDetails.courseName && (
                <div className="course-details" key={index}>
                  <div className="starting-date">
                    <div>
                      <span className="head">Starting Date: </span>
                      <span>{val?.StartDate}</span>
                    </div>
                    <div>
                      <span className="head">Duration: </span>
                      <span>{val?.Duration}</span>
                    </div>
                  </div>
                  <div>
                    <span className="head">Prerequisites: </span>
                    <span>{val?.Prerequisites}</span>
                  </div>
                  <div>
                    <span className="head">Learnings: </span>
                    <span>{val?.Learnings}</span>
                  </div>
                  <div>
                    <span className="head">Outcomes: </span>
                    <span>{val?.Outcomes}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
        <div className="submission-signup-form">
          <h1 className="submission-title">Register Here</h1>
          <form onSubmit={handlePayment} method="POST" className="submission-form__box">
            <div className="submission-form-control">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="submission-form-control">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="submission-form-control">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="submission-form-control">
              <input
                type="text"
                name="domain"
                placeholder="Domain of Internship"
                value={courseDetails.courseName}
                disabled={true}
                required
              />
            </div>
            <div className="submission-form-control">
              <button type="submit" className="submission-primary-btn btn">
                Proceed to Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
