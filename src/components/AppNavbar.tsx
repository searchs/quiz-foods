import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar: React.FC = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">FoodQuiz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                        <Nav.Link as={Link} to="/reset-password">Reset Password</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
