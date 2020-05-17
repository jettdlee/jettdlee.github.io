import React from 'react';
import ExternalLinks from './navbar/ExternalLinks';
import NavbarButtons from './navbar/NavbarButtons';

import { Navbar, Nav } from 'react-bootstrap';
import { LinkedInIcon, TwitterIcon } from '../helpers/IconHelper';
import '../styles/Navbar.css';

class NavbarBanner extends React.Component {
  render() {
    return (
      <Navbar className="navbar" id="main_navbar">
        <Nav className="navbar-main-links">
          <Navbar.Brand className="navbar-home-link" href="/">
            Jet-Tsyn Lee
          </Navbar.Brand>
          <ExternalLinks />
        </Nav>
        <Nav className="justify-content-end">
          <NavbarButtons buttonText="About" buttonLink="/about" />
          <NavbarButtons buttonText="Experience" buttonLink="/experience" />
          <NavbarButtons buttonText="Portfolio" buttonLink="/portfolio" />
          <NavbarButtons buttonText="Contact" buttonLink="/contact" />
        </Nav>
      </Navbar>
    )
  }
}

export default NavbarBanner;