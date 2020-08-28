import React from 'react';
import styled from 'styled-components';

export function Paragraph(props) {
  const StyledParagraph = styled.p`
    color: white;
    text-align: justify;
  `

  return (
    <StyledParagraph>
      {props.children}
    </StyledParagraph>
  )
}