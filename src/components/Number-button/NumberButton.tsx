import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.div<{ isSelected: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: hsl(213, 19%, 18%);
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: hsl(25, 97%, 53%);
    color: hsl(0, 0%, 100%);
    cursor: pointer;
  }
  ${(props) =>
    props.isSelected &&
    `
    background: hsl(217, 12%, 63%);
    color: hsl(0, 0%, 100%);
  `}
`;

export interface NumberButtonProps {
  number: string;
  isSelected: boolean;
}

export const NumberButton = (props: NumberButtonProps) => {
  const { number } = props;

  return (
    <StyledButton isSelected={props.isSelected}>
      <h4>{number}</h4>
    </StyledButton>
  );
};
