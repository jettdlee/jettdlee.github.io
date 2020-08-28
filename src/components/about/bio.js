import React from 'react';
import '../../styles/bio.css';
import { AboutBio } from '../../contents/about/bio';

function Bio() {
  return (
    <div id="bio">
      <img className="avatar-img" src="/images/avatar.svg" alt="" />
      <div className="about-summary">
        <p>
          <AboutBio />
        </p>
      </div>
    </div>
  );
}

export default Bio;