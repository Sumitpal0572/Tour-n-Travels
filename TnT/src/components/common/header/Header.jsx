import React from "react";
import {
  Container,
  Row,
  Navbar,
  Offcanvas,
  Button,
  Nav,
  NavDropdown,
  Form,
} from "react-bootstrap";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className="header-section">
      <Container>
        <Row>
          <Navbar expand="lg" className="bg-body-tertiary mb-3">
            <Navbar.Brand href="#">
              <NavLink to="/">WeekendsMonks</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header>
                <h1 className="logo">Weekendsmonks</h1>
                <span></span>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
