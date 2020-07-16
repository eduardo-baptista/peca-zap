import styled from 'styled-components';
import Button from 'components/Button';

export const Form = styled.form`
  width: 295px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 260px;
    height: 116px;
  }
`;

export const IconsRow = styled.div`
  margin: 20px 0;
  width: 260px;
  display: flex;
  justify-content: space-between;
`;

export const ConfirmButton = styled(Button)`
  width: 100%;
  justify-content: space-between;
  padding: 0 15px 0 20px;
  margin-bottom: 20px;
`;

export const ForgotPasswordLink = styled.a`
  color: #999999;
`;
