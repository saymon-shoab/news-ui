  
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../../App';

const Header = () => {
  const {loggedInUser, setLoggedInUser} = useContext(UserContext)

    return (
        <div>



<Navbar className="fixed-top" bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">
    <h1
        className="d-inline-block align-top"
        style={{ fontSize: "1.8rem", fontWeight: "bold" }}> 
       
        News<span className="dot">.com</span>
     </h1>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} className="mr-4" active style={{ fontWeight: "650" }} to="/">Home</Nav.Link>
        <Nav.Link as={Link} className="mr-4" active style={{ fontWeight: "650" }} to="/deals">Deals</Nav.Link>
        <Nav.Link as={Link} className="mr-4" active style={{ fontWeight: "650" }} to="/admin">Admin</Nav.Link>
      <Nav.Link as={Link} className="mr-4" active style={{ fontWeight: "650" }} to="/login">
        {loggedInUser.email ? `${loggedInUser.name.split(' ')[0]} / Logout` : 'Login'}
           </Nav.Link>

  
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    );
};

export default Header;