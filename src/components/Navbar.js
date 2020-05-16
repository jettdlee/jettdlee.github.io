import React from 'react';
import NavbarButtons from './partials/NavbarButtons';
import { Link } from 'react-router-dom';
import { LinkedInIcon, TwitterIcon } from '../helpers/IconHelper';
import '../styles/Navbar.css';

import ExternalLinkIcon from './partials/ExternalLinkIcon';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar" id="main_navbar">
        <div className="navbar-main-links">
          <Link className="navbar-home-link" to="/">
            Jet-Tsyn Lee
          </Link>
          <ExternalLinkIcon externalLink="https://www.linkedin.com/in/jet-tsyn-lee/">
            <LinkedInIcon />
          </ExternalLinkIcon>
          <ExternalLinkIcon externalLink="https://twitter.com/jettdlee">
            <TwitterIcon />
          </ExternalLinkIcon>
        </div>
        <div className="navbar-ul horizontal flex-row">
          <NavbarButtons buttonText="About" buttonLink="/about" />
          <NavbarButtons buttonText="Experience" buttonLink="/experience" />
          <NavbarButtons buttonText="Portfolio" buttonLink="/portfolio" />
          <NavbarButtons buttonText="Contact" buttonLink="/contact" />
        </div>
      </nav>
    )
  }
}

export default Navbar;
