import React from 'react';

function AboutImages(props) {
  const { imageId, srcPath, alt } = props;

  return(
    <span>
      <img className="about-images" id={imageId} src={srcPath} alt={alt} />
    </span>
  )
}

export default AboutImages;