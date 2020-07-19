import React from 'react';
import { Helmet } from 'react-helmet';

import ChatsMenu from 'components/ChatsMenu';
import CustomerSideInfo from 'components/CustomerSideInfo';
import { Chat } from './styles';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>peçaZap - App</title>
      </Helmet>
      <ChatsMenu />
      <Chat />
      <CustomerSideInfo />
    </>
  );
};

export default App;
