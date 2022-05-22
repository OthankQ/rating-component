import React from 'react';
import styled from 'styled-components';

import { BookmarkButton } from '../Bookmark-button/BookmarkBtn';
import { TextBox } from '../Text-box/TextBox';

interface RatingDialogState {
  isBookmarked: boolean;
  rating: number;
}

export const RatingDialog = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Overpass', sans-serif;
  gap: 15px;
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
        <TextBox />
      </RatingDialog>
    );
  }
}
