import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <>
      <link href='https://fonts.googleapis.com/css?family=Roboto:500,900,100,300,700,400' rel='stylesheet' type='text/css'/>
<div className= "header">
  <h1>
    <img src="https://drive.google.com/uc?id=1I9soqyAVIJce0UdpjjmOwxG58PZFazyk" width="auto" height="60" alt=""/>
  </h1>
  <input type="checkbox" id="nav" />
  {/* <label for="nav" className="material-icons">dehaze</label> */}
</div>

<div className="about_us" style={{width:"100%"}}>
  <h2>OUR COMPANY</h2>
  <div className="mission">
    <span style={{color:'black',fontSize:"40px"}}><strong>MISSION</strong></span>
    <p>Our mission is to provide easy ground booking platform for players accross various cities  </p>
  </div>
  <span style={{color:'white',fontSize:"30px"}}>HISTORY</span>
  <p>SportEase Co.Ltd. has been established on 2023. We are team of 6 people working to provide uninterrupted ground booking platform. We provide players the exposure to join academies as well.</p>
  <img src="./logo/sportEaseLogo.jpg" style={{width: "700px"}} alt=""/>
  <span>OUR COMMITMENT</span>
  <p>
    Thank you for considering SportEase Co.Ltd. for booking the venues. Our vision and commitment to our customers is to deliver quality service and personal attention.
  </p>
</div>

<div className="footer">
  <div className="address">
    <span className="street">Main Office Address:</span>
    <span className="street">CDAC Innovation Park,Panchwati</span>
    <span className="street">Pashan,Pune</span>
    <span className="street">411008</span>
  </div>
  <div className="phone">
    <span>Phone: +91 9876543210</span>
    <span>Fax: +86 68782801</span>
  </div>
  <div className="email">

    <span className="email">Ask your question by email</span>
    <a className="email" href="mailto:sportEase@gmail.com"><i className="icon-email"></i>sportEase@gmail.com</a>
  </div>
  <div className="copyright">
    <span>© 2023 SportEase Co.Ltd</span>
  </div>
</div>
    </>
  )
}

export default AboutUs