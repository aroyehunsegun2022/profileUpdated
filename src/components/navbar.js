import react from "react";
import { useState } from "react"; 
import { Navbar, Container, Nav, Button, Modal } from "react-bootstrap";
import './navbar.css'
import phone from '../assets/phone.png'
import email from '../assets/email.png'
import { Routes, Link } from "react-router-dom";



// import { Modal} from 'react'

function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="light" variant="light">
      {/* modal */}

      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Me</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
          <a href="tel:+2348136811613"><span className='othertopics'><img src={phone} alt='phon' id='icon'/>    08136811613</span></a> <br/>
          <a href="mailto: aroyehunsegun@yahoo.com"><span className='othertopics'><img src={email} alt='emai' id='icon'/>    aroyehunsegun@yahoo.com</span> </a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Container>
        <Navbar.Brand href="#home">
          Aroyehun Segun | Full-Stack Developer
        </Navbar.Brand>
        <div id="navbar">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              style={{ color: "black", textDecoration: "underline" }}
            >
              Home
            </Nav.Link>
            {/* <Nav.Link href="portfolio"> <Link to='/portfolio'>Portfolio </Link>  </Nav.Link> */}
            <Nav.Link href="#pricing" onClick={handleShow} style={{ border: "1px solid black", borderRadius: "20px", color: "black", }} > 
             Contact Me  </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
