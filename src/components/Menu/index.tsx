import React, { useCallback } from 'react';
import ContentLoader from 'react-content-loader';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from 'store/modules/auth/actions';
import { changeSelectedId } from 'store/modules/customers/actions';

import { ReactComponent as DownArrowSvg } from 'assets/icons/down-arrow.svg';
import { ReactComponent as AddSvg } from 'assets/icons/add.svg';
import { ReactComponent as LogoSvg } from 'assets/white-logo.svg';

import Picture from 'components/Picture';
import PersonInfo from 'components/PersonInfo';
import CustomerInfo from 'components/CustomerInfo';
import SvgContainer from 'components/SvgContainer';
import SearchInput from 'components/SearchInput';

import { customersState } from 'store/modules/customers/types';
import {
  Container,
  MenuHeader,
  UserInfo,
  CustomersTitleRow,
  CustomersList,
  Logo,
} from './styles';

const Menu: React.FC = () => {
  const dispatch = useDispatch();

  const loading = useSelector(
    ({ customers: state }: { customers: customersState }) => state.loading
  );

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
        <SearchInput svgColor="#FFFFFF" />
        <CustomersTitleRow>
          CLIENTES
          <SvgContainer>
            <AddSvg />
          </SvgContainer>
        </CustomersTitleRow>
      </MenuHeader>
      {loading ? (
        <ContentLoader foregroundColor="#cccccc" style={{ flex: 1 }}>
          <circle cx="41" cy="35" r="24" />
          <rect x="77" y="21" rx="3" ry="3" width="150" height="10" />
          <rect x="77" y="42" rx="3" ry="3" width="130" height="10" />

          <circle cx="41" cy="107" r="24" />
          <rect x="77" y="93" rx="3" ry="3" width="150" height="10" />
          <rect x="77" y="113" rx="3" ry="3" width="130" height="10" />
        </ContentLoader>
      ) : (
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
                alerts={customer.totalMessages}
              />
            </li>
          ))}
        </CustomersList>
      )}

      <Logo>
        <LogoSvg />
      </Logo>
    </Container>
  );
};

export default Menu;
