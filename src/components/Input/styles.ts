import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 38px;
  background: #ffffff;

  border-radius: 4px;
  border: 1px solid #e0e7ed;
  margin-bottom: 10px;

  display: flex;

  input {
    flex: 1;
    height: 100%;
    border: 0;

    color: #333333;

    padding-left: 10px;

    &::placeholder {
      color: #c7d7e2;
    }
  }

  div {
    width: 38px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
