import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from 'store/modules/auth/actions';

import { ReactComponent as DownArrowSvg } from 'assets/icons/down-arrow.svg';
import { ReactComponent as SearchSvg } from 'assets/icons/search.svg';
import { ReactComponent as AddSvg } from 'assets/icons/add.svg';
import { ReactComponent as LogoSvg } from 'assets/white-logo.svg';

import Picture from 'components/Picture';
import PersonInfo from 'components/PersonInfo';
import CustomerInfo from 'components/CustomerInfo';
import SvgContainer from 'components/SvgContainer';
import {
  Container,
  MenuHeader,
  UserInfo,
  SearchInput,
  CustomersTitleRow,
  CustomersList,
  Logo,
} from './styles';

const Menu: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);

  return (
    <Container>
      <MenuHeader>
        <UserInfo type="button" onClick={handleLogout}>
          <Picture
            size={32}
            src="https://ui-avatars.com/api/?name=Carlos+Correa"
            alt="User"
          />
          <PersonInfo name="Carlos Corrêa" company="premiun peças" />
          <SvgContainer>
            <DownArrowSvg />
          </SvgContainer>
        </UserInfo>
        <SearchInput>
          <input />
          <SvgContainer>
            <SearchSvg />
          </SvgContainer>
        </SearchInput>
        <CustomersTitleRow>
          CLIENTES
          <SvgContainer>
            <AddSvg />
          </SvgContainer>
        </CustomersTitleRow>
      </MenuHeader>
      <CustomersList>
        <li>
          <CustomerInfo
            id={1}
            name="Daniel Furtado"
            company="wezen design"
            photo="https://ui-avatars.com/api/?name=Joao+Silva"
            isActive
            alerts={2}
          />
        </li>
        <li>
          <CustomerInfo
            id={1}
            name="Daniel Furtado"
            company="wezen design"
            photo="https://ui-avatars.com/api/?name=Joao+Silva"
          />
        </li>
        <li>
          <CustomerInfo
            id={1}
            name="Daniel Furtado"
            company="wezen design"
            photo="https://ui-avatars.com/api/?name=Joao+Silva"
            alerts={5}
          />
        </li>
        <li>
          <CustomerInfo
            id={1}
            name="Daniel Furtado"
            company="wezen design"
            photo="https://ui-avatars.com/api/?name=Joao+Silva"
          />
        </li>
      </CustomersList>

      <Logo>
        <LogoSvg />
      </Logo>
    </Container>
  );
};

export default Menu;
