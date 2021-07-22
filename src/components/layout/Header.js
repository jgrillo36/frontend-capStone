
import React from 'react';
import {
    Link
} from 'react-router-dom';
import fiskerText from '../../assets/Fisker_logo_white.png'
import {
    Navbar, 
    Nav, 
    Container, 
    NavDropdown,
} from 'react-bootstrap'
import '../../assets/css.css'


const Header = () => {
  return (
    <>
        <Navbar fixed="top" bg="transparent" expand="lg" z-index="99">
            <Container w-100>
                <Navbar.Brand id="navbarImage" href="/"><img src={fiskerText} height="20px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Header
