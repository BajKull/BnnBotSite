import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import DiscordIcon from "../icons/discord.png";
import LogoIcon from "../icons/logo.png";
import GithubIcon from "../icons/github.png";
import { Link } from "react-router-dom";

import "./Navbar.css";

export class Navigationbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>
            <img className="navbarImg navbarLogo" src={LogoIcon} alt="logo" />
          </Navbar.Brand>
          <Navbar.Brand> Bnn Bot </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/commands">
              Commands
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/BajKull/BnnBot">
              <img
                className="navbarImg navbarOptional"
                src={GithubIcon}
                alt="discord"
              />
            </Nav.Link>
            <Nav.Link href="https://discord.com/api/oauth2/authorize?client_id=699018077953851413&permissions=223296&scope=bot">
              <img
                className="navbarImg navbarOptional"
                src={DiscordIcon}
                alt="discord"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigationbar;
