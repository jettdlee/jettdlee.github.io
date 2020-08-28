import React from 'react';
import '../../styles/bio.css';
import { AboutBio } from '../../contents/about/bio';
import { Paragraph } from '../../components/partials/Paragraph';

function Bio() {
  return (
    <div id="bio">
      <img className="avatar-img" src="/images/avatar.svg" alt="" />
      <div className="about-summary">
        <Paragraph>
          <AboutBio />
        </Paragraph>
      </div>
    </div>
  );
}

export default Bio;