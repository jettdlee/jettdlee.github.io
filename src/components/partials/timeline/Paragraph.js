import React from 'react';
import styled from 'styled-components';

function Paragraph(props) {
  const StyledParagraph = styled.p`
    color: white;
  `
  return (
    <StyledParagraph>
      {props.children}
    </StyledParagraph>
  )
}

export default Paragraph;