import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';

import { BookmarkButton } from '../Bookmark-button/BookmarkBtn';
import { TextBox } from '../Text-box/TextBox';
import { NumberButton } from '../Number-button/NumberButton';
import { SubmitButton } from '../Submit-button/SubmitButton';
import { RatingIndicator } from '../RatingIndicator/RatingIndicator';

import ThankYou from '../../imgs/illustration-thank-you.svg';

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
  .thankyou {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    text-align: center;
    img {
      width: 180px;
    }
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
    const ratingHeadline = 'How did we do?';
    const ratingParagraph =
      'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!';
    const thankyouHeadline = 'Thank you!';
    const thankyouParagraph =
      "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

    return (
      <RatingDialog>
        {!this.state.isSubmitted ? (
          <>
            <BookmarkButton />
            <TextBox headline={ratingHeadline} paragraph={ratingParagraph} />
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
        ) : (
          <>
            <div className="thankyou">
              <img src={ThankYou} alt="Thank You Illustration" />
              <RatingIndicator rating={this.state.rating} />
              <TextBox
                headline={thankyouHeadline}
                paragraph={thankyouParagraph}
              />
            </div>
          </>
        )}
      </RatingDialog>
    );
  }
}
