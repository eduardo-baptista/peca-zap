import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from 'store/modules/auth/actions';
import { changeSelectedId } from 'store/modules/customers/actions';

import { ReactComponent as DownArrowSvg } from 'assets/icons/down-arrow.svg';
import { ReactComponent as SearchSvg } from 'assets/icons/search.svg';
import { ReactComponent as AddSvg } from 'assets/icons/add.svg';
import { ReactComponent as LogoSvg } from 'assets/white-logo.svg';

import Picture from 'components/Picture';
import PersonInfo from 'components/PersonInfo';
import CustomerInfo from 'components/CustomerInfo';
import SvgContainer from 'components/SvgContainer';
import { customersState } from 'store/modules/customers/types';
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
  const selectedCustomer = useSelector(
    ({ customers: state }: { customers: customersState }) => state.selectedId
  );
  const customers = useSelector(
    ({ customers: state }: { customers: customersState }) => state.customers
  );

  const handleChangeCustomerId = useCallback(
    (id: number) => {
      dispatch(changeSelectedId(id));
    },
    [dispatch]
  );

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
        {customers.map((customer) => (
          <li key={customer.id}>
            <CustomerInfo
              id={customer.id}
              name={customer.name}
              company={customer.company}
              photo={customer.photo}
              isActive={selectedCustomer === customer.id}
              onClick={() => {
                handleChangeCustomerId(customer.id);
              }}
            />
          </li>
        ))}
      </CustomersList>

      <Logo>
        <LogoSvg />
      </Logo>
    </Container>
  );
};

export default Menu;
