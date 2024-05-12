import React, { useState} from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import { toast } from "react-hot-toast"


const Contact = () => {

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');

  const templateParams={
    from_name:name,
    from_email:email,
    to_name:'SharpCode',
    message:message
  }
  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.393908365708!2d76.35820031451388!3d30.837560181461395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391aa6b83f6b0561%3A0x86391ff23c66b6e7!2sSant%20Longowal%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1659802586404!5m2!1sen!2sin";


    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(process.env.SERVICE_ID,process.env.TEMPLATE_ID,templateParams,process.env.PUBLIC_KEY)
        .then(
          (response) => {
            toast.success("Message is sent!!")
            console.log('SUCCESS!');
          },
          (error) => {
            toast.error("Please try again!!")
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <>
      <section className="contacts">
        <h1>Contact us</h1>
        <p className="contactsp">We're open for any suggestion or just to have a chat</p>
        <div className="container">
          <div className="contact-content">
            <div className="map-container">
              <iframe src={map} title="Google Map"></iframe>
            </div>
          </div>
          <div className="contact-form">
            <div className="contact-details">
              <div className="contact-box">
                <span><h4>EMAIL : </h4></span>
                <span><p>team@sharpcode.in</p></span>
              </div>
            </div>
            <h3>Send your message</h3>
            <form  onSubmit={sendEmail}>
              <div className="flexSB">
                <input type="text" name="user_name" placeholder="Name" onChange={(e)=> setName(e.target.value)} required />
                <input type="email" name="user_email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} required />
              </div>
              <input type="text" name="subject" placeholder="Subject" required />
              <textarea
                name="message"
                cols="30"
                rows="3"
                placeholder="Create a message here..."
                onChange={(e)=>setMessage(e.target.value)}
                required
              ></textarea>
              <button type="submit"  className="primary-btn primbtn">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
