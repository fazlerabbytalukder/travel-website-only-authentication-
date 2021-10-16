import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home">Rabby</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/payment">Payments</Nav.Link>
                            <Nav.Link as={HashLink} to="/shipping">Shipping</Nav.Link>
                            <Nav.Link as={HashLink} to="/register">Register</Nav.Link>
                            <Nav.Link as={HashLink} to="/login">Login</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        </div>
    );
};

export default Header;