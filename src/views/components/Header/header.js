import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";

export default function Header() {
   return (
      <Navbar expand='lg' className='navbar p-3 navbar-dark bg-success'>
         <Container>
            <Navbar.Brand style={{fontSize: "35px", color: "#FFB22C"}} href='#'>
               React Phú Devloper
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse style={{fontSize: "28px"}} id='basic-navbar-nav'>
               <Nav className='me-auto m-0 w-100'>
                  <Nav.Link href='#1'>Home</Nav.Link>
                  <Nav.Link href='#2'>User</Nav.Link>
                  <Nav.Link href='#3'>Admin</Nav.Link>
                  <Container className='flex-grow-1'></Container>
                  <NavDropdown className='ml-auto' title='Settings' id='basic-nav-dropdown'>
                     <NavDropdown.Item href='#'>View Profile</NavDropdown.Item>
                     <NavDropdown.Item href='#'>Login</NavDropdown.Item>
                     <NavDropdown.Item href='#'>Logout</NavDropdown.Item>
                  </NavDropdown>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}
