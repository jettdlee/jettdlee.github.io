import React from 'react';
import styled from 'styled-components';

function SubTitle(props) {
  const StyledSubTitle = styled.h4`
    color: white;
  `

  return (
    <StyledSubTitle className="vertical-timeline-element-subtitle">
      {props.children}
    </StyledSubTitle>
  )
}

export default SubTitle;