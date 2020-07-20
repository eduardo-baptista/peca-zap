import styled from 'styled-components';

const Button = styled.button`
  color: #ffffff;
  font-weight: bold;
  background: #00a7cf;
  border-radius: 4px;
  box-shadow: 0px 1px 0px #0794b6;

  height: 38px;
  padding: 0 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    cursor: not-allowed;
    background: #007a99;
  }
`;

export default Button;
