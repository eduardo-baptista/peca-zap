import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Redirect, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { chatsState } from 'store/modules/chats/types';
import { contactsState } from 'store/modules/contacts/types';
import { customersState } from 'store/modules/customers/types';

import { ReactComponent as EmailOptions } from 'assets/email-options.svg';
import { ReactComponent as ArrowSvg } from 'assets/icons/left-big-arrow.svg';

import Button from 'components/Button';
import SvgContainer from 'components/SvgContainer';
import ChatTopBar from 'components/ChatTopBar';
import Message from 'components/Message';

import { Container, PageTitle, ChatContainer, InputContainer } from './styles';

interface ReduxState {
  chats: chatsState;
  contacts: contactsState;
  customers: customersState;
}

interface RouteParams {
  id: string;
}

const Email: React.FC = () => {
  const { id } = useParams<RouteParams>();

  const email = useSelector((state: ReduxState) => {
    const channel = state.contacts.contacts.find(
      (contact) => contact.type === 'email'
    );

    if (!channel) return undefined;

    const selectedCustomer = state.customers.selectedId;

    if (!selectedCustomer) return undefined;

    const emailId = Number(id);

    return state.chats.chats.find(
      (chat) =>
        chat.channel === channel.channel &&
        chat.customer === selectedCustomer &&
        chat.id === emailId
    );
  });

  if (!email) return <Redirect to="/app/email" />;

  return (
    <Container>
      <Helmet>
        <title>peçaZap - E-mail</title>
      </Helmet>
      <ChatTopBar>
        <PageTitle>
          <Link to="/app/email">
            <SvgContainer>
              <ArrowSvg />
            </SvgContainer>
          </Link>
          <h2>{email.subject}</h2>
        </PageTitle>
        <Button type="button">FINALIZAR ATENDIMENTO</Button>
      </ChatTopBar>
      <ChatContainer>
        {email.messages.map((msg) => (
          <Message
            key={msg.timestamp}
            time={msg.timestamp}
            seen={msg.seen}
            type={msg.type}
            body={msg.body}
          />
        ))}
      </ChatContainer>
      <InputContainer>
        <textarea placeholder="Digite sua mensagem..." />
        <div>
          <Button type="button">RESPONDER</Button>
          <EmailOptions />
        </div>
      </InputContainer>
    </Container>
  );
};

export default Email;
