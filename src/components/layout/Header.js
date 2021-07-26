
import React, {Component} from 'react';
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
import fiskerLogoWhite from '../../assets/Fisker_logo_white.png'
import fiskerLogoBlack from '../../assets/Fisker_logo_black.png'

export default class Header extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true
        };
      }
    
      // Adds an event listener when the component is mount.
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      // Remove the event listener when the component is unmount.
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      // Hide or show the menu.
      handleScroll = () => {
        const { prevScrollpos } = this.state;
    
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
    
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
      };

    
    render(){

        return (

            <Navbar className={`headroom${this.state.visible ? "" : " headroom--hidden" }`} bg="transparent" expand="lg" z-index="99">
                <Container w-100>
                    <Navbar.Brand id="navbarImage" to="/"><img src={fiskerLogoBlack} height="20px" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/about">About&nbsp;</Link>
                        <Link to="/store">Store&nbsp;</Link>
                        <Link to="/signup">Sign Up&nbsp;</Link>
                        <Link to="/login">Login&nbsp;</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

