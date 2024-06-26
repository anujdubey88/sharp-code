import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2544458196745!2d75.773829!3d26.810788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7f6a8f78791%3A0xe45f0a3cf53ab987!2s44%2C%20Sanganer%2C%20Jaipur%2C%20Rajasthan%20302029%2C%20India!5e0!3m2!1sen!2sin!4v1659802586404!5m2!1sen!2sin";

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'SharpCode',
      subject: subject,
      message: message,
    };

    emailjs.send(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      templateParams,
      process.env.PUBLIC_KEY
    ).then(
      (response) => {
        toast.success("Message sent successfully!");
        console.log('SUCCESS!', response.status, response.text);
        // Clear form fields after successful submission
        setName('');
        setEmail('');
        setMessage('');
        setSubject('');
      },
      (error) => {
        toast.error("Failed to send message, please try again.");
        console.log('FAILED...', error);
      }
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
                <div><span><h4>EMAIL :</h4></span>
                <span><p>team@sharpcode.in</p></span></div>
                <div>
                <span><h4>Address :</h4></span>
                <span><p> 44-Sanganer Jaipur, Rajasthan-302029</p></span></div>
              </div>
            </div>
            <h3>Send your message</h3>
            <form onSubmit={sendEmail}>
              <div className="flexSB">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <textarea
                name="message"
                cols="30"
                rows="3"
                placeholder="Create a message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button type="submit" className="primary-btn primbtn">
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
