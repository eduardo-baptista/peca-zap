import React from 'react';

// icons
import { ReactComponent as CalendarSvg } from 'assets/icons/calendar.svg';
import { ReactComponent as WhatsappSvg } from 'assets/icons/whatsapp.svg';
import { ReactComponent as EmailSvg } from 'assets/icons/email.svg';
import { ReactComponent as SkypeSvg } from 'assets/icons/skype.svg';
import { ReactComponent as PhoneSvg } from 'assets/icons/telefone.svg';
import { ReactComponent as WebchatSvg } from 'assets/icons/webchat.svg';

import { Container, LinkSvg, Notification } from './styles';

const ChatsMenu: React.FC = () => {
  return (
    <Container>
      <LinkSvg color="#00A7CF" to="/app/calendar">
        <CalendarSvg />
        <Notification>2</Notification>
      </LinkSvg>
      <LinkSvg color="#25D366" to="/app/whatsapp">
        <WhatsappSvg />
        <Notification>1</Notification>
      </LinkSvg>
      <LinkSvg color="#E33E1A" to="/app/email">
        <EmailSvg />
        <Notification>1</Notification>
      </LinkSvg>
      <LinkSvg color="#00AFF0" to="/app/skype">
        <SkypeSvg />
      </LinkSvg>
      <LinkSvg color="#6A4AEA" to="/app/phone">
        <PhoneSvg />
      </LinkSvg>
      <LinkSvg color="#E87C28" to="/app/webchat">
        <WebchatSvg />
      </LinkSvg>
    </Container>
  );
};

export default ChatsMenu;
