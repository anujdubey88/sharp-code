import React from "react"
// import { blog } from "../../../dummydata"
import "./footer.css"


const Footer = () => {
  const date = new Date()
  const copyrightYear = date.getFullYear();
  return (
    <div className="footer__container">
      <footer>
        <div className='container '>
          <div className='box logop'>
            <h1>SHARP-CODE</h1>
            <span>THINK SHARP CODE SMART</span>
            <p className="footp">Never let University interfere with your education</p>
            <div>
            <a href="https://www.linkedin.com/company/sharpcode01/" target="_blank" className='fab fa-linkedin icon'></a>
            <a href="https://www.instagram.com/sharp.code?igsh=cHVoeWFrOXFsbTl5" target="_blank" className='fab fa-instagram icon'></a></div>
            {/* <a className='fas fa-times-circle icon'></a> */}
          </div>

          <div className='box link'>
            <h3>Explore</h3>
            <span><a href="/abouthome"><li>About Us</li></a></span>
            <span><a href="/team"><li>Curriculum</li></a></span>
            <span><a href="/faq"><li>FAQ</li></a></span>
            <span><a href="/contact"><li>  Contact Us</li></a></span>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            
            <span><a href="/register"><li>Registration</li></a></span>
              <span><a href="/login"><li>Login</li></a></span>
              <span><a href="/update"><li>Update Details</li></a></span>
              <span><a href="/submission"><li>Task Submission</li></a></span>
          </div>
          <div className='box link'>
            <h3>About Us</h3>
            
            <span><a href="/privacy"><li>Privacy and Policy</li></a></span>
            <span><a href="/termandcondition"><li>Terms and conditions</li></a></span>
            <span><a href="/codeofconduct"><li>Code of Conduct</li></a></span>
            
          </div>
          <div className='box link'>
            <h3>Contact Us</h3>
            <span><a href="mailto:team@sharpcode.in"><li className='fa fa-envelope'>team@sharpcode.in</li></a></span>
            <span><a href="/contact"><li className="fa fa-home">Address 44-sanganer Jaipur, Rajasthan-302029</li></a></span>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©{copyrightYear} All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
