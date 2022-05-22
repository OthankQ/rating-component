import React from 'react';
import styled from 'styled-components';

import StarIcon from '../../imgs/icon-star.svg';

const StyledButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: hsl(213, 19%, 18%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookmarkButton = () => {
  return (
    <StyledButton>
      <img src={StarIcon} alt="Star Icon" />
    </StyledButton>
  );
};
