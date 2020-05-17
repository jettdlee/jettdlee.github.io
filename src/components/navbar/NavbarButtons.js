import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/NavbarButtons.css"

class NavbarButtons extends React.Component {
  render() {
    const { buttonText, buttonLink } = this.props; 

    return(
      <Link className="navbar-list-item btn btn-outline-light" to={buttonLink}>
        {buttonText}
      </Link>
    )
  }
}

export default NavbarButtons;