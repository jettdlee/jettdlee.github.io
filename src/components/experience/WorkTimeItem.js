import React from 'react';
import { Title, SubTitle, Paragraph } from '../partials/timeline/index';
import { LaptopCodeIcon } from '../../helpers/IconHelper';

import { VerticalTimelineElement }  from 'react-vertical-timeline-component';

function WorkTimeItem(props) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="2011 - present"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<LaptopCodeIcon />}
    >
      <h3 className="vertical-timeline-element-title">Creative Director</h3>
      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      <p>
        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
    </VerticalTimelineElement>
  )
}

export default WorkTimeItem;