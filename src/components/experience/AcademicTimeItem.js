import React from 'react';
import { Title, SubTitle, Paragraph } from '../partials/timeline/index';
import { GraduationCapIcon } from '../../helpers/IconHelper';

import { VerticalTimelineElement }  from 'react-vertical-timeline-component';

function AcademicTimeItem(props) {
  const backgroundColour = 'rgb(33, 150, 243)';

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      contentStyle={{ background: backgroundColour }}
      contentArrowStyle={{ borderRight: `7px solid  ${backgroundColour}` }}
      date={props.dateStart + " - " + props.dateEnd}
      iconStyle={{ background: backgroundColour }}
      icon={<GraduationCapIcon />}
    >
      <Title>{props.title}</Title>
      <SubTitle>{props.subtitle}</SubTitle>
      <Paragraph>{props.children}</Paragraph>
    </VerticalTimelineElement>
  )
}

export default AcademicTimeItem;