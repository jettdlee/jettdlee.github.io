import React from 'react';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import WorkTimeItem from './WorkTimeItem';
import AcademicTimeItem from './AcademicTimeItem';
import { ExperienceInnospec, ExperienceAcl, ExperienceGeoban } from '../../contents/experience/work';

function Timeline(props) {
  return (
    <VerticalTimeline>
      <WorkTimeItem
        title="Yozu"
        subtitle="Software Developer"
        dateStart="Nov 2018"
        dateEnd="Present"
      >
        Ruby on rails Pandle
      </WorkTimeItem>
      <AcademicTimeItem
        title="University of Liverpool"
        subtitle="MSc Computer Science"
        dateStart="Sep 2017"
        dateEnd="Sep 2018"
      />
      <WorkTimeItem
        title="Geoban Santander"
        subtitle="Financial Investigator"
        dateStart="May 2015"
        dateEnd="Aug 2017"
      >
        <ExperienceGeoban />
      </WorkTimeItem>
      <WorkTimeItem
        title="Atlantic Container Line"
        subtitle="Financial Investigator"
        dateStart="Jun 2014"
        dateEnd="May 2015"
      >
        <ExperienceAcl />
      </WorkTimeItem>
      <AcademicTimeItem
        title="Liverpool John Moores University"
        subtitle="BSc Business Mathematics (Final Year)"
        dateStart="Sep 2013"
        dateEnd="Jun 2014"
      />
      <WorkTimeItem
        title="Innospec Ltd"
        subtitle="Financial Assistant (Placement)"
        dateStart="Jul 2012"
        dateEnd="Aug 2013"
      >
        <ExperienceInnospec />
      </WorkTimeItem>
      <AcademicTimeItem
        title="Liverpool John Moores University"
        subtitle="BSc Business Mathematics"
        dateStart="Sep 2010"
        dateEnd="Jun 2012"
      />
    </VerticalTimeline>
  );
}

export default Timeline;