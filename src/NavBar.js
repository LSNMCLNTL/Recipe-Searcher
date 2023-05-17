import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Navbar.Brand as={Link} to="/home">
          Recipe Haven
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/categories">
              Categories
            </Nav.Link>
            <Nav.Link as={Link} to="/area">
              Area
            </Nav.Link>
            <Nav.Link as={Link} to="/ingredients">
              Ingredients
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
