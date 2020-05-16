import React from 'react';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import WorkTimeItem from './WorkTimeItem';
import AcademicTimeItem from './AcademicTimeItem';

function Timeline(props) {
  return (
    <VerticalTimeline>
      <WorkTimeItem title="Yozu" subtitle="Software Developer" dateStart="Nov 2018" dateEnd="Present">
        Ruby on rails
        Pandle
      </WorkTimeItem>
      <AcademicTimeItem title="University of Liverpool" subtitle="MSc Computer Science" dateStart="Sep 2017" dateEnd="Sep 2018"/>
    </VerticalTimeline>
  );
}

export default Timeline;