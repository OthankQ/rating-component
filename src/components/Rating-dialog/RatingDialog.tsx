import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';

import { BookmarkButton } from '../Bookmark-button/BookmarkBtn';
import { TextBox } from '../Text-box/TextBox';
import { NumberButton } from '../Number-button/NumberButton';
import { SubmitButton } from '../Submit-button/SubmitButton';

interface RatingDialogState {
  isBookmarked: boolean;
  isSubmitted: boolean;
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
      isSubmitted: false,
      rating: 0,
    };
    this.handleRating = this.handleRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRating(event: any): void {
    console.log(event);
    this.setState({
      rating: parseInt(event.target.innerText),
    });
  }

  handleSubmit(event: any): void {
    event.preventDefault();
    this.setState((state) => {
      return { isSubmitted: !state.isSubmitted };
    });
  }

  render() {
    return (
      <RatingDialog>
        {!this.state.isSubmitted ? (
          <>
            <BookmarkButton />
            <TextBox />
            <div className="number-box-row">
              <NumberButton
                number="1"
                isSelected={this.state.rating === 1}
                onClick={this.handleRating}
              />
              <NumberButton
                number="2"
                isSelected={this.state.rating === 2}
                onClick={this.handleRating}
              />
              <NumberButton
                number="3"
                isSelected={this.state.rating === 3}
                onClick={this.handleRating}
              />
              <NumberButton
                number="4"
                isSelected={this.state.rating === 4}
                onClick={this.handleRating}
              />
              <NumberButton
                number="5"
                isSelected={this.state.rating === 5}
                onClick={this.handleRating}
              />
            </div>
            <SubmitButton onSubmit={this.handleSubmit} />
          </>
        ) : null}
      </RatingDialog>
    );
  }
}
