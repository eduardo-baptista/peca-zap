import React from 'react';

import BackgroundSvg from 'assets/background.svg';
import { Container, Content } from './styles';

const Auth: React.FC = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
      <img src={BackgroundSvg} alt="background" />
    </Container>
  );
};

export default Auth;
