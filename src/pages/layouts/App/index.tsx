import React from 'react';

import Menu from 'components/Menu';

import { Container, Content } from './styles';

const App: React.FC = ({ children }) => {
  return (
    <Container>
      <Menu />
      <Content>{children}</Content>
    </Container>
  );
};

export default App;
