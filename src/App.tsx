import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from 'styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <h2>peçaZap</h2>
    </BrowserRouter>
  );
};

export default App;
