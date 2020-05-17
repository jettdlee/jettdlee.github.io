import React from 'react';

function ExternalLinkIcon(props) {
  return (
    <a
      className="link-icon btn btn-outline-light"
      href={props.externalLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  )
}

export default ExternalLinkIcon;