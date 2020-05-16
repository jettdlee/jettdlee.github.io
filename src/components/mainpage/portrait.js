import React from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';

function Portrait() {
  const StyledImage = styled(Image)`
    padding-bottom: 2.5rem;
    width: 30%;
  `;

  return(
    <StyledImage className="avatar-logo" src="/images/Portrait.png" roundedCircle />
  )
}

export default Portrait;