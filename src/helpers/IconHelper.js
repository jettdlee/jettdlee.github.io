import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export function LaptopCodeIcon(props) {
  return(
    <FontAwesomeIcon icon={faLaptopCode} className={props.extraClasses} />
  )
};