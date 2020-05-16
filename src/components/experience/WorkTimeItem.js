import React from 'react';
import { Title, SubTitle, Paragraph } from '../partials/timeline/index';
import { LaptopCodeIcon } from '../../helpers/IconHelper';

import { VerticalTimelineElement }  from 'react-vertical-timeline-component';

function WorkTimeItem(props) {
  const backgroundColour = 'rgb(33, 150, 243)';

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: backgroundColour }}
      contentArrowStyle={{ borderRight: `7px solid  ${backgroundColour}` }}
      date={props.dateStart + " - " + props.dateEnd}
      iconStyle={{ background: backgroundColour }}
      icon={<LaptopCodeIcon />}
    >
      <Title>{props.title}</Title>
      <SubTitle>{props.subtitle}</SubTitle>
      <Paragraph>{props.children}</Paragraph>
    </VerticalTimelineElement>
  )
}

export default WorkTimeItem;