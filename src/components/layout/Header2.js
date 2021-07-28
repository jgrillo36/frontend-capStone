
import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';
import fiskerTextBlack from '../../assets/Fisker_logo_black.png'
import '../../assets/css.css'
import {
    Navbar, 
    Nav, 
    Container, 
} from 'react-bootstrap'


export default class Header2 extends Component{

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
        <Navbar className={`headroom${this.state.visible ? "" : " headroom--hidden" }`} expand="lg">
            <Container w-100>
                <Navbar.Brand id="navbarImage" href="/"><img src={fiskerTextBlack} height="30px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="headroomLinks mr-auto">
                    <Link to="/signup"><b>Sign Up</b></Link> &nbsp;
                    <Link to="/login"><b>Login</b></Link> &nbsp;
                    <Link to="/store"><b>Store</b></Link> &nbsp;
                    <Link to="/about"><b>About</b></Link> &nbsp;
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        )
    }
}
        
        
        