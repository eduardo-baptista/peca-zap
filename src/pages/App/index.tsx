import React from 'react';
import { Helmet } from 'react-helmet';

import ChatsMenu from 'components/ChatsMenu';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>peçaZap - App</title>
      </Helmet>
      <ChatsMenu />
    </>
  );
};

export default App;
