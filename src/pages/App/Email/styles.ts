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

export const PageTitle = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-size: 18px;
    color: #222222;
    margin-left: 10px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 240px;
  padding: 15px 20px;

  background: #ffffff;
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.05);

  textarea {
    flex: 1;
    margin-bottom: 10px;

    resize: none;

    border: none;
    line-height: 20px;

    &::placeholder {
      color: #999999;
    }
  }

  div {
    display: flex;

    button {
      margin-right: 20px;
    }
  }
`;
