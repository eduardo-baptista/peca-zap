import React from 'react';

import Menu from 'components/Menu';
import { Container } from './styles';

const App: React.FC = ({ children }) => {
  return (
    <Container>
      <Menu /> {children}
    </Container>
  );
};

export default App;
