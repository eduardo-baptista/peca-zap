import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ChatContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow: auto;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 64px;

  padding: 0 20px;

  background: #ffffff;
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.05);

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    border: none;
    height: 100%;
    width: 100%;

    &::placeholder {
      color: #999999;
    }
  }
`;
