import React from 'react';
import styled from 'styled-components';

import { BookmarkButton } from '../Bookmark-button/BookmarkBtn';
import { TextBox } from '../Text-box/TextBox';
import { NumberButton } from '../Number-button/NumberButton';
import { SubmitButton } from '../Submit-button/SubmitButton';

interface RatingDialogState {
  isBookmarked: boolean;
  rating: number;
}

export const RatingDialog = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Overpass', sans-serif;
  gap: 25px;
  background-color: #191e24;
  height: 400px;
  width: 375px;
  border-radius: 20px;
  padding: 25px;
  box-sizing: border-box;
  .number-box-row {
    display: flex;
    justify-content: space-between;
    color: hsl(217, 12%, 63%);
  }
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
    this.handleRating = this.handleRating.bind(this);
  }

  handleRating() {}

  render() {
    return (
      <RatingDialog>
        <BookmarkButton />
        <TextBox />
        <div className="number-box-row">
          <NumberButton number="1" isSelected={true} />
          <NumberButton number="2" isSelected={false} />
          <NumberButton number="3" isSelected={false} />
          <NumberButton number="4" isSelected={false} />
          <NumberButton number="5" isSelected={false} />
        </div>
        <SubmitButton />
      </RatingDialog>
    );
  }
}
