import React from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as InputSvg } from 'assets/whatsapp-options.svg';

import ChatTopBar from 'components/ChatTopBar';
import SearchInput from 'components/SearchInput';
import StartChatSeparator from 'components/StartChatSeparator';
import Message from 'components/Message';

import { chatsState } from 'store/modules/chats/types';
import { contactsState } from 'store/modules/contacts/types';
import { customersState } from 'store/modules/customers/types';

import { Container, Button, ChatContainer, InputContainer } from './styles';

interface ReduxState {
  chats: chatsState;
  contacts: contactsState;
  customers: customersState;
}

const Whatsapp: React.FC = () => {
  const chat = useSelector((state: ReduxState) => {
    const channel = state.contacts.contacts.find(
      (contact) => contact.type === 'whatsapp'
    );

    if (!channel) return undefined;

    const selectedCustomer = state.customers.selectedId;

    if (!selectedCustomer) return undefined;

    return state.chats.chats.find(
      (cht) =>
        cht.channel === channel.channel && cht.customer === selectedCustomer
    );
  });

  return (
    <Container>
      <ChatTopBar>
        <SearchInput svgColor="#A7B6C2" />
        <Button>FINALIZAR</Button>
      </ChatTopBar>
      <ChatContainer>
        {chat && (
          <>
            <StartChatSeparator date={chat.start} />
            {chat.messages.map((msg) => (
              <Message
                key={msg.timestamp}
                time={msg.timestamp}
                seen={msg.seen}
                type={msg.type}
                body={msg.body}
              />
            ))}
          </>
        )}
      </ChatContainer>
      <InputContainer>
        <input placeholder="Digite sua mensagem..." />
        <InputSvg />
      </InputContainer>
    </Container>
  );
};

export default Whatsapp;
