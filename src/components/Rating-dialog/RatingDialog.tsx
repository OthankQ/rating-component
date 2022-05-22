import React from 'react';
import styled from 'styled-components';

import { BookmarkButton } from '../Bookmark-button/BookmarkBtn';

interface RatingDialogState {
  isBookmarked: boolean;
  rating: number;
}

export const RatingDialog = styled.div`
  display: flex;
  background-color: #191e24;
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
    return (
      <RatingDialog>
        <BookmarkButton />
      </RatingDialog>
    );
  }
}
