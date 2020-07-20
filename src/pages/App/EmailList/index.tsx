import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { format, fromUnixTime } from 'date-fns';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from 'components/Button';
import ChatTopBar from 'components/ChatTopBar';
import SearchInput from 'components/SearchInput';
import EmailAlert from 'components/EmailAlert';

import { chatsState } from 'store/modules/chats/types';
import { contactsState } from 'store/modules/contacts/types';
import { customersState } from 'store/modules/customers/types';
import { IChat } from 'typings/IChat';

import {
  Container,
  PageTitle,
  PageHeaderActions,
  TableContainer,
  Table,
  TBodyRow,
} from './styles';

interface ReduxState {
  chats: chatsState;
  contacts: contactsState;
  customers: customersState;
}

interface Email extends IChat {
  alerts: number;
  hasAlert: boolean;
  formatedStart: string;
  formatedLast: string;
}

const EmailList: React.FC = () => {
  const histoy = useHistory();

  const emails: Email[] = useSelector((state: ReduxState) => {
    const channel = state.contacts.contacts.find(
      (contact) => contact.type === 'email'
    );

    if (!channel) return [];

    const selectedCustomer = state.customers.selectedId;

    if (!selectedCustomer) return [];

    const chats = state.chats.chats.filter(
      (cht) =>
        cht.channel === channel.channel && cht.customer === selectedCustomer
    );

    return chats.map((chat) => ({
      ...chat,
      alerts: chat.messages.filter((msg) => !msg.seen).length,
      hasAlert: chat.messages.filter((msg) => !msg.seen).length !== 0,
      formatedStart: format(fromUnixTime(chat.start), 'dd/MM/yyyy'),
      formatedLast: format(
        fromUnixTime(chat.messages[chat.messages.length - 1].timestamp),
        'dd/MM/yyyy'
      ),
    }));
  });

  const handleReadEmails = useCallback(
    (id: number) => {
      histoy.push(`/app/email/${id}`);
    },
    [histoy]
  );

  return (
    <Container>
      <Helmet>
        <title>peçaZap - E-mail</title>
      </Helmet>
      <ChatTopBar>
        <PageTitle>CAIXA DE ENTRADA</PageTitle>
        <PageHeaderActions>
          <SearchInput svgColor="#A7B6C2" />
          <Button type="button">NOVO EMAIL</Button>
        </PageHeaderActions>
      </ChatTopBar>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>ASSUNTO</th>
              <th>INÍCIO</th>
              <th>ÚLTIMA MENSAGEM</th>
              <th>alert</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((email) => (
              <TBodyRow
                key={email.id}
                hasAlert={email.hasAlert}
                onClick={() => handleReadEmails(email.id)}
              >
                <td>{email.subject}</td>
                <td>{email.formatedStart}</td>
                <td>{email.formatedLast}</td>
                <EmailAlert numberOf={email.alerts} />
              </TBodyRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default EmailList;
