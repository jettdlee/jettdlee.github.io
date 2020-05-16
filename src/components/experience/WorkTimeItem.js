import React from 'react';
import { TimelineItem } from 'vertical-timeline-component-for-react';
import styled from 'styled-components';

function WorkTimeItem() {
  const StyledParagraph = styled.p`
    color: white;
  `

  return (
    <TimelineItem
      key="001"
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
      <h3>Title, Company</h3>
      <h4>Subtitle</h4>
      <StyledParagraph>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
    </StyledParagraph>
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

export default WorkTimeItem;