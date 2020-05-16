import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLaptopCode, faEllipsisV, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export function LaptopCodeIcon(props) {
  return(
    <FontAwesomeIcon icon={faLaptopCode} className={props.extraClasses} />
  )
};

export function EllipsisVIcon(props) {
  return(
    <FontAwesomeIcon icon={faEllipsisV} className={props.extraClasses} />
  )
};

export function LinkedInIcon(props) {
  return(
    <FontAwesomeIcon icon={faLinkedin} className={props.extraClasses} />
  )
}

export function TwitterIcon(props) {
  return(
    <FontAwesomeIcon icon={faTwitter} className={props.extraClasses} />
  )
}

export function GraduationCapIcon(props) {
  return(
    <FontAwesomeIcon icon={faGraduationCap} className={props.extraClasses} />
  )
};