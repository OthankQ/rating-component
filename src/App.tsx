import React from 'react';
import styled from 'styled-components';

import { RatingDialogComponent } from './components/Rating-dialog/RatingDialog';

export const Container = styled.div`
  background-color: hsl(228, 11%, 8%);
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <RatingDialogComponent />
    </Container>
  );
}

export default App;
