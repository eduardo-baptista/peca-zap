import React from 'react';
import { useSelector } from 'react-redux';
import { format, fromUnixTime, differenceInDays } from 'date-fns';

import { ReactComponent as EditSvg } from 'assets/icons/edit.svg';
import { ReactComponent as DeleteSvg } from 'assets/icons/delete.svg';

import { customersState } from 'store/modules/customers/types';
import { contactsState } from 'store/modules/contacts/types';
import { ICustomer } from 'typings/ICustomer';

import Picture from 'components/Picture';
import PersonInfo from 'components/PersonInfo';
import ChatIcon from 'components/ChatIcon';
import {
  Container,
  CustomerInfo,
  Button,
  ButtonsRow,
  Title,
  LastConversationsContainer,
  ObservationsContainer,
  ContactsContainer,
} from './styles';

interface Channels {
  [key: number]: string;
}

interface LastConversationFormated {
  channel: number;
  finishedAt: number;
  formatedTime: string;
}

interface FormatedCustomer extends ICustomer {
  lastConversationsFormated: LastConversationFormated[];
}

type Customer = FormatedCustomer | undefined;

const CustomerSideInfo: React.FC = () => {
  const channels: Channels = useSelector(
    ({ contacts: state }: { contacts: contactsState }) => {
      const chn: Channels = {};

      state.contacts.forEach((contact) => {
        chn[contact.channel] = contact.type;
      });

      return chn;
    }
  );

  const customer: Customer = useSelector(
    ({ customers: state }: { customers: customersState }) => {
      const selectedCustomer = state.customers.find(
        (ctm) => ctm.id === state.selectedId
      );

      if (!selectedCustomer) return undefined;

      const formatedCustomer: FormatedCustomer = {
        ...selectedCustomer,
        lastConversationsFormated: [],
      };

      formatedCustomer.lastConversationsFormated = selectedCustomer.lastConversations.map(
        (lastConversation) => ({
          ...lastConversation,
          formatedTime: `${format(
            fromUnixTime(lastConversation.finishedAt),
            'dd/MM/yyyy'
          )} (${differenceInDays(
            new Date(),
            fromUnixTime(lastConversation.finishedAt)
          )} dias atrás)`,
        })
      );

      return formatedCustomer;
    }
  );

  return (
    <Container>
      {customer && (
        <>
          <CustomerInfo>
            <Picture size={64} src={customer.photo} alt={customer.name} />
            <PersonInfo name={customer.name} company={customer.company} />
          </CustomerInfo>
          <ButtonsRow>
            <Button type="button">
              <EditSvg />
            </Button>
            <Button type="button">
              <DeleteSvg />
            </Button>
          </ButtonsRow>
          <LastConversationsContainer>
            <Title>ÚLTIMAS CONVERSAS</Title>
            <ul>
              {customer.lastConversationsFormated.map((lastConversation) => (
                <li key={lastConversation.finishedAt}>
                  <ChatIcon name={channels[lastConversation.channel]} />
                  {lastConversation.formatedTime}
                </li>
              ))}
            </ul>
          </LastConversationsContainer>
          <ObservationsContainer>
            <Title>OBSERVAÇÕES</Title>
            <span>{customer.observations}</span>
          </ObservationsContainer>
          <ContactsContainer>
            <ul>
              {customer.contacts.map((contact) => (
                <li key={contact.channel}>
                  <ChatIcon name={channels[contact.channel]} />
                  <div>
                    <Title>{channels[contact.channel]}</Title>
                    <span>{contact.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </ContactsContainer>
        </>
      )}
    </Container>
  );
};

export default CustomerSideInfo;
