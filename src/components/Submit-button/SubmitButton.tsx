import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  background-color: hsl(25, 97%, 53%);
  color: hsl(0, 0%, 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: hsl(0, 0%, 100%);
    color: hsl(25, 97%, 53%);
    cursor: pointer;
  }
`;

export interface SubmitButtonProps {
  onSubmit: (event: any) => void;
}

export const SubmitButton = (props: SubmitButtonProps) => {
  return <StyledButton onClick={props.onSubmit}>SUBMIT</StyledButton>;
};
