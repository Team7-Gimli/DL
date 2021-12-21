import { useState } from 'react';
import { Navbar, Nav, Container, Rows, Col, Button } from 'react-bootstrap';


const NaviBar = () => {

  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Legs</Nav.Link>
            <Nav.Link href="/">Toes</Nav.Link>
            <Nav.Link href="/">Faces</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </Container>
  )
}

export default NaviBar;