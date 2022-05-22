import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: hsl(213, 19%, 18%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NumberButton = (props: string) => {
  return (
    <StyledButton>
      <h4>{props}</h4>
    </StyledButton>
  );
};
