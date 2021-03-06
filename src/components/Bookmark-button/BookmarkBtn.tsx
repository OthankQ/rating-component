import React from 'react';
import styled from 'styled-components';

import StarIcon from '../../imgs/icon-star.svg';

export const StyledButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: hsl(213, 19%, 18%);
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: hsl(0, 0%, 100%);
    color: hsl(25, 97%, 53%);
    cursor: pointer;
  }
`;

export const BookmarkButton = () => {
  return (
    <StyledButton>
      <img src={StarIcon} alt="Star Icon" />
    </StyledButton>
  );
};
