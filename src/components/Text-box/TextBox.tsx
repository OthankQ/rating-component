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

interface TextBoxProps {
  headline: string;
  paragraph: string;
}

export const TextBox = (props: TextBoxProps) => {
  return (
    <StyledText>
      <h2>{props.headline}</h2>
      <p>{props.paragraph}</p>
    </StyledText>
  );
};
