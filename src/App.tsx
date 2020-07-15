import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// reactotron config
import 'config/ReactotronConfig';

// global style
import GlobalStyle from 'styles/global';

// routes
import Routes from 'routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
