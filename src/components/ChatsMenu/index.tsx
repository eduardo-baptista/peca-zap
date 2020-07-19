import React from 'react';

import ChatIcon from 'components/ChatIcon';

import { Container, LinkSvg, Notification } from './styles';

const ChatsMenu: React.FC = () => {
  return (
    <Container>
      <LinkSvg color="#00A7CF" to="/app/calendar">
        <ChatIcon name="calendar" />
        <Notification>2</Notification>
      </LinkSvg>
      <LinkSvg color="#25D366" to="/app/whatsapp">
        <ChatIcon name="whatsapp" />
        <Notification>1</Notification>
      </LinkSvg>
      <LinkSvg color="#E33E1A" to="/app/email">
        <ChatIcon name="email" />
        <Notification>1</Notification>
      </LinkSvg>
      <LinkSvg color="#00AFF0" to="/app/skype">
        <ChatIcon name="skype" />
      </LinkSvg>
      <LinkSvg color="#6A4AEA" to="/app/phone">
        <ChatIcon name="telefone" />
      </LinkSvg>
      <LinkSvg color="#E87C28" to="/app/webchat">
        <ChatIcon name="webchat" />
      </LinkSvg>
    </Container>
  );
};

export default ChatsMenu;
