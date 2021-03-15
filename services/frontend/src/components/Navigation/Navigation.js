import React from 'react';
import './Navigation.css';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Dobby Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#orders">Orders</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
