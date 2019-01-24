import React from 'react';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './navbar-style.css';

const NavagationBar = () => {
  const activeKey = (function findActiveKey(path) {
    if (path === "/" || path === "/about") {
      return 1;
    } else if (path === "/discover") {
      return 2;
    } else {
      return 3;
    }
  })(window.location.pathname);

  return (
    <Navbar collapseOnSelect id="NavbarComponent">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Pupster</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight activeKey={activeKey}>
          <NavItem eventKey={1} href="/">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </NavItem>
          <NavItem eventKey={2} href="/discover">
            <Link
              to="/discover"
              className={
                window.location.pathname === "/discover"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Discover
            </Link>
          </NavItem>
          <NavItem eventKey={3} href="/search">
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavagationBar;