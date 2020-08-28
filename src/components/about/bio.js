import React from 'react';
import '../../styles/bio.css';

function Bio() {
  return (
    <div id="bio">
      <img className="avatar-img" src="/images/avatar.svg" alt="" />
      <div className="about-summary">
        <p>
          Hello. I'm a Back-end developer based in Liverpool, UK. Masters in
          Computer Science in University of Liverpool and I'm currently coding
          as a Ruby on Rails developer for Yozu Ltd, Liverpool.
        </p>
      </div>
    </div>
  );
}

export default Bio;