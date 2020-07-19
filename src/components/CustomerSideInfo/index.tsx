import React from 'react';

import { ReactComponent as EditSvg } from 'assets/icons/edit.svg';
import { ReactComponent as DeleteSvg } from 'assets/icons/delete.svg';

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

const CustomerSideInfo: React.FC = () => {
  return (
    <Container>
      <CustomerInfo>
        <Picture
          size={64}
          src="https://ui-avatars.com/api/?name=Carlos+Correa"
          alt="User"
        />
        <PersonInfo name="Joào da Silva" company="acme inc" />
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
          <li>
            <ChatIcon name="whatsapp" />
            25/09/2019 (10 dias atrás)
          </li>
          <li>
            <ChatIcon name="whatsapp" />
            15/09/2019 (20 dias atrás)
          </li>
          <li>
            <ChatIcon name="skype" />
            15/06/2019 (100 dias atrás)
          </li>
        </ul>
      </LastConversationsContainer>

      <ObservationsContainer>
        <Title>OBSERVAÇÕES</Title>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, lacus,
          et potenti nisl viverra a, feugiat. Eget ultrices elit faucibus arcu
          volutpat vulputate.
        </span>
      </ObservationsContainer>

      <ContactsContainer>
        <ul>
          <li>
            <ChatIcon name="whatsapp" />
            <div>
              <Title>WHATSAPP</Title>
              <span>55 (19) 1234-5678</span>
            </div>
          </li>
          <li>
            <ChatIcon name="email" />
            <div>
              <Title>EMAIL</Title>
              <span>joao@silva.com.br</span>
            </div>
          </li>
          <li>
            <ChatIcon name="skype" />
            <div>
              <Title>SKYPE</Title>
              <span>@joao_silva</span>
            </div>
          </li>
        </ul>
      </ContactsContainer>
    </Container>
  );
};

export default CustomerSideInfo;
