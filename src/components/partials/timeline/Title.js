import React from 'react';
import styled from 'styled-components';

function Title(props) {
  const StyledTitle = styled.h3`
    color: white;
  `

  return(
    <StyledTitle>{props.children}</StyledTitle>
  )
}

export default Title;