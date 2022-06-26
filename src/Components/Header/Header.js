import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className='header-section '>
       <Navbar className='header-container' bg="" expand="lg">
    <Container className='nav-container px-md-5 '>
    <Navbar.Brand >
        <Link to='/' className='main-logo'><strong>Solayman</strong></Link>
    </Navbar.Brand>

    <Navbar.Toggle className='hambargar-btn' aria-controls="navbarScroll" />

    <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto right-li my-2 my-lg-0" style={{ maxHeight: '100px' }}navbarScroll>
        <Link to='/'>Home</Link>
        <a href="#aboutMe">About Me</a>
        <Link to='/'>Resume</Link>
        <a href='#myProject'>My Project</a>
        <a href='#contactMe'>Contact Me</a>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;