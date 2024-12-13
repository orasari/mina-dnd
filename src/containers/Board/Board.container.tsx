import React from 'react';
import { Container } from '@/styles/StyledComponents/Layout';
import BoardComponent from '@components/Board/BoardComponent';


const BoardContainer = () => {
  return (
    <Container>
      <BoardComponent />
    </Container>
  );
};

export default BoardContainer;
