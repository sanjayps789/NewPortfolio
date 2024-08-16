import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
function Header() {
  return (
    <div>
    <Navbar expand="lg" className="bg-black py-3 position-fixed w-100 z-1">
      <Container >
        <Navbar.Brand className='text-white  fs-4 '  href="#">
            <span className='fw-bold fs-1'>S</span>anjay
          <i className="fa-brands fa-github mx-2 fs-2"></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='text-white' id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link style={{fontSize:'19px'}} className='text-white  fw-medium'  href="#home">Home</Nav.Link>
            <Nav.Link style={{fontSize:'19px'}} className='text-white  fw-medium' href="#about">About</Nav.Link>
            <Nav.Link style={{fontSize:'19px'}} className='text-white  fw-medium' href="#works">Works</Nav.Link>
            <Nav.Link style={{fontSize:'19px'}} className='text-white  fw-medium' href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header