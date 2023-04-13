
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CartSidebar from "./CartSidebar";
import { useState } from "react";

const NavBar = () => {

  const [sidebar, setSidebar] = useState(false)
  const handleClose = () => {
    setSidebar(false)
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
        className="px-5"
      >
        <Navbar.Brand as={Link} to="/">
          E-commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/purchases">
              Purchases
            </Nav.Link>
            <Nav.Link onClick={() => setSidebar(true)}>Cart (sidebar)</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <CartSidebar
        show={sidebar}
        handleClose={handleClose}
      />
    </>
  );
};

export default NavBar;
