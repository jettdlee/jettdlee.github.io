import React from 'react';
import SectionHeader from './partials/SectionHeader';
import Timeline from './experience/Timeline';

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
        <Timeline />
      </section>
    )
  }
}

export default Experience;
