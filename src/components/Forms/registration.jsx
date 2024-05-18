import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setSignupData } from "../../slices/authSlice";
import { signUp } from "../../Services/Operations/apiAuth";
import "./login.css"; // Changed CSS file name to SubmissionForm.css
import { courseOutline } from "../../dummydata";

export default function SubmissionForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }

    const signupData = {
      ...formData,
    };

    try {
      dispatch(setSignupData(signupData));
      dispatch(
        signUp(
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          domain,
          navigate
        )
      );
    } catch (err) {
      toast.error("there is some error bhai>>", err.response.data.message);
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      domain: "",
    });
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
  }, [location.search]);

  return (
    <div className="submission-login">
      <div className="submission-login__container">
        <div className="submission-course-details">
          <h3>{courseDetails.courseName}</h3>
          <div className="couse-details">
          {courseOutline.map((val, index) => (
            val.name === courseDetails.courseName && (
              <div className="course-details" key={index}>
                <div className="starting-date">
                <div><span className="head">Starting Date : </span> <span>{val?.StartDate}</span></div>
                <div><span className="head">Duration : </span> <span>{val?.Duration}</span></div></div>
                <div><span className="head">Prerequisites : </span> <span>{val?.Prerequisites}</span></div>
                <div><span className="head">Learnings : </span> <span>{val?.Learnings}</span></div>
                <div><span className="head">Outcomes : </span> <span>{val?.Outcomes}</span></div>
              </div>
            )
          ))}
          </div>
        </div>
        <div className="submission-signup-form">
          <h1 className="submission-title">Register Here</h1>
          <form onSubmit={handleOnSubmit} method="POST" className="submission-form__box">
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
                placeholder="Last name"
                value={lastName}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="submission-form-control">
              <input
                type="text"
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
                disabled="true"
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
