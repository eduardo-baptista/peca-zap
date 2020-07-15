import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// reactotron config
import 'config/ReactotronConfig';

// global style
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
