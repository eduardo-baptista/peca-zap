import styled from 'styled-components';

import menuBackground from 'assets/menu-background.svg';

export const Container = styled.div`
  width: 310px;
  height: 100%;

  background-image: url(${menuBackground});
  background-repeat: no-repeat;
  background-position: center calc(100% - 80px);

  display: flex;
  flex-direction: column;
`;

export const MenuHeader = styled.div`
  padding: 0 15px;
`;

export const UserInfo = styled.button`
  display: flex;
  align-items: center;
  background: none;

  width: 100%;
  height: 38px;

  margin-bottom: 10px;

  img {
    margin-right: 10px;
  }
`;

export const SearchInput = styled.div`
  width: 100%;
  height: 38px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;

  input {
    background: none;
    border: none;
    color: #333333;
    padding: 0 10px;

    flex: 1;
  }
`;

export const CustomersTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 38px;
  font-size: 12px;
  color: #ffffff;
`;

export const CustomersList = styled.ul`
  overflow: auto;
  flex: 1;
`;

export const Logo = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;
