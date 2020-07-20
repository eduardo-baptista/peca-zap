import React, { useMemo } from 'react';

// icons
import { ReactComponent as CalendarSvg } from 'assets/icons/calendar.svg';
import { ReactComponent as WhatsappSvg } from 'assets/icons/whatsapp.svg';
import { ReactComponent as EmailSvg } from 'assets/icons/email.svg';
import { ReactComponent as SkypeSvg } from 'assets/icons/skype.svg';
import { ReactComponent as TelefoneSvg } from 'assets/icons/telefone.svg';
import { ReactComponent as WebchatSvg } from 'assets/icons/webchat.svg';

interface Icons {
  [key: string]: React.FC;
}

interface ChatIconProps {
  name?: string;
}

const ChatIcon: React.FC<ChatIconProps> = ({ name }) => {
  const icons = useMemo<Icons>(
    () => ({
      calendar: CalendarSvg,
      whatsapp: WhatsappSvg,
      email: EmailSvg,
      skype: SkypeSvg,
      telefone: TelefoneSvg,
      webchat: WebchatSvg,
    }),
    []
  );

  const Component = useMemo(() => (name ? icons[name] : null), [icons, name]);

  if (!Component) return <div />;

  return <Component />;
};

export default ChatIcon;
