import React from 'react';
import styled from 'styled-components';

export const StyledText = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  h2 {
    font-weight: 700;
    color: hsl(0, 0%, 100%);
    margin-bottom: 5px;
  }

  p {
    font-weight: 400;
    color: hsl(217, 12%, 63%);
    font-size: 0.8rem;
    line-height: 1.3rem;
  }
`;

export const TextBox = () => {
  return (
    <StyledText>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </StyledText>
  );
};
