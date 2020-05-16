import React from 'react';
import { Title, SubTitle, Paragraph } from '../partials/timeline/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

function AcademicTimeItem() {
  return (
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={ <FontAwesomeIcon icon={faLaptopCode} /> }
      >
        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>
          Creative Direction, Visual Design
    </p>
    </VerticalTimelineElement>
  )
}

export default AcademicTimeItem;