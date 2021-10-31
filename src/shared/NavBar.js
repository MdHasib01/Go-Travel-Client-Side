import {
  faCoffee,
  faPlaneDeparture,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import "./Navbar.css";
const NavBar = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="mb-5">
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="logo" as={Link} to="/">
            <span className="primary-color">
              <FontAwesomeIcon icon={faPlaneDeparture} />
            </span>
            Go<span className="primary-color">Travel.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                activeStyle={{
                  fontWeight: "bold",
                  color: "#ff7c5b",
                }}
                as={NavLink}
                to="/home"
              >
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="home/path#tours">
                Our Tour
              </Nav.Link>
              <Nav.Link
                activeStyle={{
                  fontWeight: "bold",
                  color: "#ff7c5b",
                }}
                as={NavLink}
                to="/addservice"
              >
                Add Service
              </Nav.Link>
              <Nav.Link
                activeStyle={{
                  fontWeight: "bold",
                  color: "#ff7c5b",
                }}
                as={NavLink}
                to="/manage_tour"
              >
                Manage Tour
              </Nav.Link>
              <Nav.Link
                activeStyle={{
                  fontWeight: "bold",
                  color: "#ff7c5b",
                }}
                as={NavLink}
                to="/manage"
              >
                Manage Service
              </Nav.Link>
              <Nav.Link
                activeStyle={{
                  fontWeight: "bold",
                  color: "#ff7c5b",
                }}
                as={NavLink}
                to="/login"
              >
                Login
              </Nav.Link>
            </Nav>
            <Navbar.Text className="nav-login">
              <img src={user?.photoURL} alt="" />
              <a href="#login">{user?.displayName}</a>
              {user.displayName && (
                <a onClick={logOut}>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </a>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
