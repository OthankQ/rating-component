import React from 'react';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 10px 25px;
  border-radius: 20px;
  background-color: hsl(213, 19%, 18%);
  color: hsl(25, 97%, 53%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface RatingIndicatorProps {
  rating: number;
}

export const RatingIndicator = (props: RatingIndicatorProps) => {
  return <StyledDiv>You selected {props.rating} out of 5</StyledDiv>;
};
