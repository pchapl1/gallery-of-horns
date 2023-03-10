
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "./Header.css";

class Header extends React.Component {

    render() {
        return (

                <Navbar bg="light" expand="lg">
                <Container>
                  <Navbar.Brand href="#home">Gallery of Horns</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    {/* <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">Link</Nav.Link>
                    </Nav> */}
                  </Navbar.Collapse>
                </Container>
              </Navbar>
        )
    }
}
 
export default Header;