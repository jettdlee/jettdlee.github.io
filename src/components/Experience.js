import React from 'react';
import SectionHeader from './partials/SectionHeader';
import { Timeline } from 'vertical-timeline-component-for-react';
import WorkTimeItem from './experience/WorkTimeItem';

class Experience extends React.Component {
  render() {
    return (
      <section id="experience">
        <SectionHeader headerText="Experience" />
        {/* University of Liverpool
        Liverpool John Moores

        Yozu
        Geoban Santander
        Alantic Container Line
        Innospec */}

        <Timeline lineColor={'#ddd'}>
          <WorkTimeItem keyNo="001"/>
          <WorkTimeItem keyNo="002"/>
          <WorkTimeItem keyNo="003"/>
        </Timeline>
      </section>
    )
  }
}

export default Experience;
