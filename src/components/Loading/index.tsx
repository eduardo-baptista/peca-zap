import React from 'react';

import { ReactComponent as LoadingSvg } from 'assets/loading.svg';
import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <LoadingSvg />
    </Container>
  );
};

export default Loading;
