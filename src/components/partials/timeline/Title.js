import React from 'react';
import styled from 'styled-components';

function Title(props) {
  const StyledTitle = styled.h3`
    color: white;
  `

  return (
    <StyledTitle className="vertical-timeline-element-title">
      <a href="">{props.children}</a>
    </StyledTitle>
  )
}

export default Title;