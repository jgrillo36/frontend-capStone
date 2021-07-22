
import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';
import fiskerText from '../../assets/Fisker_logo_white.png'
import fiskerTextBlack from '../../assets/Fisker_logo_black.png'
import {
    Navbar, 
    Nav, 
    Container, 
    NavDropdown,
} from 'react-bootstrap'
import '../../assets/css.css'


export default class Header2 extends Component{

    constructor(props){
        super(props);
        
        this.state ={
            prevScrollpos: window.pageYOffset, 
            visible: true
        }
    };

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll);
    }

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
                <Navbar.Brand id="navbarImage" href="/"><img src={fiskerTextBlack} height="20px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/store">Store</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        )
    }
}
        
        
        