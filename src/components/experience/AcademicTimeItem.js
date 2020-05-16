import React from 'react';
import { TimelineItem } from 'vertical-timeline-component-for-react';

function AcademicTimeItem() {
  return (
    <TimelineItem
      key="001"
      dateText="11/2010 – Present"
      style={{ color: '#e86971' }}
      bodyContainerStyle={{
        padding: '20px',
      }}
    >
      <h3>Title, Company</h3>
      <h4>Subtitle</h4>
      <p>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
    </p>
      <p>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
    </p>
      <p>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
    </p>
    </TimelineItem>
  )
}

export default AcademicTimeItem;