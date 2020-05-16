import React from 'react';
import { LaptopCodeIcon, GemIcon, RobotIcon, CoinsIcon} from '../../helpers/IconHelper';

function SubHeader() {
  return (
    <div className='sub-header'>
      <p>Back-end Developer <LaptopCodeIcon /></p>
      <p>Ruby on Rails <GemIcon /></p>
      <p>Machine Learning <RobotIcon /></p>
      <p>Ex-Accountant <CoinsIcon /></p>
    </div>
  );
}

export default SubHeader;