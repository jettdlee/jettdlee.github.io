import React from 'react';
import { TimelineItem } from 'vertical-timeline-component-for-react';
import { Title, SubTitle, Paragraph } from '../partials/timeline/index';

function WorkTimeItem(props) {
  return (
    <TimelineItem
      key={props.keyNo}
      dateText="11/2010 – Present"
      style={{ color: '#e86971' }}
      dateComponent={(
        <div
          style={{
            display: 'block',
            float: 'left',
            padding: '10px',
            background: 'rgb(150, 150, 150)',
            color: '#fff',
          }}
        >
          11/2008 – 04/2009
        </div>
      )}
      dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
      bodyContainerStyle={{
        padding: '20px',
      }}
    >
      <Title>Title, Company</Title>
      <SubTitle>Subtitle</SubTitle>
      <Paragraph>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
      </Paragraph>
      <Paragraph>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
      </Paragraph>
      <Paragraph>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
      </Paragraph>
    </TimelineItem>
  )
}

export default WorkTimeItem;