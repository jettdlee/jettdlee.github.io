import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function HomeLink() {
  const HomeNavLink = styled(Link)`
    padding: 0.5rem;
    min-width: 5rem;
    font-size: 2rem !important;
    color: white !important;

    &:hover {
      text-decoration: none;
    }
  `

  return (
    <HomeNavLink className="navbar-home-link" to="/">
      Jet-Tsyn Lee
    </HomeNavLink>
  )
}

export default HomeLink;