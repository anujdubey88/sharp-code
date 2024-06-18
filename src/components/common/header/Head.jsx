import React from "react"
// import Header from "./Header"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
        <a href="/"><img
            style={{ height: "5rem" }}
            src="./images/logo/logo.png"
            alt="error"
          /></a>
          <div className="logo">
              <span className="sharpcodehead">SHARP-CODE</span>
              <span>Think Sharp, Code Smart</span>
            </div>

          <div className='social'>
            <a href="https://www.linkedin.com/company/sharpcode01/"><i className='fab fa-linkedin icon'></i></a>
            <a href="https://www.instagram.com/sharp.code?igsh=cHVoeWFrOXFsbTl5"><i className='fab fa-instagram icon'></i></a>
            {/* <i className="fa-brands fa-x-twitter" ></i>
            <i className='fab fa-linkedin icon'></i> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
