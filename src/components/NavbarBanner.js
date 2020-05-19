import React from 'react';
import ExternalLinks from './navbar/ExternalLinks';
import NavbarButtons from './navbar/NavbarButtons';
import HomeLink from './navbar/HomeLink';

import { Navbar, Nav } from 'react-bootstrap';
import '../styles/Navbar.css';

class NavbarBanner extends React.Component {
  render() {
    return (
      <Navbar className="navbar" id="main_navbar">
        <Nav className="navbar-main-links">
          <HomeLink />
          <ExternalLinks />
        </Nav>
        <Nav className="content-links">
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