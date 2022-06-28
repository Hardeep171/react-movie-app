import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'
const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>

                    <Nav className="me-auto">

                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Movies</Nav.Link>
                        <Nav.Link href="#pricing">Favratuies</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar