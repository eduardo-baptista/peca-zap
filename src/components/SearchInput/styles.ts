import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  height: 38px;

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
