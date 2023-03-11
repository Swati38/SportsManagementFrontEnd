import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BackgroundSlider from './BackgroundSlider'
import Footer from './Footer'
import Review from './Review'
const FrontPage = () => {
  return (
    <div>
      
      <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={{color:"green", fontSize:"30px", fontWeight:"1200"}}>Sport-Ease</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{fontSize:"25px"}}>
          
          </Nav>
          <Nav style={{fontSize:"25px"}}>
            <Nav.Link href="Booking">Book</Nav.Link>
            <Nav.Link href="contact">Contact Us</Nav.Link>
            <Nav.Link href="login">Login/Registeration</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div> 
    <BackgroundSlider/>
    </div>
 
<div>
    <Footer/>
</div>
    </div>
  )
}

export default FrontPage
