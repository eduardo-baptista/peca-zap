import React from 'react';
import { useSelector } from 'react-redux';

import Button from 'components/Button';
import ChatTopBar from 'components/ChatTopBar';
import SearchInput from 'components/SearchInput';

import { chatsState } from 'store/modules/chats/types';
import { contactsState } from 'store/modules/contacts/types';
import { customersState } from 'store/modules/customers/types';

import { Container, PageTitle, PageHeaderActions, Table } from './styles';

interface ReduxState {
  chats: chatsState;
  contacts: contactsState;
  customers: customersState;
}

const EmailList: React.FC = () => {
  const emails = useSelector((state: ReduxState) => {
    const channel = state.contacts.contacts.find(
      (contact) => contact.type === 'email'
    );

    if (!channel) return [];

    const selectedCustomer = state.customers.selectedId;

    if (!selectedCustomer) return [];

    return state.chats.chats.filter(
      (cht) =>
        cht.channel === channel.channel && cht.customer === selectedCustomer
    );
  });

  return (
    <Container>
      <ChatTopBar>
        <PageTitle>CAIXA DE ENTRADA</PageTitle>
        <PageHeaderActions>
          <SearchInput svgColor="#A7B6C2" />
          <Button type="button">NOVO EMAIL</Button>
        </PageHeaderActions>
      </ChatTopBar>
      {emails.map((email) => email.customer)}
      <Table />
    </Container>
  );
};

export default EmailList;
