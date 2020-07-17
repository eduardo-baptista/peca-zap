import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

// reactotron config
import 'config/ReactotronConfig';

// global style
import GlobalStyle from 'styles/global';

// routes
import Routes from 'routes';
import { store, persistor } from 'store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
