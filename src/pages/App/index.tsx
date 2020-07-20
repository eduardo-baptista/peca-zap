import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import ChatsMenu from 'components/ChatsMenu';
import CustomerSideInfo from 'components/CustomerSideInfo';
import WhatsappPage from './Whatsapp';
import EmailPage from './Email';

import { Chat } from './styles';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>peçaZap - App</title>
      </Helmet>
      <ChatsMenu />
      <Chat>
        <Switch>
          <Route path="/app/whatsapp" component={WhatsappPage} />
          <Route path="/app/email" component={EmailPage} />
        </Switch>
      </Chat>
      <CustomerSideInfo />
    </>
  );
};

export default App;
