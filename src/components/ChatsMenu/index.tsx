import React from 'react';

// icons
import { ReactComponent as CalendarSvg } from 'assets/icons/calendar.svg';
import { ReactComponent as WhatsappSvg } from 'assets/icons/whatsapp.svg';
import { ReactComponent as EmailSvg } from 'assets/icons/email.svg';
import { ReactComponent as SkypeSvg } from 'assets/icons/skype.svg';
import { ReactComponent as PhoneSvg } from 'assets/icons/telefone.svg';
import { ReactComponent as WebchatSvg } from 'assets/icons/webchat.svg';

import { Container, LinkSvg } from './styles';

const ChatsMenu: React.FC = () => {
  return (
    <Container>
      <LinkSvg>
        <CalendarSvg />
      </LinkSvg>
      <LinkSvg>
        <WhatsappSvg />
      </LinkSvg>
      <LinkSvg>
        <EmailSvg />
      </LinkSvg>
      <LinkSvg>
        <SkypeSvg />
      </LinkSvg>
      <LinkSvg>
        <PhoneSvg />
      </LinkSvg>
      <LinkSvg>
        <WebchatSvg />
      </LinkSvg>
    </Container>
  );
};

export default ChatsMenu;
