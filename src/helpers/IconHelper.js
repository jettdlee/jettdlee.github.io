import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLaptopCode, faEllipsisV, faGraduationCap, faTools, faCoins, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export function LaptopCodeIcon(props) {
  return (
    <FontAwesomeIcon icon={faLaptopCode} className={props.extraClasses} />
  )
};

export function EllipsisVIcon(props) {
  return (
    <FontAwesomeIcon icon={faEllipsisV} className={props.extraClasses} />
  )
};

export function LinkedInIcon(props) {
  return (
    <FontAwesomeIcon icon={faLinkedin} className={props.extraClasses} />
  )
};

export function TwitterIcon(props) {
  return (
    <FontAwesomeIcon icon={faTwitter} className={props.extraClasses} />
  )
};

export function GraduationCapIcon(props) {
  return (
    <FontAwesomeIcon icon={faGraduationCap} className={props.extraClasses} />
  )
};

export function ToolsIcon(props) {
  return (
    <FontAwesomeIcon icon={faTools} className={props.extraClasses} />
  )
};

export function GemIcon(props) {
  return (
    <FontAwesomeIcon icon={faGem} className={props.extraClasses} />
  )
};

export function RobotIcon(props) {
  return (
    <FontAwesomeIcon icon={faRobot} className={props.extraClasses} />
  )
};

export function CoinsIcon(props) {
  return (
    <FontAwesomeIcon icon={faCoins} className={props.extraClasses} />
  )
}