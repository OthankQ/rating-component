import React from 'react';
import styled from 'styled-components';

interface RatingDialogState {
  isBookmarked: boolean;
  rating: number;
}

export const RatingDialog = styled.div`
  display: flex;
  background-color: hsl(213, 19%, 18%);
  height: 400px;
  width: 375px;
  border-radius: 20px;
  padding: 30px;
  box-sizing: border-box;
`;

export class RatingDialogComponent extends React.Component<
  {},
  RatingDialogState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isBookmarked: false,
      rating: 0,
    };
  }

  render() {
    return <RatingDialog>Hi there</RatingDialog>;
  }
}
