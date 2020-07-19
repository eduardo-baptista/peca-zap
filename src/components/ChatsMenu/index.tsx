import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import ChatIcon from 'components/ChatIcon';

import { contactsState } from 'store/modules/contacts/types';
import { customersState } from 'store/modules/customers/types';

import { Container, LinkSvg, Notification } from './styles';

interface Colors {
  [key: string]: string;
}

const ChatsMenu: React.FC = () => {
  const contacts = useSelector(
    ({ contacts: state }: { contacts: contactsState }) => state.contacts
  );

  const notifications = useSelector(
    ({ customers: state }: { customers: customersState }) =>
      state.customers.find((customer) => customer.id === state.selectedId)
        ?.messages
  );

  const colors: Colors = useMemo(
    () => ({
      whatsapp: '#25D366',
      email: '#E33E1A',
      skype: '#00AFF0',
      telefone: '#6A4AEA',
      webchat: '#E87C28',
    }),
    []
  );

  return (
    <Container>
      <LinkSvg color="#00A7CF" to="/app/calendar">
        <ChatIcon name="calendar" />
      </LinkSvg>
      {contacts.map((contact) => (
        <LinkSvg
          key={contact.channel}
          color={colors[contact.type]}
          to={`/app/${contact.type}`}
        >
          <ChatIcon name={contact.type} />
          {notifications?.[contact.channel] && (
            <Notification>{notifications[contact.channel]}</Notification>
          )}
        </LinkSvg>
      ))}
    </Container>
  );
};

export default ChatsMenu;
