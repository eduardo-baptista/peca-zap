import styled from 'styled-components';

export const Container = styled.div`
  width: 296px;
  color: #222222;
  overflow: auto;

  background: #ffffff;
  box-shadow: -4px 0px 2px rgba(0, 0, 0, 0.02);

  padding: 20px;
`;

export const CustomerInfo = styled.div`
  display: flex;
  align-items: cneter;
  justify-content: space-between;

  margin-bottom: 20px;

  h2 {
    color: #222222;
  }

  img {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  height: 38px;
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 1px 0px #e5e5e5;

  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  & ~ & {
    margin-left: 10px;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 12px;
  color: #79accd;
`;

export const LastConversationsContainer = styled.div`
  margin-bottom: 30px;

  li {
    margin-top: 10px;

    display: flex;
    align-items: center;
  }

  svg {
    width: 16px;
    height: 16px;

    margin-right: 8px;

    path {
      fill: #a7b6c2;
    }
  }
`;

export const ObservationsContainer = styled.div`
  line-height: 22px;
  margin-bottom: 30px;
  span {
    margin-top: 5px;
    font-size: 14px;
  }
`;

export const ContactsContainer = styled.div`
  svg {
    width: 24px;
    height: 24px;

    margin-right: 16px;

    path {
      fill: #a7b6c2;
    }
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
`;
